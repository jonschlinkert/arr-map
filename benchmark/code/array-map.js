

var map = require('array-map');

module.exports = function (arr) {
  return map(arr, function (ele) {
    return ele + ele;
  });
};
