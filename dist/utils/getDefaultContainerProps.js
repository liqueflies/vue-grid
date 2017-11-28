'use strict';

exports.__esModule = true;
exports.getDefaultContainerProps = undefined;

var _toArray = require('./toArray');

var getDefaultContainerProps = exports.getDefaultContainerProps = function getDefaultContainerProps(breakpoints) {
  return (0, _toArray.toArray)(breakpoints).map(function (bp) {
    var _ref;

    return _ref = {}, _ref[bp.name] = 0, _ref;
  });
};