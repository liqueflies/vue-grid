import { toArray } from './toArray';

export var columnProps = function columnProps(breakpoints, columns) {
  var _ref3;

  var props = toArray(breakpoints).map(function (bp, index) {
    var _ref, _ref2;

    return [(_ref = {}, _ref[bp.name] = index === 0 ? columns : null, _ref), (_ref2 = {}, _ref2[bp.name + 'Shift'] = index === 0 ? 0 : null, _ref2)];
  });

  return (_ref3 = []).concat.apply(_ref3, props);
};