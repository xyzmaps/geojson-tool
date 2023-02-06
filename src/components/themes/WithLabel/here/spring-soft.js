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
const springSoft = {
  mainColors: ['#CEE1E1', '#E8EFD4'],

  backgroundColor: '#F4F1ED',

  strokeWidthZoomScale: function(level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25;
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 0,
        type: 'Polygon',
        fill: '#CCE4E3',
      },
    ],

    riverLines: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#CCE4E3',
      },
    ],

    riverLinesLabels: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#CCE4E3',
      },
      {
        zIndex: 0,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#B7C7C7',
        collide: false,
      },
    ],

    oceanLabels: [
      {
        zIndex: 1,
        type: 'Text',
        font: '10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#A4B3B3',
        collide: false,
      },
    ],

    bayLabels: [
      {
        zIndex: 1,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#A4B3B3',
        collide: false,
      },
    ],

    lakeLabels: [
      {
        zIndex: 1,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#A4B3B3',
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
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#D2D7D9',
      },
    ],

    countryBoundaryZ7: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 12,
        stroke: '#D2D7D9',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 115,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#CFD6D4',
        strokeDasharray: [6, 4],
      },
    ],

    regionBoundary: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#E3E8E7',
        opacity: 0.75,
      },
    ],

    nationalForest: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#B0CFC8',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E5EEDE' },
    ],

    nationalForestLabels: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#B0CFC8',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E5EEDE' },
      {
        zIndex: 1,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F1ED',
        fill: '#A1A6A4',
        collide: false,
      },
    ],

    nationalPark: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#CADBAF',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E6F0D1' },
    ],

    nationalParkLabels: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#CADBAF',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E6F0D1' },
      {
        zIndex: 0,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F1ED',
        fill: '#A1A6A4',
        collide: false,
      },
    ],

    park: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#BEDBD5',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E3EEDF' },
    ],

    parkLabels: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#BEDBD5',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E3EEDF' },
      {
        zIndex: 0,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F1ED',
        fill: '#A1A6A4',
        collide: false,
      },
    ],

    beach: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#f5d6a1',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#F2E5C6' },
    ],

    university: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#F2E3A8',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#F2ECCC' },
    ],

    golfCourse: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#A3D4D6',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#DBEADC' },
    ],

    zoo: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#D0DEA6',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#E8F1CF' },
    ],

    hospital: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#F7C9BA',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#EFE1CC' },
    ],

    industrial: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#D4CEC7',
        opacity: 0.65,
      },
      { zIndex: 0, type: 'Polygon', fill: '#ECEBE1' },
    ],

    runway: [{ zIndex: 0, type: 'Polygon', fill: '#F2ECEA' }],

    airportLabels: [
      {
        zIndex: 0,
        type: 'Text',
        font: 'bold 11px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#393939',
        fill: '#ADB1B3',
        collide: false,
      },
    ],

    motorway: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#EDBF8E',
      },
    ],

    trunkRoads: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#EDBF8E',
      },
    ],

    primaryRoads: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#E0D6D3',
      },
    ],

    secondaryRoads: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#E0D6D3',
      },
    ],

    highway: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#E0D6D3',
      },
    ],

    tertiaryRoads: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#E0D6D3',
      },
    ],

    minorRoads: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#E0D6D3',
      },
    ],

    pathRoads: [
      {
        zIndex: 0,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#C2D7FC',
      },
    ],

    countryL: [
      {
        zIndex: 0,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        fill: '#C5CED1',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    countryS: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        fill: '#C5CED1',
        font: 'bold 9px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    region: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#C4CFCC',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalXL: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#0000ff',
        font: 'bold 16px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalL: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#0000ff',
        font: 'bold 14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalM: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#0000ff',
        font: 'bold 12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    capitalS: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#949998',
        // fill: '#0000ff',
        font: 'bold 10px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population10m: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population10mLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#ffff00',
        font: '18px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population5m10m: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#ffff00',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population5m10mLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#7C807E',
        // fill: '#ffff00',
        font: '17px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population1m5m: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#8B8F8E',
        // fill: '#ffff00',
        font: '13px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population1m5mLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        fill: '#8B8F8E',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population500k1m: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#949998',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population500k1mLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#949998',
        font: '15px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population200k500k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A1A6A4',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population200k500kLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A1A6A4',
        font: '15px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population100k200k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A1A6A4',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population100k200kLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A1A6A4',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population50k100k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A1A6A4',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population50k100kLarge: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A1A6A4',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population20k50k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A6ABA9',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population10k20k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#ff0000',
        fill: '#A6ABA9',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population5k10k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#ADB3B1',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    population1k5k: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#B2B8B6',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 4,
        collide: false,
      },
    ],

    neighbourhoodS: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#CCB9A5',
        font: '9px "OpenSans", sans-serif',
        strokeWidth: 2,
        collide: false,
      },
    ],

    neighbourhoodL: [
      {
        zIndex: 1,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F1ED',
        // fill: '#D4D4D4',
        fill: '#CCB9A5',
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

      if (kind === 'ocean') {
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
      if (feature.properties.kind_detail === 'tertiary') {
        return 'tertiaryRoads';
      }
      if (feature.properties.kind === 'minor_road') {
        return 'minorRoads';
      }
      if (feature.properties.kind === 'path') {
        if (level >= 17) {
          return 'pathRoads';
        }
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

export default springSoft;
