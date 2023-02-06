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

import hereWithLabelDark from './WithLabel/here/dark';
import hereWithLabelLight from './WithLabel/here/light';
import hereWithLabelMiamiDay from './WithLabel/here/miamiDay';
import hereWithLabelSpringSoft from './WithLabel/here/spring-soft';
import hereWithLabelCountries from './WithLabel/here/countries';
import hereWithLabelCountriesBright from './WithLabel/here/countriesBright';
import hereWithLabelSpringBright from './WithLabel/here/springBright';
import hereWithLabelLineDark from './WithLabel/here/lines_dark';
import hereWithLabelLineWhite from './WithLabel/here/lines_white';

export const themes = {
  withLabel: {
    here: {
      dark: hereWithLabelDark,
      light: hereWithLabelLight,
      miamiDay: hereWithLabelMiamiDay,
      springSoft: hereWithLabelSpringSoft,
      countries: hereWithLabelCountries,
      countriesBright: hereWithLabelCountriesBright,
      springBright: hereWithLabelSpringBright,
      LineDark: hereWithLabelLineDark,
      LineWhite: hereWithLabelLineWhite,
    }
  }
};
