/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

import '@here/xyz-maps-common';
import '@here/xyz-maps-core';
import {Map} from '@here/xyz-maps-display';
import '@here/xyz-maps-display';
import {MVTLayer, TileLayer, LocalProvider} from "@here/xyz-maps-core";
import  { getCustomStyle } from './getCustomStyle';
import springSoft from "../themes/WithLabel/here/spring-soft";
import miamiDay from "../themes/WithLabel/here/miamiDay";
import springBright from "../themes/WithLabel/here/springBright";
import lineDark from "../themes/WithLabel/here/lines_dark";
import lineWhite from "../themes/WithLabel/here/lines_white";
let lat, long, zoom;

let urlParam = window.location.href.split('map=')[1];
if(urlParam) {
    lat = parseFloat(urlParam.split(",")[1]);
    long = parseFloat(urlParam.split(",")[0]);
    zoom = parseFloat(urlParam.split(",")[2]);
}
function getMVTLayerWithStyle(style) {
    return new MVTLayer({
        name   : 'mvt-world-layer',
        remote : {
            url : 'https://tile.nextzen.org/tilezen/vector/v1/256/all/{z}/{x}/{y}.mvt?api_key=DpCrhQqsR2igQPEINRTfcw'
        },
        min : 1,
        max : 20,
        style: style
    });
}

//Styled MVT layers
let miamiDayLayer = getMVTLayerWithStyle(miamiDay),
    springSoftLayer = getMVTLayerWithStyle(springSoft),
    springBrightLayer = getMVTLayerWithStyle(springBright),
    lineDarkLayer = getMVTLayerWithStyle(lineDark),
    lineWhiteLayer = getMVTLayerWithStyle(lineWhite);

let featureProvider = new LocalProvider({
    name: 'featureProvider'
});

let featureLayer = new TileLayer({
    name: 'featureLayer',
    min: 0,
    max: 20,
    provider: featureProvider,
    style: getCustomStyle("blue")
});

let config = {
    zoomLevel: urlParam ? zoom : 2,
    center: {
        "longitude": urlParam ? long : 25.91699,
        "latitude": urlParam ? lat : 11.38269
    },
    ui: {
        ZoomControl: false
    },
    layers: [springSoftLayer, featureLayer],
    behavior: {
        pitch: true,
        rotate: true
    }
};

window.display = new Map(document.getElementById("map"), config);

export {
    featureProvider,
    springSoftLayer,
    springBrightLayer,
    miamiDayLayer,
    lineDarkLayer,
    lineWhiteLayer
}
