'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/*.js',
  add: 'code/{arr*-map,native}.js',
  cwd: __dirname
});

suite.run();
