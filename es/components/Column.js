import pick from 'lodash.pick';
import debounce from 'lodash.debounce';
import { columnProps, calcBreakpoint, calcSpan } from '../utils';

export default {
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

      var bp = calcBreakpoint(vw, breakpoints);

      if (bp !== this.breakpoint) {
        this.breakpoint = bp;
      }
    }
  },
  computed: {
    span: function span() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return calcSpan(this.breakpoint, this.breakpoints, breakpoints);
    },
    shift: function shift() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return calcSpan(this.breakpoint, this.breakpoints, breakpoints, true);
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

      var declaredProps = pick.apply(undefined, [this.$attrs].concat(keysToKeep));
      var defaultProps = columnProps(breakpoints, columns);
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
    this.check = debounce(this.check, 150);
    window.addEventListener('resize', this.check);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.check);
  }
};