/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

import * as monaco from 'monaco-editor';

export let startValue = [
  '{',
    '"type": "FeatureCollection",',
    '"features": []',
'}'
].join('\n');

export let editor = monaco.editor.create(document.getElementById('editor'), {
    value: startValue,
    language: 'json',
    dragAndDrop: false,
    validate: true,
    "bracketPairColorization.enabled": true,
    formatOnPaste: true,
    maxTokenizationLineLength: 100000,
    //default is 20000
  });
