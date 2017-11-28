export var toArray = function toArray(breakpoints) {
  var bpArray = [];
  for (var _iterator = Object.entries(breakpoints), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var _ref = _ref2;
    var key = _ref[0];
    var value = _ref[1];

    bpArray.push({
      name: key,
      value: value
    });
  }
  return bpArray;
};