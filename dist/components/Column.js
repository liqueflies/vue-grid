'use strict';

exports.__esModule = true;

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.debounce');

var _lodash4 = _interopRequireDefault(_lodash3);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'column',
  inheritAttrs: false,
  data: function data() {
    return {
      breakpoint: null
    };
  },
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    check: function check() {
      var vw = window.innerWidth;
      var breakpoints = this.$options.config.breakpoints;

      var bp = (0, _utils.calcBreakpoint)(vw, breakpoints);

      if (bp !== this.breakpoint) {
        this.breakpoint = bp;
      }
    }
  },
  computed: {
    span: function span() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return (0, _utils.calcSpan)(this.breakpoint, this.breakpoints, breakpoints);
    },
    shift: function shift() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return (0, _utils.calcSpan)(this.breakpoint, this.breakpoints, breakpoints, true);
    },
    breakpoints: function breakpoints() {
      var _$options$config = this.$options.config,
          breakpoints = _$options$config.breakpoints,
          columns = _$options$config.columns;

      var bpKeys = Object.keys(breakpoints);
      var shiftedKeys = bpKeys.map(function (k) {
        return k + 'Shift';
      });
      var keysToKeep = [bpKeys, shiftedKeys];

      var declaredProps = _lodash2.default.apply(undefined, [this.$attrs].concat(keysToKeep));
      var defaultProps = (0, _utils.columnProps)(breakpoints, columns);
      return Object.assign.apply(Object, [{}].concat(defaultProps, [declaredProps]));
    },
    column: function column() {
      var columns = this.$options.config.columns;

      return this.span / columns * 100;
    },
    offset: function offset() {
      var columns = this.$options.config.columns;

      return this.shift / columns * 100;
    },
    gutter: function gutter() {
      var gutter = this.$options.config.gutter;

      return this.fluid ? 0 : gutter;
    }
  },
  render: function render(createElement) {
    return createElement(this.tagName, {
      style: {
        position: 'relative',
        minHeight: '1px',
        width: '100%',
        flex: '0 0 ' + this.column + '%',
        maxWidth: this.column + '%',
        paddingLeft: this.gutter + 'px',
        paddingRight: this.gutter + 'px',
        marginLeft: this.offset + '%'
      }
    }, this.$slots.default);
  },
  mounted: function mounted() {
    this.check();
    this.check = (0, _lodash4.default)(this.check, 150);
    window.addEventListener('resize', this.check);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.check);
  }
};
module.exports = exports['default'];