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
const springBright = {
  mainColors: ['#89D8F5', '#C1E07E'],

  backgroundColor: '#F4F1ED',

  strokeWidthZoomScale: function(level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25;
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 100,
        type: 'Polygon',
        fill: '#89D8F5',
      },
    ],

    riverLines: [
      {
        zIndex: 100,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#89D8F5',
      },
    ],

    riverLinesLabels: [
      {
        zIndex: 100,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#89D8F5',
      },
      {
        zIndex: 100,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#72B4CC',
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
        fill: '#6098B3',
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
        fill: '#6098B3',
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
        fill: '#6098B3',
        collide: false,
      },
    ],

    earth: [
      {
        zIndex: 1,
        type: 'Polygon',
        fill: '#F4F1ED',
      },
    ],

    countryBoundary: [
      {
        zIndex: 115,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#CDD2D4',
      },
    ],

    countryBoundaryZ7: [
      {
        zIndex: 115,
        type: 'Line',
        strokeWidth: 14,
        stroke: '#CDD2D4',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 115,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#C1C5C7',
        strokeDasharray: [3, 4],
      },
    ],

    regionBoundary: [
      {
        zIndex: 110,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#D5DBDE',
        opacity: 0.75,
      },
    ],

    nationalForest: [
      { zIndex: 34, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 35, type: 'Polygon', fill: '#BBE6A5' },
    ],

    nationalForestLabels: [
      { zIndex: 34, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 35, type: 'Polygon', fill: '#BBE6A5' },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F1ED',
        fill: '#77797A',
        collide: false,
      },
    ],

    nationalPark: [
      { zIndex: 4, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 5, type: 'Polygon', fill: '#AFEB8A', opacity: 0.9 },
    ],

    nationalParkLabels: [
      { zIndex: 4, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 5, type: 'Polygon', fill: '#AFEB8A', opacity: 0.9 },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F1ED',
        fill: '#77797A',
        collide: false,
      },
    ],

    park: [
      { zIndex: 19, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 20, type: 'Polygon', fill: '#C9E68C', opacity: 0.9 },
    ],

    parkLabels: [
      { zIndex: 19, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 20, type: 'Polygon', fill: '#C9E68C', opacity: 0.9 },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F1ED',
        fill: '#77797A',
        collide: false,
      },
    ],

    beach: [
      { zIndex: 84, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 85, type: 'Polygon', fill: '#FFEB94' },
    ],

    university: [
      { zIndex: 39, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 40, type: 'Polygon', fill: '#FFDCAD' },
    ],

    golfCourse: [
      { zIndex: 59, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 60, type: 'Polygon', fill: '#BDE681' },
    ],

    zoo: [
      { zIndex: 49, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 50, type: 'Polygon', fill: '#E2F0AA' },
    ],

    hospital: [
      { zIndex: 54, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 55, type: 'Polygon', fill: '#EED5F5', opacity: 0.75 },
    ],

    industrial: [
      { zIndex: 9, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 10, type: 'Polygon', fill: '#ECEBE1' },
    ],

    glacier: [
      { zIndex: 29, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 30, type: 'Polygon', fill: '#FFFFFF' },
    ],

    cemetery: [
      { zIndex: 77, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 78, type: 'Polygon', fill: '#DAE7C0' },
    ],

    military: [
      { zIndex: 44, type: 'Line', strokeWidth: 4, stroke: '#7EB0E6' },
      { zIndex: 45, type: 'Polygon', fill: '#E9EBEC' },
    ],

    runway: [{ zIndex: 70, type: 'Polygon', fill: '#F0E6E8' }],

    airportLabels: [
      {
        zLevel: 2,
        type: 'Text',
        font: 'bold 11px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#393939',
        fill: '#949899',
        collide: false,
      },
    ],

    motorway: [
      {
        zIndex: 155,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#F5A96E',
      },
    ],

    trunkRoads: [
      {
        zIndex: 150,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#F5A96E',
      },
    ],

    primaryRoads: [
      {
        zIndex: 145,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#D9C6B8',
      },
    ],

    secondaryRoads: [
      {
        zIndex: 140,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#D9C6B8',
      },
    ],

    highway: [
      {
        zIndex: 160,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#F5A96E',
      },
    ],

    minorRoadsTertiary: [
      {
        zIndex: 135,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#D9C6B8',
      },
    ],

    minorRoads: [
      {
        zIndex: 130,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#D9C6B8',
      },
    ],

    countryL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        fill: '#B1B8BA',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    countryS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        fill: '#B1B8BA',
        font: 'bold 9px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    region: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#CDD2D4',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    capitalXL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#6F7273',
        // fill: '#0000ff',
        font: 'bold 16px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    capitalL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#797C7D',
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
        stroke: '#F4F1ED',
        fill: '#797C7D',
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
        stroke: '#F4F1ED',
        fill: '#838687',
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
        stroke: '#F4F1ED',
        fill: '#6F7273',
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
        stroke: '#F4F1ED',
        fill: '#6F7273',
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
        stroke: '#F4F1ED',
        fill: '#6F7273',
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
        stroke: '#F4F1ED',
        fill: '#6F7273',
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
        stroke: '#F4F1ED',
        fill: '#797C7D',
        // fill: '#ffff00',
        font: '13px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population1m5mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#797C7D',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population500k1m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#838687',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population500k1mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#838687',
        font: '15px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population200k500k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#8F9394',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#8F9394',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#8F9394',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#8F9394',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#8F9394',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#8F9394',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#949899',
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
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#949899',
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
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#9C9FA1',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population1k5k: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#A1A4A6',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    neighbourhoodS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#B3A194',
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
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#B3A194',
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

    if (layer === 'earth') {
      return 'earth';
    }

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
        if (level >= 7) {
          return 'countryBoundaryZ7';
        }
        if (level >= 1) {
          return 'countryBoundary';
        }
      }
      if (kind === 'disputed') {
        return 'dashed_boundary';
      }

      if (kind === 'region') {
        if (feature.properties.min_zoom <= 5) {
          if (level > 4) {
            return 'regionBoundary';
          }
        }
        if (feature.properties.min_zoom >= 5) {
          if (level >= 8) {
            return 'regionBoundary';
          }
        }
      }
    }

    if (layer === 'landuse') {
      if (kind === 'national_park' || kind === 'nature_reserve') {
        if (level > 15) {
          return 'nationalParkLabels';
        }
        return 'nationalPark';
      }
      if (kind === 'forest') {
        if (level > 11) {
          return 'nationalForestLabels';
        }
        if (level >= 9) {
          return 'nationalForest';
        }
      }
      if (kind === 'park') {
        if (level > 15) {
          return 'parkLabels';
        }
        return 'park';
      }
      if (kind === 'beach') {
        return 'beach';
      }
      if (kind === 'university') {
        return 'university';
      }
      if (kind === 'golf_course') {
        return 'golfCourse';
      }
      if (kind === 'hospital') {
        return 'hospital';
      }
      if (kind === 'industrial') {
        return 'industrial';
      }
      if (kind === 'zoo') {
        return 'zoo';
      }
      if (kind === 'glacier') {
        return 'glacier';
      }
      if (kind === 'cemetery') {
        return 'cemetery';
      }
      if (kind === 'military') {
        return 'military';
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
      if (feature.properties.min_zoom === 3) {
        if (level >= 6) {
          return 'motorway';
        }
      }
      if (feature.properties.kind_detail === 'motorway') {
        return 'motorway';
      }
      if (feature.properties.kind_detail === 'trunk') {
        return 'trunkRoads';
      }
      if (feature.properties.kind === 'highway') {
        return 'highway';
      }
      if (feature.properties.kind_detail === 'primary') {
        return 'primaryRoads';
      }
      if (feature.properties.kind_detail === 'secondary') {
        return 'secondaryRoads';
      }
      if (
          feature.properties.kind === 'minor_road' ||
          feature.properties.kind_detail === 'tertiary'
      ) {
        return 'minorRoadsTertiary';
      }
      if (feature.properties.kind === 'minor_road') {
        return 'minorRoads';
      }

      // }
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

export default springBright;
