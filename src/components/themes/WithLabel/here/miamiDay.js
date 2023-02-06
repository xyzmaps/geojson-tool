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
const miamiDay = {
  mainColors: ['#F4F7F9', '#98C9E5'],

  backgroundColor: '#F4F7F9',

  strokeWidthZoomScale: function(level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25;
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 80,
        type: 'Polygon',
        fill: '#98C9E5',
      },
    ],

    riverLines: [
      {
        zIndex: 80,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#98C9E5',
      },
    ],

    riverLinesLabels: [
      {
        zIndex: 80,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#98C9E5',
      },
      {
        zIndex: 80,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        // stroke: '#707070',
        fill: '#7693A6',
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
        fill: '#7693A6',
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
        fill: '#728EA1',
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
        fill: '#728EA1',
        collide: false,
      },
    ],

    earth: [
      {
        zIndex: 1,
        type: 'Polygon',
        fill: '#F4F7F9',
      },
    ],

    countryBoundary: [
      {
        zIndex: 90,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#D6CDC1',
      },
    ],

    countryBoundaryZ4: [
      {
        zIndex: 90,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#D6CDC1',
      },
    ],

    countryBoundaryZ6: [
      {
        zIndex: 90,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#D6CDC1',
      },
    ],

    countryBoundaryZ9: [
      {
        zIndex: 90,
        type: 'Line',
        strokeWidth: 14,
        stroke: '#D6CDC1',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 95,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#D6CDC1',
        strokeDasharray: [3, 4],
      },
    ],

    regionBoundary: [
      {
        zIndex: 85,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#D9C9B4',
        opacity: 0.5,
      },
    ],

    nationalForest: [
      {
        zIndex: 35,
        type: 'Polygon',
        fill: '#AFE0A4',
        opacity: 0.65,
      },
    ],

    nationalPark: [
      {
        zIndex: 10,
        type: 'Polygon',
        fill: '#C1F0B6',
        opacity: 0.75,
      },
    ],

    nationalParkLabels: [
      {
        zIndex: 10,
        type: 'Polygon',
        fill: '#C1F0B6',
        opacity: 0.75,
      },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F7F9',
        fill: '#948F87',
        collide: false,
      },
    ],

    park: [
      {
        zIndex: 20,
        type: 'Polygon',
        fill: '#C7EDA8',
        opacity: 0.85,
      },
    ],

    parkLabels: [
      {
        zIndex: 20,
        type: 'Polygon',
        fill: '#C7EDA8',
        opacity: 0.85,
      },
      {
        zLevel: 2,
        type: 'Text',
        font: 'italic 10px "OpenSans", sans-serif',
        text: f => f.properties.name,
        strokeWidth: 3,
        stroke: '#F4F7F9',
        fill: '#948F87',
        collide: false,
      },
    ],

    beach: [
      {
        zIndex: 75,
        type: 'Polygon',
        fill: '#FCFADE',
        opacity: 0.75,
      },
    ],

    glacier: [
      {
        zIndex: 30,
        type: 'Polygon',
        fill: '#E8F2FF',
        opacity: 0.85,
      },
    ],

    golfCourse: [
      {
        zIndex: 55,
        type: 'Polygon',
        fill: '#B5E8B6',
        opacity: 0.85,
      },
    ],

    university: [
      {
        zIndex: 40,
        type: 'Polygon',
        fill: '#EBE6DD',
        opacity: 0.45,
      },
    ],

    hospital: [
      {
        zIndex: 50,
        type: 'Polygon',
        fill: '#FFF5F9',
        opacity: 0.75,
      },
    ],

    builtup: [
      {
        zIndex: 15,
        type: 'Polygon',
        fill: '#E1EAF0',
        opacity: 0.75,
      },
    ],

    military: [
      {
        zIndex: 45,
        type: 'Polygon',
        fill: '#EBEDF2',
        opacity: 0.75,
      },
    ],

    runway: [
      {
        zIndex: 65,
        type: 'Polygon',
        fill: '#E1F2F1',
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
        fill: '#807B74',
        collide: false,
      },
    ],

    motorway: [
      {
        zIndex: 150,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#BFBAB8',
      },
    ],

    motorwayZ11: [
      {
        zIndex: 150,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#B7B2AF',
      },
    ],

    motorwayZ14: [
      {
        zIndex: 150,
        type: 'Line',
        strokeWidth: 11,
        stroke: '#B7B2AF',
      },
    ],

    motorwayZ17: [
      {
        zIndex: 150,
        type: 'Line',
        strokeWidth: 16,
        stroke: '#B7B2AF',
      },
    ],

    trunkRoads: [
      {
        zIndex: 145,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#BFBAB8',
      },
    ],

    trunkRoadsZ11: [
      {
        zIndex: 145,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#B7B2AF',
      },
    ],

    trunkRoadsZ14: [
      {
        zIndex: 145,
        type: 'Line',
        strokeWidth: 11,
        stroke: '#B7B2AF',
      },
    ],

    trunkRoadsZ17: [
      {
        zIndex: 145,
        type: 'Line',
        strokeWidth: 16,
        stroke: '#B7B2AF',
      },
    ],

    primaryRoads: [
      {
        zIndex: 140,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#D1CCC9',
      },
    ],

    primaryRoadsZ9: [
      {
        zIndex: 140,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#D1CCC9',
      },
    ],

    primaryRoadsZ12: [
      {
        zIndex: 140,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#C2BDBA',
      },
    ],

    primaryRoadsZ14: [
      {
        zIndex: 140,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#B7B2AF',
      },
    ],

    primaryRoadsZ17: [
      {
        zIndex: 140,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#B7B2AF',
      },
    ],

    secondaryRoads: [
      {
        zIndex: 135,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#C7C2BF',
      },
    ],

    secondaryRoadsZ12: [
      {
        zIndex: 135,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#C7C2BF',
      },
    ],

    secondaryRoadsZ14: [
      {
        zIndex: 135,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#B7B2AF',
      },
    ],

    highway: [
      {
        zIndex: 155,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#B7B2AF',
      },
    ],

    highwayZ14: [
      {
        zIndex: 155,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#B7B2AF',
      },
    ],

    tertiary: [
      {
        zIndex: 130,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#CCC8C6',
      },
    ],

    tertiaryZ13: [
      {
        zIndex: 130,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#CCC8C6',
      },
    ],

    tertiaryZ14: [
      {
        zIndex: 130,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#B7B2AF',
      },
    ],

    minorRoads: [
      {
        zIndex: 125,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#BDB7B5',
      },
    ],

    minorRoadsZ14: [
      {
        zIndex: 125,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#BDB7B5',
      },
    ],

    minorRoadsZ17: [
      {
        zIndex: 125,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#B7B2AF',
      },
    ],

    pathRoads: [
      {
        zIndex: 100,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#DBD6D3',
      },
    ],

    buildings: [
      {
        zIndex: 165,
        type: 'Polygon',
        fill: '#EDF3F5',
      },
    ],

    buildingsZ16: [
      { zIndex: 165, type: 'Line', strokeWidth: 1, stroke: '#DAE2E6' },
      { zIndex: 165, type: 'Polygon', fill: '#EDF3F5' },
    ],

    hospitalBuilding: [
      {
        zIndex: 165,
        type: 'Polygon',
        fill: '#FCE1EB',
        opacity: 0.75,
      },
    ],

    universityBuilding: [
      {
        zIndex: 165,
        type: 'Polygon',
        fill: '#F5EEC4',
      },
    ],

    sportsBuilding: [
      {
        zIndex: 165,
        type: 'Polygon',
        fill: '#F2CAB1',
      },
    ],

    artsBuilding: [
      {
        zIndex: 165,
        type: 'Polygon',
        fill: '#D0CEED',
      },
    ],

    countryL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F7F9',
        fill: '#A19B92',
        font: 'bold 13px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    countryS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F7F9',
        fill: '#99938B',
        font: 'bold 9px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    region: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F7F9',
        fill: '#CCC4BA',
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
        stroke: '#F4F7F9',
        fill: '#4D4945',
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
        stroke: '#F4F7F9',
        fill: '#5C5853',
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
        stroke: '#F4F7F9',
        fill: '#5C5853',
        // fill: '#0000ff',
        font: 'bold 12px "OpenSans", sans-serif',
        strokeWidth: 2,
        collide: false,
      },
    ],

    capitalS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F7F9',
        fill: '#66625C',
        // fill: '#0000ff',
        font: 'bold 10px "OpenSans", sans-serif',
        strokeWidth: 2,
        collide: false,
      },
    ],

    population10m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#F4F7F9',
        fill: '#4D4945',
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
        stroke: '#F4F7F9',
        fill: '#4D4945',
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
        stroke: '#F4F7F9',
        fill: '#4D4945',
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
        stroke: '#F4F7F9',
        fill: '#4D4945',
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
        stroke: '#F4F7F9',
        fill: '#5C5853',
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
        stroke: '#F4F7F9',
        fill: '#5C5853',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#66625C',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#66625C',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#7A766F',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#7A766F',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#7A766F',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#7A766F',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#7A766F',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#7A766F',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#87827B',
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
        stroke: '#F4F7F9',
        // fill: '#ff0000',
        fill: '#87827B',
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
        stroke: '#F4F7F9',
        // fill: '#D4D4D4',
        fill: '#918C84',
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
        stroke: '#F4F7F9',
        // fill: '#D4D4D4',
        fill: '#9C968E',
        font: '11px "OpenSans", sans-serif',
        strokeWidth: 2,
        collide: false,
      },
    ],

    neighbourhoodS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#F4F7F9',
        // fill: '#D4D4D4',
        fill: '#ADA79E',
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
        stroke: '#F4F7F9',
        // fill: '#D4D4D4',
        fill: '#ADA79E',
        font: '12px "OpenSans", sans-serif',
        strokeWidth: 4,
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
        if (level > 15) {
          return 'nationalParkLabels';
        }
        if (level > 3) {
          return 'nationalPark';
        }
      }
      if (kind === 'forest') {
        if (level > 6) {
          return 'nationalForest';
        }
      }
      if (kind === 'park') {
        if (level > 15) {
          return 'parkLabels';
        }
        if (level > 3) {
          return 'park';
        }
      }
      if (kind === 'beach') {
        if (level > 3) {
          return 'beach';
        }
      }
      if (kind === 'glacier') {
        if (level > 3) {
          return 'glacier';
        }
      }
      if (kind === 'hospital') {
        if (level >= 13) {
          return 'hospital';
        }
      }
      if (kind === 'university') {
        return 'university';
      }
      if (kind === 'golf_course') {
        return 'golfCourse';
      }
      if (kind === 'military') {
        return 'military';
      }
      if (kind === 'industrial') {
        return 'builtup';
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
        if (level >= 13) {
          return 'primaryRoadsZ14';
        }
        if (level >= 11) {
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
          return 'tertiaryZ14';
        }
        if (level >= 13) {
          return 'tertiaryZ13';
        }
        if (level >= 12) {
          return 'tertiary';
        }
      }
      if (feature.properties.kind === 'minor_road') {
        if (level >= 17) {
          return 'minorRoadsZ17';
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
          return 'pathRoads';
        }
      }
    }

    if (layer === 'buildings') {
      if (feature.properties.kind_detail === 'hospital') {
        return 'hospitalBuilding';
      }
      if (feature.properties.kind_detail === 'educational_institution') {
        return 'universityBuilding';
      }
      if (feature.properties.kind_detail === 'sports') {
        return 'sportsBuilding';
      }
      if (feature.properties.kind_detail === 'arts_centre') {
        return 'artsBuilding';
      }
      if (level >= 16) {
        return 'buildingsZ16';
      }
      return 'buildings';
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

export default miamiDay;
