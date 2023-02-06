/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

export function getCustomStyle(favor) {
    let outLineColor, color;
    switch (favor) {
        case "black":
            outLineColor = 'rgb(255,255,255)';
            color = '#032c2b';
            break;
        case "blue":
            outLineColor = 'rgb(0,0,0,0)';
            color = '#00afaa';
            break;
        case "yellow":
            outLineColor = 'rgba(255,145,0,0.8)';
            color = '#ffe800';
            break;
    }
    return {
        styleGroups:{
            "Point": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 999;
                },
                type:"Circle",
                stroke: function(feature){
                    return handleColorType(feature.properties.stroke) || handleColorType(feature.properties.color) || outLineColor;
                },
                "strokeWidth": function(feature){
                    return feature.properties['stroke-width'] || 8;
                },
                fill: function(feature){
                    return feature.properties.fill || handleColorType(feature.properties.color) || color;
                },
                radius: function(feature){
                    return feature.properties.r || 5;
                },
                opacity: function(feature){
                    return feature.properties.opacity || 1;
                },
            }],
            "Point_marker": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 999;
                },
                type:"Image",
                src: function(feature){
                    return feature.properties['marker-url'] || '';
                },
                width:32,
                height:32

            }],
            "LineString": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 2;
                },
                type:"Line",
                stroke: function(feature){
                    return handleColorType(feature.properties.stroke) || handleColorType(feature.properties.color) || color;
                },
                "strokeWidth": function(feature){
                    return feature.properties['stroke-width'] || 8;
                }
            }],
            "Polygon": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 2;
                },
                type:"Polygon",
                stroke: function(feature){
                    return handleColorType(feature.properties.stroke) || handleColorType(feature.properties.color) || outLineColor;
                },
                "strokeWidth": function(feature){
                    return feature.properties['stroke-width'] || 8;
                },
                opacity: function(feature){
                    return feature.properties.opacity || 0.6;
                },
                fill: function(feature){
                    return feature.properties.fill || handleColorType(feature.properties.color) || color;
                },
            }],
            "MultiPoint": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 3;
                },
                type:"Circle",
                stroke: function(feature){
                    return handleColorType(feature.properties.stroke) || handleColorType(feature.properties.color) || outLineColor;
                },
                "strokeWidth": function(feature){
                    return feature.properties['stroke-width'] || 8;
                },
                fill: function(feature){
                    return feature.properties.fill || handleColorType(feature.properties.color) || color;
                },
                radius: function(feature){
                    return feature.properties.r || 5;
                }
            }],
            "MultiLineString": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 2;
                },
                type:"Line",
                stroke: function(feature){
                    return handleColorType(feature.properties.stroke) || handleColorType(feature.properties.color) || color;
                },
                "strokeWidth": function(feature){
                    return feature.properties['stroke-width'] || 8;
                }
            }],
            "MultiPolygon": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 999;
                },
                type:"Polygon",
                stroke: function(feature){
                    return handleColorType(feature.properties.stroke) || handleColorType(feature.properties.color) || outLineColor;
                },
                "strokeWidth": function(feature){
                    return feature.properties['stroke-width'] || 8;
                },
                opacity: function(feature){
                    return feature.properties.opacity || 0.6
                },
                fill: function(feature){
                    return feature.properties.fill || handleColorType(feature.properties.color) || color;
                }
            }],
            "Image": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 2;
                },
                type:"Image",
                src: function(feature){
                    let arrowColor = feature.properties.fill  || handleColorType(feature.properties.color);
                    if(arrowColor) {
                        return getDirectionImage(arrowColor);
                    } else {
                        return getDirectionImage(color);
                    }
                },
                rotation: function(feature){
                    return feature.properties.vehicleBearing || feature.properties.heading_deg || 0
                },
                width:32,
                height:32
            }],
            "Text": [{
                zIndex: function(feature){
                    return feature.properties.zIndex || 4;
                },
                type:"Text",
                text: function(feature){
                    return feature.properties['marker-text'] || '';
                },
                font:"normal 15px Arial",
                fill: function(feature){
                    return feature.properties['text-color'] || feature.properties['text-fill']  || '#000'
                }
            }]
        },
        strokeWidthZoomScale: function(level){
            return level > 14 ? .5 : .25;
        },
        assign: function( feature, zoomlevel ){

            if(feature.properties && (feature.properties["heading_deg"] || feature.properties["vehicleBearing"])) {
                return this.styleGroups["Image"];
            } else if(feature.properties && feature.properties["marker-url"]) {
                return this.styleGroups["Point_marker"];
            } else if(feature.properties && feature.properties["marker-text"]) {
                return this.styleGroups["Text"];
            } else {
                return feature.geometry.type;
            }
        }
    };
}

function handleColorType(color) {
    if (color) {
        let isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
        let isValidHexColorWithoutHash = /([0-9A-F]{6}$)|([0-9A-F]{3}$)/i.test(color);

        if (!isValidHexColor && !color.indexOf('rgb') > -1 && !color.indexOf('hsl') > -1) {
            if (!(color.indexOf('#') === 1) && isValidHexColorWithoutHash) {
                color = '#' + color;
            }
        }
        return color;
    } else {
        return null;
    }
}

export function getDirectionImage(color) {
    let canvas    = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.width  = 32;
    canvas.height = 32;
    ctx.beginPath();
    ctx.moveTo(16,0);
    ctx.lineTo(0,32);
    ctx.lineTo(16,26);
    ctx.lineTo(32,32);
    ctx.fillStyle = color;
    ctx.fill();
    return canvas.toDataURL();
}
