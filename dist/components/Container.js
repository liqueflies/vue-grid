'use strict';

exports.__esModule = true;

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.debounce');

var _lodash4 = _interopRequireDefault(_lodash3);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'container',
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
    }
  },
  methods: {
    check: function check() {
      var vw = window.innerWidth;
      var breakpoints = this.$options.config.breakpoints;

      var bp = (0, _utils.getCurrentBreakpoint)(vw, breakpoints);

      if (bp !== this.breakpoint) {
        this.breakpoint = bp;
      }
    }
  },
  computed: {
    span: function span() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return (0, _utils.getBreakpointValue)(this.breakpoint, breakpoints, this.reducedAttrs);
    },
    reducedAttrs: function reducedAttrs() {
      var breakpoints = this.$options.config.breakpoints;
      // xl, md, sm...

      var bpNames = Object.keys(breakpoints);
      // remove unecessary attrs
      var declaredProps = (0, _lodash2.default)(this.$attrs, bpNames);
      // add default props
      var defaultProps = (0, _utils.getDefaultContainerProps)(breakpoints);
      // return default props overrated by declared dynamic attrs
      return Object.assign.apply(Object, [{}].concat(defaultProps, [declaredProps]));
    }
  },
  render: function render(createElement) {
    return createElement(this.tagName, {
      style: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: '' + (this.span ? this.span + 'px' : '100%'),
        paddingLeft: this.$options.config.gutter + 'px',
        paddingRight: this.$options.config.gutter + 'px'
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