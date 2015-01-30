'use strict';

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var glob = require('glob');
var mm = require('micromatch');

var fixtures = lookup('fixtures', '*.js');

lookup('code', 'whil*.js').forEach(function (fp) {
  var name = path.basename(fp, path.extname(fp));
  var fn = require(fp);

  fixtures.forEach(function (fixture) {
    console.log(chalk.bold(name) + ':', fn.apply(fn, require(fixture)));
  });
});


function lookup(dir, pattern, opts) {
  dir = path.join(__dirname, dir);
  var files = fs.readdirSync(dir);
  return files.filter(function (fp) {
    return mm.isMatch(fp, pattern, opts);
  }).map(function (fp) {
    return path.join(dir, fp);
  });
}
