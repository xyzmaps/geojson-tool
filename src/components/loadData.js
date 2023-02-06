/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

import { editor } from './editor'
import { getCustomStyle } from './hereMap/getCustomStyle'
import { alertBar } from './alertBar.js'
import { featureProvider } from './hereMap/hereMap'
import {GeoRect, SpaceProvider, TileLayer} from "@here/xyz-maps-core";
import {onlyMapView} from "./common";
let spaceLayer,
spaceProvider,
token = null;


function loader(type) {
    if(type === 'block') {
        document.querySelector('.loader').style.display = 'block';
    } else {
        document.querySelector('.loader').style.display = 'none';
    }
}

export function clearSpaceData() {
    spaceLayer = undefined;
    spaceProvider = undefined;
}

document.getElementById('authButton').addEventListener('click', function(e) {
    if (token != null) {
        token = null;
        document.getElementById('authHeader').value = '';
        document.getElementById('authButton').innerHTML = 'Authorize';
    } else {
        token = document.getElementById('authHeader').value;
        console.log(document.getElementById('authButton'));
        document.getElementById('authButton').innerHTML = 'Clear';
    }
})

export function handleMultipleLocalFiles(fileList) {

    let featuresCollectionArr = [],
    filesProcessed = 0;
    loader('block');
    for(let s = 0; s<fileList.length; s++){

        let reader = new FileReader();
        reader.onload = function (loadedEvent)
        {
            let txt = loadedEvent.target.result;
            featuresCollectionArr.push(txt);
            filesProcessed++;
            if(filesProcessed === fileList.length)
            {
                let featuresList = [];
                for(let j = 0; j<featuresCollectionArr.length;j++ ){
                    featuresList = handleMultipleFeature(featuresCollectionArr[`${j}`], featuresList);
                }
                let newFeatureCollection =
                {
                    "type": "FeatureCollection",
                    "features": featuresList
                };
                handleMultipleGeojsonResponse(newFeatureCollection);
                loader('unblock');
            }
        };
        reader.readAsText(fileList[`${s}`]);
    }
}

export function multipleHttpGetAsync(urls) {
    let promises = [];

    if(!(urls instanceof Array)){
        urls = [urls];
    }
    for(let i = 0; i < urls.length; i++) {
        loader('block');
        promises.push(getPromise(urls[`${i}`]));
    }

    Promise.all(promises).then(function(data) {
        if(urls.length === 1) {
            handleGeojsonResponse(data[0].responseText);
            if(!document.location.href.split('url=')[1]){
                window.history.pushState({}, "", document.location.href+"?url="+data[0].responseURL);
            }
        } else {
            let newFeatureCollection = {
                "type": "FeatureCollection",
                "features": handleMultipleXhr(data)
            };
            handleMultipleGeojsonResponse(newFeatureCollection);
        }
        loader('unblock');
    });
}

export function getFeatureByURLParam() {
    let urlParam = window.location.href.split('url=')[1];

    if(urlParam) {
        if(urlParam.indexOf('maponly=') > -1) {
            let urlList = urlParam.split('&maponly')[0];
            multipleHttpGetAsync(urlList.split(';'));
        } else {
            multipleHttpGetAsync(urlParam.split(';'));
        }
    } else {
        let params = new URLSearchParams(window.location.search);
        if(params.has("space") && params.has("access_token")){
            loadSpace(params.get("space"), params.get("access_token"));
        }
    }

    if( window.location.href.indexOf('maponly=true') > -1) {
        onlyMapView();
        document.querySelector('.fullScreenToggle').style.display = 'none';
    }
}

function loadSpace(spaceId, spaceAccessToken) {

    spaceProvider = new SpaceProvider ({
        name: 'spaceProvider',
        level: 2,
        space: spaceId,
        credentials: {
            access_token: spaceAccessToken,
            limit: 100000
        }
    });

    spaceLayer = new TileLayer ({
        name: 'spaceLayer',
        min: 2,
        max: 20,
        providers: [{
            min: 2,
            max: 20,
            provider: spaceProvider
        }],
        style: getCustomStyle("light")
    });

    display.addLayer(spaceLayer);
}

function handleMultipleXhr(data) {
    let featureList = [];
    for(let i = 0; i< data.length; i++) {
        let respText = data[`${i}`].responseText;

        if(data[`${i}`].getResponseHeader('Content-Type').indexOf('json') > -1) {
            featureList = handleMultipleFeature(respText, featureList);
        } else if(data[`${i}`].getResponseHeader('Content-Type').indexOf('text') > -1) {
            try {
                featureList = handleMultipleFeature(respText, featureList);
            } catch(e) {
                alertBar(1, 'error','Error: Unexpected Content-Type.');
            }
        }
    }
    return featureList;
}

function getPromise(url, wHeader=true) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open( 'GET', url, true );
        if (wHeader && token != null) {
            xhr.setRequestHeader("Authorization", token);
        }
        xhr.onload = function(e) {
            if(xhr.readyState === 4){
                if (xhr.status === 200) {
                    resolve(xhr);
                } else {
                    loader('unblock');
                    console.log('Error code ' + xhr.status + ' for ' + xhr.responseURL);
                    alertBar(1, 'error','Error: Failed to load resource.');
                }
            } else {
                loader('unblock');
                alertBar(1, 'error','Error: Failed to load resource.');
            }
        }
        xhr.onerror = function(e) {
            loader('unblock');
            alertBar(1, 'error','Error: Failed to load resource.');
        }
        xhr.send(null);
    });
}

function handleMultipleFeature(respText, featureList) {
    let parsed = JSON.parse(respText),
    currentFeatureCollection;

    if(parsed.type === 'FeatureCollection') {
        currentFeatureCollection = parsed.features;
    } else if(parsed.type === "MultiPoint" ||
        parsed.type === "LineString" ||
        parsed.type === "MultiLineString" ||
        parsed.type === "Polygon" ||
        parsed.type === "Point" ||
        parsed.type === "MultiPolygon") {
        currentFeatureCollection = [{
            "type": "Feature",
            "properties": {},
            "geometry": parsed
        }]
    } else {
        currentFeatureCollection = [parsed];
    }

    for(let j=0; j<currentFeatureCollection.length; j++) {
        featureList.push(currentFeatureCollection[`${j}`]);
    }

    return featureList;
}

function byteLength(str) {
    // returns the byte length of an utf8 string
    let s = str.length;
    for (let i=str.length-1; i>=0; i--) {
        let code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s+=2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
}

function handleGeojsonResponse(txt) {
    let geojsonTxt = JSON.parse(txt);
    if(byteLength(txt) < 200000000){
        document.querySelector('#editor-tab').click();
        editor.setValue(JSON.stringify(geojsonTxt, null, 2));
    } else {
        displayGeoJSON(geojsonTxt);
        window.setTimeout(function(){
            alertBar(1, 'warning','Editor is not loaded with JSON as data size is more than 20mb.');
        }, 3000);
    }
}

function handleMultipleGeojsonResponse(obj) {
    let geojsonTxt = JSON.stringify(obj);
    if(byteLength(geojsonTxt) < 200000000){
        document.querySelector('#editor-tab').click();
        editor.setValue(JSON.stringify(obj, null, 2));
    } else {
        displayGeoJSON(obj);
        window.setTimeout(function(){
            alertBar(1, 'warning','Editor is not loaded with JSON as data size is more than 20mb.');
        }, 3000);
    }
}

export function displayGeoJSON(collection) {
    let failedFeature = 0;
    document.querySelector('#info').innerHTML = "";
    alertBar(0);
    if( !(collection instanceof Array) ) {
        if(collection.type === "FeatureCollection") {
            collection = collection.features;
        } else if(collection.type === "MultiPoint" ||
            collection.type === "LineString" ||
            collection.type === "MultiLineString" ||
            collection.type === "Polygon" ||
            collection.type === "Point" ||
            collection.type === "MultiPolygon") {
            collection = [{
                "type": "Feature",
                "properties": {},
                "geometry": collection
            }]
        } else {
            collection = [collection];
        }
    }

    let length = collection.length;

    if( length )
    {
        featureProvider.clear();

        let minLon=Infinity, minLat=Infinity, maxLon=-Infinity, maxLat=-Infinity;

        while( length-- )
        {
            // feature.bbox is only optional by geojson spec so we cant rely on...
            // ...but the maphub provider is making sure every feature includes a boundingbox =)
            try{
                let feature = featureProvider.addFeature( collection[`${length}`] );

                // GeometryCollections are not supported for now.
                if( feature )
                {
                    let bbox = feature.bbox;
                    if (bbox[0] < minLon) minLon = bbox[0];
                    if (bbox[1] < minLat) minLat = bbox[1];
                    if (bbox[2] > maxLon) maxLon = bbox[2];
                    if (bbox[3] > maxLat) maxLat = bbox[3];
                }
            }catch(e){
                console.log("Failed to add current feature : "+JSON.stringify(collection[`${length}`]));
                failedFeature++;
            }
        }

        if( minLon < Infinity ) {
            display.setViewBounds(
                new GeoRect( minLon, minLat, maxLon, maxLat )
            );
        }

        if(failedFeature) {
            alertBar(1, 'info', featureProvider.cnt + ' feature(s) added successfully and ' + failedFeature +' feature(s) failed to load.');
            console.error("Failed to add "+ failedFeature +" feature(s)");
        } else if(featureProvider.cnt && window.location.href.indexOf('maponly') === -1) {
            alertBar(1, 'success', featureProvider.cnt + ' feature(s) added successfully.');
        }
    }
}

export { spaceLayer, spaceProvider }
