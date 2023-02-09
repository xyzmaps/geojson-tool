/*
 *
 *   Copyright (C) 2017-2019 HERE Europe B.V.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 *   SPDX-License-Identifier: Apache-2.0
 *   License-Filename: LICENSE
 *
 *
 */

/* eslint-disable */
const light = {
  mainColors: ['#D1CFCF', '#B0ABA9'],

  backgroundColor: '#D1CFCF',

  strokeWidthZoomScale: function(level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25;
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 9,
        type: 'Polygon',
        fill: '#B0ABA9',
      },
    ],

    riverLines: [
      {
        zIndex: 9,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#B0ABA9',
      },
    ],

    riverLinesLabels: [
      {
        zIndex: 9,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#B0ABA9',
      },
      {
        zIndex: 9,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#696969',
        collide: false,
      },
    ],

    oceanLabels: [
      {
        zLevel: 2,
        type: 'Text',
        font: '10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#696969',
        collide: false,
      },
    ],

    bayLabels: [
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#787878',
        collide: false,
      },
    ],

    lakeLabels: [
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#787878',
        collide: false,
      },
    ],

    earth: [
      {
        zIndex: 1,
        type: 'Polygon',
        fill: '#D1CFCF',
      },
    ],

    countryBoundary: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#999999',
      },
    ],

    countryBoundaryZ4: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#999999',
      },
    ],

    countryBoundaryZ6: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 9,
        stroke: '#999999',
      },
    ],

    countryBoundaryZ9: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 13,
        stroke: '#999999',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 13,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#999999',
        strokeDasharray: [6, 4],
      },
    ],

    regionBoundary: [
      {
        zIndex: 10,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#A39F9D',
        opacity: 0.65,
      },
    ],

    nature: [
      {
        zIndex: 3,
        type: 'Polygon',
        fill: '#C4C2C2',
      },
    ],

    natureLabels: [
      {
        zIndex: 3,
        type: 'Polygon',
        fill: '#C4C2C2',
      },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#C4C2C2',
        fill: '#696969',
        collide: false,
      },
    ],

    park: [
      {
        zIndex: 3,
        type: 'Polygon',
        fill: '#C4C2C2',
      },
    ],

    highAlbedo: [
      {
        zIndex: 4,
        type: 'Polygon',
        fill: '#F5E6DA',
      },
    ],

    runway: [
      {
        zIndex: 6,
        type: 'Polygon',
        fill: '#C7BEB3',
      },
    ],

    airportLabels: [
      {
        zLevel: 2,
        type: 'Text',
        font: 'bold 11px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#393939',
        fill: '#787878',
        collide: false,
      },
    ],

    motorway: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#FFFFFF',
      },
    ],

    motorwayZ10: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#FFFFFF',
      },
    ],

    motorwayZ12: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#FFFFFF',
      },
    ],

    motorwayZ16: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 12,
        stroke: '#FFFFFF',
      },
    ],

    motorwayLink: [
      {
        zIndex: 26,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#FFEDDE',
      },
    ],

    trunkRoads: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#FFFFFF',
      },
    ],

    trunkRoadsZ10: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#FFFFFF',
      },
    ],

    trunkRoadsZ12: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#FFFFFF',
      },
    ],

    trunkRoadsZ16: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 12,
        stroke: '#FFFFFF',
      },
    ],

    primaryRoads: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#F7F7F7',
      },
    ],

    primaryRoadsZ9: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#FAFAFA',
      },
    ],

    primaryRoadsZ12: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 9,
        stroke: '#FFFFFF',
      },
    ],

    primaryRoadsZ14: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#FFFFFF',
      },
    ],

    primaryRoadsZ17: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 11,
        stroke: '#FFFFFF',
      },
    ],

    secondaryRoads: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#F7F7F7',
      },
    ],

    secondaryRoadsZ12: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#F7F7F7',
      },
    ],

    secondaryRoadsZ14: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#FFFFFF',
      },
    ],

    secondaryRoadsZ17: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 9,
        stroke: '#FFFFFF',
      },
    ],

    highway: [
      {
        zIndex: 29,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#FFFFFF',
      },
    ],

    highwayZ14: [
      {
        zIndex: 29,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#FFFFFF',
      },
    ],

    tertiaryRoads: [
      {
        zIndex: 19,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#FFFFFF',
      },
    ],

    tertiaryRoadsZ13: [
      {
        zIndex: 19,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#FFFFFF',
      },
    ],

    tertiaryRoadsZ14: [
      {
        zIndex: 19,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#FFFFFF',
      },
    ],

    tertiaryRoadsZ16: [
      {
        zIndex: 19,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#FFFFFF',
      },
    ],

    minorRoads: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#FFFFFF',
      },
    ],

    minorRoadsZ14: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#FFFFFF',
      },
    ],

    minorRoadsZ16: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#FFFFFF',
      },
    ],

    minorRoadsZ17: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#FFFFFF',
      },
    ],

    pathRoads: [
      {
        zIndex: 15,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#858C89',
      },
    ],

    pathRoadsZ17: [
      {
        zIndex: 15,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#7A807D',
      },
    ],

    buildings: [
      {
        zIndex: 31,
        type: 'Polygon',
        fill: '#D9D7D7',
      },
    ],

    countryL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#D1CFCF',
        fill: '#A19891',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    countryS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#D1CFCF',
        fill: '#A19891',
        font: 'bold 9px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    region: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#ADACAC',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalXL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#4D4C4C',
        // fill: '#0000ff',
        font: 'bold 16px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#666565',
        // fill: '#0000ff',
        font: 'bold 14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalM: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#666565',
        // fill: '#0000ff',
        font: 'bold 12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#797878',
        // fill: '#0000ff',
        font: 'bold 10px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population10m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#383838',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population10mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#383838',
        // fill: '#ffff00',
        font: '18px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population5m10m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#383838',
        // fill: '#ffff00',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population5m10mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#383838',
        // fill: '#ffff00',
        font: '17px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population1m5m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#403F3F',
        // fill: '#ffff00',
        font: '13px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population1m5mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        fill: '#403F3F',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population500k1m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#545353',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population500k1mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#545353',
        font: '15px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population200k500k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#666565',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population200k500kLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#666565',
        font: '15px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population100k200k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#666565',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population100k200kLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#666565',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population50k100k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#666565',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population50k100kLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#666565',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population20k50k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#6E6D6D',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population10k20k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#6E6D6D',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population5k10k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#7A7979',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population1k5k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#D1CFCF',
        // fill: '#ff0000',
        fill: '#8A8888',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    neighbourhoodS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#D1CFCF',
        // fill: '#D4D4D4',
        fill: '#A19891',
        font: '9px "OpenSans", sans-serif',
        strokeWidth: 2,
        collide: false,
      },
    ],

    neighbourhoodL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#D1CFCF',
        // fill: '#D4D4D4',
        fill: '#A19891',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],
  },

  assign: function(feature, level) {
    var props = feature.properties;
    var kind = props.kind;
    var layer = props.layer;
    var geom = feature.geometry.type;

    if (layer === 'water') {
      if (kind === 'river') {
        if (level >= 12) {
          return 'riverLinesLabels';
        }
        return 'riverLines';
      }

      if (geom === 'LineString' || geom === 'MultiLineString') {
        return;
      }

      if (kind === 'oceans') {
        if (feature.properties.min_zoom <= 6) {
          return 'oceanLabels';
        }
        if (feature.properties.min_zoom === 7) {
          if (level >= 6) {
            return 'oceanLabels';
          }
        }
        if (feature.properties.min_zoom >= 8) {
          if (level >= 9) {
            return 'oceanLabels';
          }
        }
      }
      if (kind === 'bay') {
        if (feature.properties.min_zoom <= 9) {
          return 'bayLabels';
        }
        if (feature.properties.min_zoom >= 10) {
          if (level >= 11) {
            return 'bayLabels';
          }
        }
      }
      if (kind === 'lake') {
        if (feature.properties.min_zoom <= 9) {
          return 'lakeLabels';
        }
        if (feature.properties.min_zoom >= 10) {
          if (level >= 13) {
            return 'lakeLabels';
          }
        }
      }
      return 'waterArea';
    }

    if (layer === 'boundaries') {
      if (kind === 'country') {
        if (level >= 9) {
          return 'countryBoundaryZ9';
        }
        if (level >= 6) {
          return 'countryBoundaryZ6';
        }
        if (level >= 4) {
          return 'countryBoundaryZ4';
        }
        if (level >= 1) {
          return 'countryBoundary';
        }
      }

      if (kind === 'disputed') {
        return 'dashed_boundary';
      }

      if (kind === 'region') {
        if (level >= 5) {
          return 'regionBoundary';
        }
      }
    }

    if (layer === 'landuse') {
      if (kind === 'national_park' || kind === 'nature_reserve') {
        if (level > 14) {
          return 'natureLabels';
        }
        if (level > 3) {
          return 'nature';
        }
      }
      if (kind === 'park' || kind === 'forest') {
        if (level > 6) {
          if (level > 15) {
            return 'natureLabels';
          }
          return 'park';
        }
      }
      if (kind === 'beach' || kind === 'glacier') {
        if (level > 3) {
          return 'highAlbedo';
        }
      }
      if (kind === 'runway') {
        return 'runway';
      }
    }

    if (layer === 'pois') {
      if (kind === 'airport') {
        if (level >= 15) {
          return 'airportLabels';
        }
      }
    }

    if (layer === 'roads') {
      if (kind === 'rail' || kind === 'ferry') {
        return;
      }
      if (feature.properties.kind_detail === 'motorway') {
        if (level >= 16) {
          return 'motorwayZ16';
        }
        if (level >= 12) {
          return 'motorwayZ12';
        }
        if (level >= 10) {
          return 'motorwayZ10';
        }
        if (level >= 6) {
          return 'motorway';
        }
      }
      if (feature.properties.kind_detail === 'motorway_link') {
        return 'motorwayLink';
      }
      if (feature.properties.kind_detail === 'trunk') {
        if (level >= 16) {
          return 'trunkRoadsZ16';
        }
        if (level >= 12) {
          return 'trunkRoadsZ12';
        }
        if (level >= 10) {
          return 'trunkRoadsZ10';
        }
        if (level >= 6) {
          return 'trunkRoads';
        }
        // if ( props.is_link === true){
        //   return 'trunkLink';
        // }
      }
      if (feature.properties.kind === 'highway') {
        if (level >= 14) {
          return 'highwayZ14';
        }
        if (level >= 7) {
          return 'highway';
        }
      }
      if (feature.properties.kind_detail === 'primary') {
        if (level >= 17) {
          return 'primaryRoadsZ17';
        }
        if (level >= 14) {
          return 'primaryRoadsZ14';
        }
        if (level >= 12) {
          return 'primaryRoadsZ12';
        }
        if (level >= 9) {
          return 'primaryRoadsZ9';
        }
        if (level >= 7) {
          return 'primaryRoads';
        }
        // if ( props.is_link === true){
        //   return 'primaryLink';
        // }
      }
      if (feature.properties.kind_detail === 'secondary') {
        if (level >= 17) {
          return 'secondaryRoadsZ17';
        }
        if (level >= 14) {
          return 'secondaryRoadsZ14';
        }
        if (level >= 12) {
          return 'secondaryRoadsZ12';
        }
        if (level >= 9) {
          return 'secondaryRoads';
        }
      }
      // known issue with what appear to be tertiary roads not rendering correctly... look to paris for example
      if (feature.properties.kind_detail === 'tertiary') {
        if (level >= 16) {
          return 'tertiaryRoadsZ16';
        }
        if (level >= 14) {
          return 'tertiaryRoadsZ14';
        }
        if (level >= 13) {
          return 'tertiaryRoadsZ13';
        }
        if (level >= 12) {
          return 'tertiaryRoads';
        }
      }
      if (feature.properties.kind === 'minor_road') {
        if (level >= 17) {
          return 'minorRoadsZ17';
        }
        if (level >= 16) {
          return 'minorRoadsZ16';
        }
        if (level >= 14) {
          return 'minorRoadsZ14';
        }
        if (level >= 13) {
          return 'minorRoads';
        }
      }

      if (feature.properties.kind === 'path') {
        if (level >= 17) {
          return 'pathRoadsZ17';
        }
        if (level >= 16) {
          return 'pathRoads';
        }
      }
    }

    if (layer === 'buildings') {
      if (level >= 18) {
        return 'buildings';
      }
    }

    if (layer === 'places') {
      if (kind === 'country') {
        if (level >= 5) {
          return 'countryL';
        }
        if (level >= 2) {
          return 'countryS';
        }
      }

      if (kind === 'region') {
        if (level > 5) {
          return 'region';
        }
      }

      if (kind === 'locality') {
        if (props.population >= 10000000) {
          if (level >= 9) {
            return 'population10mLarge';
          }
          if (level >= 4) {
            if (props.country_capital === true) {
              return 'capitalXL';
            }
            return 'population10m';
          }
        }

        if (props.population >= 5000000 && props.population < 10000000) {
          if (level >= 9) {
            return 'population5m10mLarge';
          }
          if (level >= 4) {
            if (props.country_capital === true) {
              return 'capitalL';
            }
            return 'population5m10m';
          }
        }

        if (props.population >= 1000000 && props.population < 5000000) {
          if (level >= 10) {
            return 'population1m5mLarge';
          }
          if (level >= 4) {
            if (props.country_capital === true) {
              return 'capitalL';
            }
            return 'population1m5m';
          }
        }

        if (props.population >= 500000 && props.population < 1000000) {
          if (level >= 11) {
            return 'population500k1mLarge';
          }
          if (level >= 5) {
            if (props.country_capital === true) {
              return 'capitalM';
            }
            return 'population500k1m';
          }
        }

        if (props.population >= 200000 && props.population < 500000) {
          if (level >= 12) {
            return 'population200k500kLarge';
          }
          if (level >= 6) {
            if (props.country_capital === true) {
              return 'capitalM';
            }
            return 'population200k500k';
          }
        }

        if (props.population >= 100000 && props.population < 200000) {
          if (level >= 12) {
            return 'population100k200kLarge';
          }
          if (level >= 6) {
            if (props.country_capital === true) {
              return 'capitalS';
            }
            return 'population100k200k';
          }
        }

        if (props.population >= 50000 && props.population < 100000) {
          if (level >= 12) {
            return 'population50k100kLarge';
          }
          if (level >= 6) {
            if (props.country_capital === true) {
              return 'capitalS';
            }
            return 'population50k100k';
          }
        }

        if (props.population >= 20000 && props.population < 50000) {
          if (level >= 9) {
            if (props.country_capital === true) {
              return 'capitalS';
            }
            return 'population20k50k';
          }
        }

        if (props.population >= 10000 && props.population < 20000) {
          if (level >= 10) {
            return 'population10k20k';
          }
        }

        if (props.population >= 5000 && props.population < 10000) {
          if (level >= 11) {
            return 'population5k10k';
          }
        }

        if (props.population >= 1000 && props.population < 5000) {
          if (level >= 12) {
            return 'population2k5k';
          }
        }
      }

      if (kind === 'neighbourhood') {
        if (level >= 15) {
          return 'neighbourhoodL';
        }
        if (level >= 13) {
          return 'neighbourhoodS';
        }
      }
    }
  },
};

export default light;
