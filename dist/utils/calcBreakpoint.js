'use strict';

exports.__esModule = true;
exports.calcBreakpoint = undefined;

var _toArray = require('./toArray');

var calcBreakpoint = exports.calcBreakpoint = function calcBreakpoint(viewport, breakpoints) {
  var bpArr = (0, _toArray.toArray)(breakpoints);

  var result = bpArr.reduce(function (previous, current) {
    return current.value <= viewport ? current : previous;
  });

  return result.name;
};