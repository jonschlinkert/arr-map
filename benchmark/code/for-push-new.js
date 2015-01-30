

module.exports = function (arr) {
  return map(arr, function (ele) {
    return ele + ele;
  });
};

function map(arr, fn) {
  var len = arr.length;
  var res = new Array(len);

  for (var i = 0; i < len; i++) {
    res.push(fn(arr[i], i));
  }

  return res;
}

