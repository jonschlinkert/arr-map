/*!
 * arr-map <https://github.com/jonschlinkert/arr-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var map = require('./');

it('should iterate over the elements in an array:', function () {
  var actual = map(['a', 'b', 'c'], function (ele) {
    return ele + ele;
  });
  assert.deepEqual(actual, ['aa', 'bb', 'cc']);
});

it('should expose the index as the second param:', function () {
  var actual = map(['a', 'b', 'c'], function (ele, i) {
    return i + ele;
  });
  assert.deepEqual(actual, ['0a', '1b', '2c']);
});
