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
const dark = {
  mainColors: ['#393939', '#252525'],

  backgroundColor: '#393939',

  strokeWidthZoomScale: function(level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25;
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 9,
        type: 'Polygon',
        fill: '#252525',
      },
    ],

    riverLines: [
      {
        zIndex: 9,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#252525',
      },
    ],

    riverLinesLabels: [
      {
        zIndex: 9,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#252525',
      },
      {
        zIndex: 9,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#5E5E5E',
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
        fill: '#807F7F',
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
        fill: '#807F7F',
        collide: false,
      },
    ],

    earth: [
      {
        zIndex: 1,
        type: 'Polygon',
        fill: '#393939',
      },
    ],

    countryBoundary: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#2E2E2E',
      },
    ],

    countryBoundaryZ6: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 11,
        stroke: '#2E2E2E',
      },
    ],

    countryBoundaryZ9: [
      {
        zIndex: 11,
        type: 'Line',
        strokeWidth: 15,
        stroke: '#2E2E2E',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 13,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#212121',
        strokeDasharray: [6, 4],
      },
    ],

    regionBoundary: [
      {
        zIndex: 10,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#2B2B2B',
      },
    ],

    nature: [
      {
        zIndex: 3,
        type: 'Polygon',
        fill: '#363636',
      },
    ],

    natureLabels: [
      {
        zIndex: 3,
        type: 'Polygon',
        fill: '#363636',
      },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#393939',
        fill: '#CCCCCC',
        collide: false,
      },
    ],

    highAlbedo: [
      {
        zIndex: 4,
        type: 'Polygon',
        fill: '#484646',
      },
    ],

    runway: [
      {
        zIndex: 6,
        type: 'Polygon',
        fill: '#404040',
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
        fill: '#B3B2B2',
        collide: false,
      },
    ],

    motorway: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#707070',
      },
    ],

    motorwayZ11: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#707070',
      },
    ],

    motorwayZ14: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#707070',
      },
    ],

    motorwayZ17: [
      {
        zIndex: 27,
        type: 'Line',
        strokeWidth: 16,
        stroke: '#707070',
      },
    ],

    motorwayLink: [
      {
        zIndex: 26,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#707070',
      },
    ],

    trunkRoads: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#707070',
      },
    ],

    trunkRoadsZ11: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#707070',
      },
    ],

    trunkRoadsZ14: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#707070',
      },
    ],

    trunkRoadsZ17: [
      {
        zIndex: 25,
        type: 'Line',
        strokeWidth: 16,
        stroke: '#707070',
      },
    ],

    primaryRoads: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#707070',
      },
    ],

    primaryRoadsZ9: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#707070',
      },
    ],

    primaryRoadsZ12: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#707070',
      },
    ],

    primaryRoadsZ14: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 9,
        stroke: '#707070',
      },
    ],

    primaryRoadsZ17: [
      {
        zIndex: 23,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#707070',
      },
    ],

    secondaryRoads: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#575757',
      },
    ],

    secondaryRoadsZ12: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#575757',
      },
    ],

    secondaryRoadsZ14: [
      {
        zIndex: 21,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#707070',
      },
    ],

    highway: [
      {
        zIndex: 29,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#616161',
      },
    ],

    highwayZ14: [
      {
        zIndex: 29,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#707070',
      },
    ],

    minorRoadsTertiary: [
      {
        zIndex: 19,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#5C5C5C',
      },
    ],

    minorRoadsTertiaryZ14: [
      {
        zIndex: 19,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#707070',
      },
    ],

    minorRoads: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#575757',
      },
    ],

    minorRoadsZ15: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#5E5E5E',
      },
    ],

    minorRoadsZ17: [
      {
        zIndex: 17,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#666666',
      },
    ],

    pathRoads: [
      {
        zIndex: 15,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#545454',
      },
    ],

    buildings: [
      {
        zIndex: 31,
        type: 'Polygon',
        fill: '#424242',
      },
    ],

    buildingsZ16: [
      {
        zIndex: 31,
        type: 'Polygon',
        fill: '#3E3E3E',
      },
    ],

    countryL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#393939',
        fill: '#5E5E5E',
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
        stroke: '#393939',
        fill: '#7D7D7D',
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
        stroke: '#393939',
        fill: '#595959',
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
        stroke: '#393939',
        fill: '#ffffff',
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
        stroke: '#393939',
        fill: '#BFBFBF',
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
        stroke: '#393939',
        fill: '#BFBFBF',
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
        stroke: '#393939',
        fill: '#ADADAD',
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
        stroke: '#393939',
        fill: '#ffffff',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population10mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#393939',
        fill: '#ffffff',
        // fill: '#ffff00',
        font: '18px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population5m10m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#393939',
        fill: '#ffffff',
        // fill: '#ffff00',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population5m10mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#393939',
        fill: '#ffffff',
        // fill: '#ffff00',
        font: '17px "OpenSans", sans-serif',
        strokeWidth: 3,
        collide: false,
      },
    ],

    population1m5m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#393939',
        fill: '#CCCCCC',
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
        stroke: '#393939',
        fill: '#CCCCCC',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#ADADAD',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#ADADAD',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#A1A1A1',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#A1A1A1',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#A1A1A1',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#A1A1A1',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#A1A1A1',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#A1A1A1',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#999999',
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
        stroke: '#393939',
        // fill: '#ff0000',
        fill: '#999999',
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
        stroke: '#393939',
        // fill: '#D4D4D4',
        fill: '#8A8A8A',
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
        stroke: '#393939',
        // fill: '#D4D4D4',
        fill: '#828282',
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
        stroke: '#393939',
        // fill: '#D4D4D4',
        fill: '#7A7A7A',
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
        stroke: '#393939',
        // fill: '#D4D4D4',
        fill: '#8A8A8A',
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
        if (level >= 9) {
          return 'countryBoundaryZ9';
        }
        if (level >= 6) {
          return 'countryBoundaryZ6';
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
        if (level > 15) {
          return 'natureLabels';
        }
        if (level > 3) {
          return 'nature';
        }
      }
      if (kind === 'park' || kind === 'forest') {
        if (level > 15) {
          return 'natureLabels';
        }
        if (level > 6) {
          return 'nature';
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
      if (feature.properties.min_zoom === 3) {
        if (level >= 6) {
          return 'motorway';
        }
      }
      if (feature.properties.kind_detail === 'motorway') {
        if (level >= 17) {
          return 'motorwayZ17';
        }
        if (level >= 14) {
          return 'motorwayZ14';
        }
        if (level >= 11) {
          return 'motorwayZ11';
        }
        if (level >= 6) {
          return 'motorway';
        }
      }
      if (feature.properties.kind_detail === 'motorway_link') {
        return 'motorwayLink';
      }
      if (feature.properties.kind_detail === 'trunk') {
        if (level >= 17) {
          return 'trunkRoadsZ17';
        }
        if (level >= 14) {
          return 'trunkRoadsZ14';
        }
        if (level >= 11) {
          return 'trunkRoadsZ11';
        }
        if (level >= 6) {
          return 'trunkRoads';
        }
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
      }
      if (feature.properties.kind_detail === 'secondary') {
        if (level >= 14) {
          return 'secondaryRoadsZ14';
        }
        if (level >= 12) {
          return 'secondaryRoadsZ12';
        }
        if (level >= 10) {
          return 'secondaryRoads';
        }
      }
      //known issue with what appear to be tertiary roads not rendering correctly... look to paris for example
      if (feature.properties.kind_detail === 'tertiary') {
        if (level >= 14) {
          return 'minorRoadsTertiaryZ14';
        }
        if (level >= 12) {
          return 'minorRoadsTertiary';
        }
      }
      if (feature.properties.kind === 'minor_road') {
        if (level >= 17) {
          return 'minorRoadsZ17';
        }
        if (level >= 15) {
          return 'minorRoadsZ15';
        }
        if (level >= 13) {
          return 'minorRoads';
        }
      }

      if (feature.properties.kind === 'path') {
        if (level >= 17) {
          return 'pathRoads';
        }
      }
    }

    if (layer === 'buildings') {
      if (level >= 16) {
        return 'buildingsZ16';
      }
      if (level >= 15) {
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

export default dark;
