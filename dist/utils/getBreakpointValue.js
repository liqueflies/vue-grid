'use strict';

exports.__esModule = true;
exports.getBreakpointValue = undefined;

var _toArray = require('./toArray');

var getBreakpointValue = exports.getBreakpointValue = function getBreakpointValue(currentBreakpoint, breakpoints, userProps) {
  var shift = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var bp = (0, _toArray.toArray)(userProps)
  // filter shifted breakpoints if present, or keep them only
  .filter(function (bp) {
    return bp.name.includes('Shift') === shift;
  }).reduce(function (previous, current) {
    // prevent `shift` on name
    var pureName = current.name.replace('Shift', '');
    var isSmallerThanCurrentBreakpoint = breakpoints[pureName] <= breakpoints[currentBreakpoint];
    return !!current.value && isSmallerThanCurrentBreakpoint ? current : previous;
  });

  return bp.value;
};