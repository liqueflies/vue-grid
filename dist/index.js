'use strict';

exports.__esModule = true;
exports.VueGrid = undefined;

var _Container = require('./components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('./components/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Column = require('./components/Column');

var _Column2 = _interopRequireDefault(_Column);

var _Hidden = require('./components/Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _defaults = require('./utils/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueGrid = {
  install: function install(Vue, options) {
    var config = Object.assign(_defaults2.default, options);

    Vue.component(_Container2.default.name, { extends: _Container2.default, config: config });
    Vue.component(_Row2.default.name, { extends: _Row2.default, config: config });
    Vue.component(_Column2.default.name, { extends: _Column2.default, config: config });
    Vue.component(_Hidden2.default.name, { extends: _Hidden2.default, config: config });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGrid);
}

exports.VueGrid = VueGrid;