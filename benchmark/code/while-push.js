

module.exports = function (arr) {
  return map(arr, function (ele) {
    return ele + ele;
  });
};

function map(arr, fn) {
  var len = arr.length;
  var res = [], i = -1;

  while (++i < len) {
    res.push(fn(arr[i], i));
  }

  return res;
}

