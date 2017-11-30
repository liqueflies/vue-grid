'use strict';

exports.__esModule = true;

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'hidden',
  data: function data() {
    return {
      viewport: window.innerWidth
    };
  },
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    from: {
      type: String
    },
    until: {
      type: String
    }
  },
  computed: {
    isVisible: function isVisible() {
      var breakpoints = this.$options.config.breakpoints;

      var isVisible = false;

      if (!!this.from && !!this.until) {
        var fromWidth = breakpoints[this.from];
        var untilWidth = breakpoints[this.until];
        isVisible = this.viewport < fromWidth || this.viewport >= untilWidth;
      } else if (!!this.from) {
        var _fromWidth = breakpoints[this.from];
        isVisible = this.viewport < _fromWidth;
      } else if (!!this.until) {
        var _untilWidth = breakpoints[this.until];
        isVisible = this.viewport >= _untilWidth;
      }

      return isVisible;
    }
  },
  methods: {
    setViewport: function setViewport() {
      this.viewport = window.innerWidth;
    }
  },
  render: function render(createElement) {
    if (this.isVisible) {
      return createElement(this.tagName, this.$slots.default);
    } else {
      return null;
    }
  },
  mounted: function mounted() {
    this.setViewport = (0, _lodash2.default)(this.setViewport, 150);
    window.addEventListener('resize', this.setViewport);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.setViewport);
  }
};
module.exports = exports['default'];