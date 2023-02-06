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
const countries = {
  mainColors: ['#333333', '#AEAEAE'],

  backgroundColor: '#AEAEAE',

  strokeWidthZoomScale: function(level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25;
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 4,
        type: 'Polygon',
        fill: '#333333',
      },
    ],

    riverLines: [
      {
        zIndex: 4,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#333333',
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
        stroke: '#333333',
        fill: '#AEAEAE',
        collide: false,
      },
    ],

    earth: [
      {
        zIndex: 1,
        type: 'Polygon',
        fill: '#AEAEAE',
      },
    ],

    countryBoundary: [
      {
        zIndex: 3,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#333333',
      },
    ],

    countryBoundaryZ9: [
      {
        zIndex: 3,
        type: 'Line',
        strokeWidth: 14,
        stroke: '#333333',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 3,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#333333',
        strokeDasharray: [3, 4],
      },
    ],

    buildings: [
      {
        zIndex: 4,
        type: 'Polygon',
        fill: '#FFFFFF',
      },
    ],

    countryL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
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
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        font: 'bold 9px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    capitalXL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#0000ff',
        font: 'bold 16px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    capitalL: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#0000ff',
        font: 'bold 14px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    population10m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    population10mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#ffff00',
        font: '18px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    population5m10m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#ffff00',
        font: '14px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    population5m10mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#ffff00',
        font: '17px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    population1m5m: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#ffff00',
        font: '13px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    population1m5mLarge: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        stroke: '#AEAEAE',
        fill: '#FFFFFF',
        // fill: '#ffff00',
        font: '16px "OpenSans", sans-serif',
        strokeWidth: 0,
        collide: false,
      },
    ],

    neighbourhoodS: [
      {
        zLevel: 2,
        type: 'Text',
        text: f => f.properties['name:en'],
        text: feature => feature.properties.name.toUpperCase(),
        stroke: '#AEAEAE',
        // fill: '#D4D4D4',
        fill: '#333333',
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
        stroke: '#AEAEAE',
        // fill: '#D4D4D4',
        fill: '#333333',
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
          if (level <= 6) {
            return 'waterArea';
          }
          return 'oceanLabels';
        }
        if (feature.properties.min_zoom === 8) {
          if (level <= 7) {
            return 'waterArea';
          }
          return 'oceanLabels';
        }
        if (feature.properties.min_zoom === 9) {
          if (level <= 7) {
            return 'waterArea';
          }
          return 'oceanLabels';
        }
        if (feature.properties.min_zoom === 10) {
          if (level <= 9) {
            return 'waterArea';
          }
          return 'oceanLabels';
        }
      }

      return 'waterArea';
    }

    if (layer === 'boundaries') {
      if (kind === 'country') {
        if (level >= 9) {
          return 'countryBoundaryZ9';
        }
        if (level >= 1) {
          return 'countryBoundary';
        }
      }
      if (kind === 'disputed') {
        return 'dashed_boundary';
      }
    }

    if (layer === 'buildings') {
      return layer;
    }

    if (layer === 'places') {
      if (kind === 'country') {
        if (level >= 4) {
          return 'countryL';
        }
        if (level >= 2) {
          return 'countryS';
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

export default countries;
