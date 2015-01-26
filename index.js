/**
 * day-seconds <https://github.com/datetime/day-seconds>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Get the number of seconds/milliseconds in a day.
 *
 * **Example:**
 *
 * ```js
 * var daySeconds = require('day-seconds');
 *
 * daySeconds(false);
 * //=> 86400000
 *
 * daySeconds();
 * //=> 86400000
 *
 * daySeconds('str');
 * //=> 86400000
 *
 * daySeconds([1,2,3]);
 * //=> 86400000
 *
 * daySeconds(/regex/gm);
 * //=> 86400000
 *
 * daySeconds({});
 * //=> 86400000
 *
 * daySeconds(true);
 * //=> 86400
 * ```
 *
 * @name daySeconds
 * @param  {Boolean} `[bool]` when true, returns seconds, otherwise milliseconds
 * @return {Number}
 * @api public
 */
module.exports = function daySeconds(bool) {
  return (bool && typeof bool === 'boolean' ? 1 : 1000) * 60 * 60 * 24;
};
