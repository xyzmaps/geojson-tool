/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

import { resizerX } from './lib/resizer'
import geojsonValidation from 'geojson-validation'
import './style/style'
import isEqual from 'lodash.isequal'
import JSONFormatter from 'json-formatter-js'

import { featureProvider } from './components/hereMap/hereMap'

import {
    handleMultipleLocalFiles,
    multipleHttpGetAsync,
    getFeatureByURLParam,
    spaceLayer,
    spaceProvider,
    displayGeoJSON
} from './components/loadData'

import {
    isPosition,
    clearURLParam,
    resizeX,
    getLatLong,
    IsJsonString
} from './components/common'

import {editor, startValue} from './components/editor'
import { alertBar } from './components/alertBar.js'
import './components/eventHandling'
import {GeoRect} from "@here/xyz-maps-core";
import { Selection } from 'monaco-editor'
import * as monaco from "monaco-editor";

let HERE = window.HERE,
isPrettyPrint = false,
clickedFeatureStyles = [],
clickedFeatures,
multipleHighlightedFeaturesStyles = [],
multipleHighlightedFeatures,
featuresTobeHighlighted = [],
zoomValue = 2,
isDebug = false;

window.onload = function() {
    let mapEl = document.getElementById("map");
    document.querySelector('.zoom-info').innerHTML = display.getZoomlevel().toPrecision(2).toString();

    mapEl.addEventListener("dragover", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
    }, false);

    mapEl.addEventListener("drop", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        handleMultipleLocalFiles(ev.dataTransfer.files);
    }, false);

    display = initMap();
    display.addEventListener('dbltap', function(ev){
        display.setZoomlevel(display.getZoomlevel() + 1, ev.mapX, ev.mapY);
        document.querySelector('.zoom-info').innerHTML = display.getZoomlevel().toPrecision(2).toString();
    });

    // to change zoomlevel on map scroll zoom
    display.addEventListener('mapviewchangeend', function (ev) {
        document.querySelector('.zoom-info').innerHTML = display.getZoomlevel().toPrecision(2).toString();
    });

    // add helpful comment to compass
    document.querySelector('div[class$="-ui-needle"]').setAttribute('title',"To pitch and/or rotate, right click on map, and hold the mouse button while dragging the map.\nTo reset the map, click on the compass")
    document.querySelector('div[class$="-ui-compass"]').style.bottom = "105px";
    document.querySelector('div[class$="-ui-compass"]').style.right = "12px";

    //add popstate event
    window.addEventListener('popstate', function (ev) {
        getFeatureByURLParam();
    })

    document.getElementById("editor").ondrop = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        let fileFromTextarea = new File([editor.getValue()],"temp.geojson",{type: "application/json"});
        let filesToMerge = Array.from(ev.dataTransfer.files).concat(fileFromTextarea);
        handleMultipleLocalFiles(filesToMerge);
    };

    document.getElementById("editor").ondragover = function(e){
        e = e || event;
        e.preventDefault();
      };

    const model = editor.getModel();

    editor.onDidChangeModelContent(() => {
        const value = model.getValue();
        if(IsJsonString(value) && !isPrettyPrint) {
            displayGeoJSON(JSON.parse(value));
            document.getElementById('changeFeatureColor').style["display"] = 'block';
        } else {
            document.getElementById('changeFeatureColor').style["display"] = 'none';
        }
      });

    resizerX("sliderPan", function (e) {
        resizeX(e.pageX);
        display.resize();
    });

    getFeatureByURLParam();
}

function initMap() {
    display.addEventListener('pointerup', function (ev) {

        let target = ev.target,
        refresh = false,
        data = {};
        document.querySelector('#info').innerHTML = "";

        if (target && target.properties && !target.properties.sort_rank) {
            let currentPtGeometryType = ev.target.geometry.type;
            data.geometry = {};
            data.geometry.type = ev.target.geometry.type;
            if(target.properties) {
                data.properties = target.properties;
            }else {
                data.properties = {};
            }
            let formatter = new JSONFormatter(data, 1, {
                theme: 'dark'
            });

            document.querySelector('#info').appendChild(formatter.render());
            formatter.openAtDepth(2);

            let counter, startLineNr,
            startLine, currentLine = '';

            for (counter = 1; counter <= editor.getModel().getLineCount(); counter++) {
                startLine = editor.getModel().getLineContent(counter);
                if(startLine.indexOf('"geometry"') > -1 && !(startLine.indexOf('null') > -1) ) {
                    startLineNr = counter;
                    let geometryObj = '';

                    while(currentLine.indexOf('}') < 0) {
                        currentLine = editor.getModel().getLineContent(counter);
                        if (currentLine.indexOf("properties") > -1 && counter > 0) {
                            currentLine = currentLine.slice(0,currentLine.indexOf("properties")-1);
                        }
                        geometryObj = geometryObj + currentLine;
                        counter++;
                    }if (!geometryObj.endsWith("}")) {
                        geometryObj = geometryObj.slice(0,geometryObj.lastIndexOf("}")+1);
                    }
                    if (currentPtGeometryType === "Polygon" || currentPtGeometryType === "MultiPolygon") {
                        delete ev.target.geometry._xyz;
                    }
                    if(isEqual(JSON.parse('{'+geometryObj.split('{')[1]), ev.target.geometry)) {
                       editor.setSelection(new Selection(startLineNr,1,counter,editor.getModel().getLineLength(counter)));
                       editor.revealLineInCenter(startLineNr,0);
                    }
                }
                currentLine = '';
            }

            if(multipleHighlightedFeatures) {
                resetHighlightedFeaturesStyle();
            } // To reset previously highlighted ref features.

            if(target.properties['association_ids'] && target.properties['association_ids'].length > 0) {
                featuresTobeHighlighted = [];
                target.properties['association_ids'].forEach(function(id) {
                    featuresTobeHighlighted.push(featureProvider.getFeature(id));
                });
                highlightMultipleFeatures(featuresTobeHighlighted);
            } //To highlight associated features if clicked feature contains 'association_ids' property

        } else {
            resetHighlightedFeaturesStyle();
            alertBar(0);
        }

        highlightSelectedFeatures(ev.target);

        if (target || refresh) {
            display.refresh(display.getLayers(1));
        }
    });
    window.addEventListener("resize", display.resize());
    return display;
}

function highlightSelectedFeatures(selectedFeatures) {
    let layerKey = 1;
    if(!Array.isArray(selectedFeatures)) {
        selectedFeatures = [selectedFeatures];
    }

    if(spaceLayer) {
        layerKey = 2;
    }

    for (let i = 0; clickedFeatures && (i < clickedFeatures.length); i++) {
        // Restore default feature style
        if (clickedFeatures[`${i}`]) display.getLayers()[`${layerKey}`].setStyleGroup(clickedFeatures[`${i}`], clickedFeatureStyles[`${i}`]);

    }

    if(selectedFeatures[0] && selectedFeatures[0].properties.sort_rank && selectedFeatures[0].properties.kind) {
        clickedFeatures = null; // if mvt layer is enabled.
    } else {
        clickedFeatures = selectedFeatures;
    }

    for(let j = 0; clickedFeatures && (j < clickedFeatures.length); j++ ){
        if(clickedFeatures[`${j}`]) {
            clickedFeatureStyles[`${j}`] = display.getLayers()[`${layerKey}`].getStyleGroup(clickedFeatures[`${j}`]);

            // Set new feature style if mouse clicks on a feature
            display.getLayers()[`${layerKey}`].setStyleGroup(clickedFeatures[`${j}`], setHighlightedStyle(clickedFeatures, j));
        }
    }
}

function highlightMultipleFeatures(selectedFeatures) {
    let layerKey = 1;

    if(!Array.isArray(selectedFeatures)) {
        selectedFeatures = [selectedFeatures];
    }

    if(spaceLayer) {
        layerKey = 2;
    }

    if(selectedFeatures[0] && selectedFeatures[0].properties.sort_rank && selectedFeatures[0].properties.kind) {
        clickedFeatures = null; // if mvt layer is enabled.
    } else {
        multipleHighlightedFeatures = selectedFeatures;
    }

    for(let j = 0; multipleHighlightedFeatures && (j < multipleHighlightedFeatures.length); j++ ){

        if(multipleHighlightedFeatures[`${j}`]) {
            multipleHighlightedFeaturesStyles[`${j}`] = display.getLayers()[`${layerKey}`].getStyleGroup(multipleHighlightedFeatures[`${j}`]);

            // Set new feature style if mouse clicks on a feature
            display.getLayers()[`${layerKey}`].setStyleGroup(multipleHighlightedFeatures[`${j}`], setHighlightedStyle(multipleHighlightedFeatures, j, '#3A7BDB'));
        }
    }
}

function resetHighlightedFeaturesStyle() {
    let layerKey = 1;

    if(spaceLayer) {
        layerKey = 2;
    }

    for (let i = 0; multipleHighlightedFeatures && (i < multipleHighlightedFeatures.length); i++) {
        // Restore default feature style
        if (multipleHighlightedFeatures[`${i}`]) display.getLayers()[`${layerKey}`].setStyleGroup(multipleHighlightedFeatures[`${i}`], multipleHighlightedFeaturesStyles[`${i}`]);
    }
}

function setHighlightedStyle(clickedFeatures, j, color) {
    let currentBearing = clickedFeatures[`${j}`].properties.vehicleBearing || clickedFeatures[`${j}`].properties.heading_deg,
    currentMarker = clickedFeatures[`${j}`].properties["marker-url"],
    currentMarkerText = clickedFeatures[`${j}`].properties["marker-text"],
    currentGeometryType = clickedFeatures[`${j}`].geometry.type,
    geometryType = currentGeometryType === "LineString" || currentGeometryType === "MultiLineString" ? "Line" :
                        currentGeometryType === "Polygon" || currentGeometryType === "MultiPolygon" ? "Polygon" :
                        currentGeometryType === "Point" || currentGeometryType === "MultiPoint" ? "Circle" :
                        currentGeometryType;
    let customStyle = {
        zIndex: 1000,
        stroke: currentMarkerText ? '' : color ? color : "magenta",
        strokeWidth: 8,
        radius: 5,
        width: 32,
        height: 32,
        text: currentMarkerText,
        font:"normal 14px Arial",
        rotation: currentBearing,
        fill: function(feature) {
            if(currentMarkerText) {
                return color ? 'black' : "magenta";
            }else {
                return geometryType === "Line" ? '' : color ? color : "magenta";
            }
        },
        type: currentBearing || currentMarker ? 'Image' : currentMarkerText ? 'Text' : geometryType,
        opacity: function(feature) {
            if(currentBearing || currentMarker) {
                return 0.6;
            } else if(feature.geometry.type.indexOf('Point') > -1 || feature.geometry.type.indexOf('LineString') > -1 ) {
                return 1;
            } else {
                return 0.3;
            }
        },
        src: function(feature) {
            if(currentMarker) {
                return currentMarker;
            } else if(currentBearing) {
                return getDirectionImage('magenta');
            }
        }
    };

    if(currentMarkerText) {
        customStyle.zIndex = 4;
    }
    return customStyle;
}

function getgeoJSONByUrl() {
    if(document.querySelector('#geojson-url').value !== ''){
        clearURLParam();
        multipleHttpGetAsync(document.querySelector('#geojson-url').value);
    }
}

function getGeojsonByUrlOrLatlong() {
    let geojsonUrlOrLatlong = document.querySelector('#geojson-url-or-latlong').value,
    isURL = geojsonUrlOrLatlong.includes('/');
    if(geojsonUrlOrLatlong.substring(0,4) === 'http' && isURL){
        clearURLParam();
        multipleHttpGetAsync(geojsonUrlOrLatlong);
    }else {
        let lat = parseFloat(geojsonUrlOrLatlong.split(",")[1]),
        long = parseFloat(geojsonUrlOrLatlong.split(",")[0]);
        if (!isNaN(lat) && !isNaN(long)) {
            getLatLong(long, lat);
        }
    }
}

document.querySelector('.getgeoJSONByUrl').addEventListener('click', function(){
    getgeoJSONByUrl();
});

document.querySelector('.latlongBtn').addEventListener('click', function(){
    getGeojsonByUrlOrLatlong();
});


editor.onDidChangeCursorSelection(() => {
    let featureFromProvider,
    selectedString = editor.getModel().getValueInRange(editor.getSelection()),
    isPositionInEditor = isPosition(selectedString);
    if(isPositionInEditor) {
        document.getElementById('info').innerHTML = "";
        display.setCenter(isPositionInEditor);
        display.setZoomlevel(20);
    } else if(IsJsonString(selectedString)) {
        let feature = JSON.parse(selectedString);
        if( geojsonValidation.isFeature(feature) ) {
            for(let key in featureProvider.IDPOOL) {
                featureFromProvider = featureProvider.IDPOOL[`${key}`].feature;
                if( isEqual(featureFromProvider.geometry, feature.geometry)) {
                    let minLon = featureFromProvider.bbox[0],
                     minLat = featureFromProvider.bbox[1],
                     maxLon = featureFromProvider.bbox[2],
                     maxLat = featureFromProvider.bbox[3];
                    highlightSelectedFeatures(featureFromProvider);
                    display.setViewBounds(
                        new GeoRect( minLon, minLat, maxLon, maxLat)
                    );
                }
            }
        }
    } else {
        highlightSelectedFeatures(featureFromProvider);
    }
})

document.getElementById('geojsonFileInput').onclick = function() {
    this.value = null;
};

document.getElementById('geojsonFileInput').onchange = function() {
    handleMultipleLocalFiles(document.querySelector('#geojsonFileInput').files);
};

document.getElementById("geojson-url-or-latlong").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        getGeojsonByUrlOrLatlong();
    }
});

document.querySelector('#geojson-url').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        getgeoJSONByUrl();
    }
});

document.body.addEventListener('click', function(event) {
    let provider = featureProvider;
    if (event.target.className === 'json-formatter-key' && event.target.nextSibling.innerText)
    {
        let propertyValue,
            featureFromProvider,
            featureTobeHighlight = [],
            totalFeatureCountOnMap = 0,
            propertyLabel = event.target.innerText.replace(/:\s*$/, '');

        if(event.target.nextSibling.className === 'json-formatter-boolean')
        {
            propertyValue = JSON.parse( event.target.nextSibling.innerText.replace(/['"]+/g, '') ); // Converting string boolean value to boolean
        } else
        {
            propertyValue = event.target.nextSibling.innerText.replace(/['"]+/g, '');
        }

        if(spaceProvider) {
            provider = spaceProvider;
        }

        for(let id in provider.IDPOOL) {
            featureFromProvider = provider.IDPOOL[`${id}`].feature;

            for (let key in featureFromProvider.properties) {

                if(key === propertyLabel) {

                    if (featureFromProvider.properties[`${key}`] === propertyValue) {

                        featureTobeHighlight.push(featureFromProvider);
                    }
                }
            }
            totalFeatureCountOnMap++;
        }

        highlightSelectedFeatures(featureTobeHighlight);

        if(featureTobeHighlight.length > 0) {
            alertBar(1, 'success', 'Displaying '+ totalFeatureCountOnMap +' feature(s), highlighting '+ featureTobeHighlight.length +' feature(s) with <i>' + propertyLabel + ' : ' + propertyValue +'</i>');
        } else {
            alertBar(0);
        }
    }
});

document.getElementById('showQuadkeys').addEventListener('click', function(){
    if (isDebug) {
        display.debug(false);
        isDebug = false;
    } else {
        display.debug(true);
        isDebug = true;
    }
});

document.getElementById("darkMode").addEventListener('click', function () {
    if (this.title === "Dark Mode") {
        //dark mode
        monaco.editor.setTheme('vs-dark');
        document.getElementById('LineDark').click();
        document.getElementById('desktopNavigationBar').style.backgroundColor = "#1e1e1e";
        document.getElementById('tab').style.backgroundColor = "#1e1e1e";
        document.getElementById('panelWrapper').style.backgroundColor = "#1e1e1e";
        document.getElementById('load-sample-wrapper').style.backgroundColor = "#1e1e1e";
        document.getElementById('geojson-url').style.color = "#000";
        for (let it of document.getElementsByClassName("button")) {
            it.style.color = "#fff"
        }
        document.getElementById('load-data-wrapper').style.color = "#fff";
        document.getElementById('load-data-wrapper').style.backgroundColor = "#1e1e1e";
        document.getElementById('editor-tab').style.background = 'url("images/document-editWhite.svg") no-repeat center';
        document.getElementById('load-data-tab').style.background = 'url("images/file-uploadWhite.svg") no-repeat center';
        document.getElementById('load-sample-tab').style.background = 'url("images/worldwideWhite.svg") no-repeat center';
        document.getElementById('copyToClipboard').style.background = 'url("images/cpWhite.svg") no-repeat center';
        document.getElementById('clearContent').style.background = 'url("images/cleaningWhite.svg") no-repeat center';
        this.style.background = 'url("images/light-mode.svg") no-repeat center'
        this.title = "Light Mode"
    } else {
        ///light mode
        monaco.editor.setTheme('vs');
        document.getElementById('SpringSoft').click();
        document.getElementById('desktopNavigationBar').style.backgroundColor = "#fff";
        document.getElementById('tab').style.backgroundColor = "#fff";
        document.getElementById('panelWrapper').style.backgroundColor = "#fff";
        document.getElementById('load-sample-wrapper').style.backgroundColor = "#f5f4f4";
        document.getElementById('load-data-wrapper').style.backgroundColor = "#f5f4f4";
        document.getElementById('load-data-wrapper').style.color = "#000";
        for (let it of document.getElementsByClassName("button")) {
            it.style.color = "#000"
        }
        document.getElementById('editor-tab').style.background = 'url("../images/document-edit.svg") no-repeat center';
        document.getElementById('load-data-tab').style.background = 'url("../images/file-upload.svg") no-repeat center';
        document.getElementById('load-sample-tab').style.background = 'url("../images/worldwide.svg") no-repeat center';
        document.getElementById('copyToClipboard').style.background = 'url("../images/cp.svg") no-repeat center';
        document.getElementById('clearContent').style.background = 'url("../images/cleaning.svg") no-repeat center';
        this.style.background = 'url("../images/dark-mode.svg") no-repeat center';
        this.title = "Dark Mode"
    }
    document.getElementById('editor').style.display = "block";
    document.getElementById('editor').className = "tabLinks selected";
})

setTimeout(()=>display.resize(),0);
