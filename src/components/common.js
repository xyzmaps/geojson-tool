/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

import { featureProvider } from './hereMap/hereMap'
import {editor} from "./editor";

export function validateGeojson(isValid, error) {
    if(!isValid){
        window.setTimeout(function(){
            for(let i = 0; i < error.length; i++ ) {
                editor.setGutterMarker(i, 'CodeMirror-lint-markers', createMarker(error[`${i}`]));
                console.log('Invalid GeoJSON: ' ,error[`${i}`]);
            }
        }, 500);
    }
}

export function createMarker(errorMessage) {
    let div = document.createElement('div'),
    message = document.createAttribute("message");
    message.value = errorMessage;
    div.setAttributeNode(message);
    div.className = "CodeMirror-lint-marker-error error-tooltip";
    return div;
}

export function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function isPosition(selectedTxt) {

    let long = parseFloat(selectedTxt.split(',')[0]),
    lat =  parseFloat(selectedTxt.split(',')[1]);
    if (typeof lat === 'number' && lat <= 90 && lat >= -90 &&
        typeof long === 'number' && long <= 180 && long >= -180){
        return [long, lat];
    }
    return false;
}

export function clearURLParam() {
    let url = window.location.href.split('url=');
    if(url[1]) {
        window.history.pushState({}, "", url[0]);
    }
}

/* slider JS */

export function resizeX(x) {
    let leftPanel = document.getElementById("panelWrapper"),
    mapContainer = document.getElementById("mapWrapper"),
    leftPanelWidth = leftPanel.parentElement.clientWidth + document.getElementById('mainContainer').offsetLeft - x,
    mapContainerWidth = window.innerWidth - leftPanelWidth - 5;
    document.getElementById('mainContainer').style.gridTemplateColumns = mapContainerWidth + 'px 7px ' + leftPanelWidth + 'px';
}

export function getLatLong(latInfo, longInfo) {
    let pointFeature = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                latInfo,
                longInfo
            ]
        }
    };
    display.setCenter(latInfo, longInfo);
    display.setZoomlevel(20);
    featureProvider.addFeature( pointFeature );
    window.setTimeout(function(){
        featureProvider.removeFeature( pointFeature );
    }, 1000);
}

export function onlyMapView() {
    document.querySelector('.desktopNavigationBar').style.display = 'none';
    document.querySelector('.map-panel-wrapper').style.display = 'none';
    document.querySelector('.sliderPan').style.display = 'none';
    document.querySelector('.panel-wrapper').style.display = 'none';
    document.querySelector('.map-container').style.height = '100%';
    document.querySelector('.main-container').style.height = '100%';
    document.querySelector('.main-container').style.gridTemplateColumns = '100%';
    display.resize();
}

function originalToolView() {
    document.querySelector('.desktopNavigationBar').style.display = 'flex';
    document.querySelector('.map-panel-wrapper').style.display = 'block';
    document.querySelector('.sliderPan').style.display = 'block';
    document.querySelector('.panel-wrapper').style.display = 'block';
    document.querySelector('.map-container').style.height = 'calc(100% - 50px)';
    document.querySelector('.main-container').style.height = 'calc(100% - 50px)';
    document.querySelector('.main-container').style.gridTemplateColumns = '65% 7px 34.61%';
    display.resize(document.querySelector('.map-container').offsetWidth, window.innerHeight - 50);
    document.getElementById('fullScreenToggle').style.display = 'block';
}

export function toggleMapView() {
    let sliderPan = document.querySelector(".sliderPan");
    if (sliderPan.style.display === "block") {
        onlyMapView();
    } else {
        originalToolView();
    }
}
