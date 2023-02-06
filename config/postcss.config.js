/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

module.exports = ({file, options, env}) => ({
    plugins: [
      require('autoprefixer')(),
      require('cssnano')({preset: 'default', discardUnused: false})
    ]
  })
  