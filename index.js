/*!
 * day-seconds <https://github.com/tunnckoCore/day-seconds>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function daySeconds(ms) {
  return (ms? 1000 : 1) * 60 * 60 * 24;
};
