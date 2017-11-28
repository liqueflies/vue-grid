'use strict';

exports.__esModule = true;
exports.getDefaultColumnProps = undefined;

var _toArray = require('./toArray');

var getDefaultColumnProps = exports.getDefaultColumnProps = function getDefaultColumnProps(breakpoints, columns) {
  var _ref3;

  var props = (0, _toArray.toArray)(breakpoints).map(function (bp, index) {
    var _ref, _ref2;

    return [(_ref = {}, _ref[bp.name] = !index ? columns : null, _ref), (_ref2 = {}, _ref2[bp.name + 'Shift'] = !index ? 0 : null, _ref2)];
  });
  // flatten array
  return (_ref3 = []).concat.apply(_ref3, props);
};