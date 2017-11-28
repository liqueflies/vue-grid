import { toArray } from './toArray';

export var containerProps = function containerProps(breakpoints) {
  return toArray(breakpoints).map(function (bp) {
    var _ref;

    return _ref = {}, _ref[bp.name] = 0, _ref;
  });
};