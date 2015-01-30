

var map = require('../..');

module.exports = function (arr) {
  return map(arr, function (ele) {
    return ele + ele;
  });
};
