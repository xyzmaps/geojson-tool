/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

import {
    satelliteLayer,
    terrainLayer,
    miamiDayLayer,
    springSoftLayer,
    springBrightLayer,
    lineDarkLayer,
    lineWhiteLayer,
    featureProvider
} from './hereMap/hereMap'
import {getCustomStyle} from './hereMap/getCustomStyle'
import { toggleMapView, clearURLParam } from './common'
import { spaceLayer, clearSpaceData } from './loadData'
import { editor, startValue } from './editor'
import {alertBar} from "./alertBar";
let isDebug = false,
    currentMap = springSoftLayer,
    currentStyle = "blue";

function addLayer(l) {
    display.addLayer(l,0);
    currentMap = l;
}

function removeLayer() {
    display.removeLayer(currentMap);
    currentMap = null;
}

function DebugOnOff() {
    if (isDebug) {
        display.debug(false);
        display.debug(true);
    }
}

document.getElementById('zoomIn').addEventListener('click', function(ev){
    display.setZoomlevel(display.getZoomlevel() + 1);
    document.querySelector('.zoom-info').innerHTML = display.getZoomlevel().toPrecision(2).toString();
    DebugOnOff();
});

document.getElementById('zoomOut').addEventListener('click', function(ev){
    if(display.getZoomlevel() > 2) {
        display.setZoomlevel(display.getZoomlevel() - 1);
        document.querySelector('.zoom-info').innerHTML = display.getZoomlevel().toPrecision(2).toString();
      }
    DebugOnOff();
});

document.getElementById('changeFeatureColor').addEventListener('click', function(ev) {
    window.display.getLayers().forEach(it => {
        if (it.name === "featureLayer") {
            if (currentStyle === "blue") {
                it.setStyle(getCustomStyle("black"));
                currentStyle = "black";
                document.getElementById('changeFeatureColor').style.background = '#032c2b';
                document.getElementById('changeFeatureColor').style["border-color"] = '#fff';
            } else if (currentStyle === "black"){
                it.setStyle(getCustomStyle("yellow"));
                currentStyle = "yellow";
                document.getElementById('changeFeatureColor').style.background = '#ffe800';
                document.getElementById('changeFeatureColor').style["border-color"] = 'rgba(255,145,0,0.8)';
            } else if (currentStyle === "yellow"){
                it.setStyle(getCustomStyle("blue"));
                currentStyle = "blue";
                document.getElementById('changeFeatureColor').style.background = '#00afaa';
                document.getElementById('changeFeatureColor').style["border-color"] = 'rgba(29,87,84,0)';
            }
        }
    })
});

document.getElementById('mapSwitcher').addEventListener('click', function(e){
    if (e.target.title !== "Map Styles") {
        removeLayer();
        let layer;
        switch (e.target.title) {
            case "Miami":
                layer = miamiDayLayer;
                break;
            case "SpringSoft":
                layer = springSoftLayer;
                break;
            case "SpringBright":
                layer = springBrightLayer;
                break;
            case "LineDark":
                layer = lineDarkLayer;
                break;
            case "LineWhite":
                layer = lineWhiteLayer;
                break;
            case "Satellite":
                layer = satelliteLayer;
                break;
            case "Terrain":
                layer = terrainLayer;
                break;
        }
        document.getElementsByClassName("activeStyle")[0].className = "";
        document.getElementById(e.target.id).className += "activeStyle";
        addLayer(layer);
        DebugOnOff();
    }
});

document.getElementById('fullScreenToggle').addEventListener('click', function(){
    toggleMapView();
});

document.querySelector('.geojsonFileInput').addEventListener('click', function(){
    document.getElementById('geojsonFileInput').click();
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Escape') {
        toggleMapView();
    }
});

document.getElementById('tab').addEventListener('click', function(e) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[`${i}`].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[`${i}`].className = tabLinks[`${i}`].className.replace(" selected", "");
    }

    if(e.target.title === 'Editor') {
        document.getElementById('editor').style.display = "block";
        e.target.className = "tabLinks selected";
    } else if(e.target.title === 'Load Data') {
        document.getElementById('load-data-wrapper').style.display = "block";
        document.getElementById('editor').style.display = "none";
        e.target.className = "tabLinks selected";
    } else if(e.target.title === 'Load Sample') {
        document.getElementById('load-sample-wrapper').style.display = "block";
        document.getElementById('editor').style.display = "none";
        e.target.className = "tabLinks selected";
    } else if(e.target.title === 'Clear Content') {
        featureProvider.clear();
        document.querySelector('#info').innerHTML = "";
        document.querySelector('#editor-tab').click();
        editor.getModel().setValue(startValue);
        clearURLParam();
        display.removeLayer(spaceLayer);
        clearSpaceData();
        document.querySelector('#editor-tab').click();
        document.getElementById('changeFeatureColor').style.display = 'none';
    } else if(e.target.title === 'Copy Content') {
        document.querySelector('#editor-tab').click();
        navigator.clipboard.writeText(editor.getValue()).then(r => alertBar(1, 'success','Successfully copied to clipboard!'))
    }
});
