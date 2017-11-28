import pick from 'lodash.pick';
import debounce from 'lodash.debounce';
import { getDefaultContainerProps, getBreakpointValue } from '../utils';

export default {
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

      var bp = getBreakpointValue(vw, breakpoints);

      if (bp !== this.breakpoint) {
        this.breakpoint = bp;
      }
    }
  },
  computed: {
    span: function span() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return getBreakpointValue(this.breakpoint, this.breakpoints, breakpoints);
    },
    breakpoints: function breakpoints() {
      var _$options$config = this.$options.config,
          breakpoints = _$options$config.breakpoints,
          columns = _$options$config.columns;

      var declaredProps = pick(this.$attrs, Object.keys(breakpoints));
      var defaultProps = getDefaultContainerProps(breakpoints, columns);
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
    this.check = debounce(this.check, 150);
    window.addEventListener('resize', this.check);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.check);
  }
};