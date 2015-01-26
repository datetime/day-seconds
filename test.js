/**
 * day-seconds <https://github.com/datetime/day-seconds>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var daySeconds = require('./index');

describe('day-seconds:', function() {
  it('should get the number of milliseconds in a day, when no arguments', function(done) {
    assert.strictEqual(daySeconds(), 86400000);
    done();
  });

  it('should get the number of seconds in a day, when true', function(done) {
    assert.strictEqual(daySeconds(true), 86400);
    done();
  });

  it('should get the number of milliseconds in a day, when other is given', function(done) {
    assert.strictEqual(daySeconds('string'), 86400000);
    assert.strictEqual(daySeconds(/regex/gm), 86400000);
    assert.strictEqual(daySeconds(123), 86400000);
    assert.strictEqual(daySeconds([1,2,3]), 86400000);
    done();
  });

  it('should response be typeof number', function(done) {
    assert(typeof daySeconds() === 'number');
    done();
  })
});
