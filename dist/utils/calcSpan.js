'use strict';

exports.__esModule = true;
exports.calcSpan = undefined;

var _toArray = require('./toArray');

var calcSpan = exports.calcSpan = function calcSpan(currentBreakpoint, breakpoints, breakpointsMeasures) {
  var shift = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var bp = (0, _toArray.toArray)(breakpoints).filter(function (bp) {
    return bp.name.includes('Shift') === shift;
  }).reduce(function (previous, current) {
    var pureName = current.name.replace('Shift', '');
    var isSmallerThanCurrentBreakpoint = breakpointsMeasures[pureName] <= breakpointsMeasures[currentBreakpoint];
    return !!current.value && isSmallerThanCurrentBreakpoint ? current : previous;
  });
  return bp.value;
};