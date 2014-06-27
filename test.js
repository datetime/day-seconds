/*!
 * day-seconds <https://github.com/tunnckoCore/day-seconds>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var daySeconds = require('./');

it('should get the number of seconds in a day', function () {
  assert.strictEqual(daySeconds(), 86400);
});
it('should get the number of milliseconds in a day', function () {
  assert.strictEqual(daySeconds(true), 86400000);
});
it('should response be typeof number', function () {
  assert(typeof daySeconds() === 'number');
})
