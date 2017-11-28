import { toArray } from './toArray';

export var calcSpan = function calcSpan(currentBreakpoint, breakpoints, breakpointsMeasures) {
  var shift = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var bp = toArray(breakpoints).filter(function (bp) {
    return bp.name.includes('Shift') === shift;
  }).reduce(function (previous, current) {
    var pureName = current.name.replace('Shift', '');
    var isSmallerThanCurrentBreakpoint = breakpointsMeasures[pureName] <= breakpointsMeasures[currentBreakpoint];
    return !!current.value && isSmallerThanCurrentBreakpoint ? current : previous;
  });
  return bp.value;
};