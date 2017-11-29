import pick from 'lodash.pick';
import debounce from 'lodash.debounce';
import { getDefaultContainerProps, getCurrentBreakpoint, getBreakpointValue } from '../utils';

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

      var bp = getCurrentBreakpoint(vw, breakpoints);

      if (bp !== this.breakpoint) {
        this.breakpoint = bp;
      }
    }
  },
  computed: {
    span: function span() {
      if (!this.breakpoint) return;
      var breakpoints = this.$options.config.breakpoints;

      return getBreakpointValue(this.breakpoint, breakpoints, this.reducedAttrs);
    },
    reducedAttrs: function reducedAttrs() {
      var breakpoints = this.$options.config.breakpoints;
      // xl, md, sm...

      var bpNames = Object.keys(breakpoints);
      // remove unecessary attrs
      var declaredProps = pick(this.$attrs, bpNames);
      // add default props
      var defaultProps = getDefaultContainerProps(breakpoints);
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
    this.check = debounce(this.check, 150);
    window.addEventListener('resize', this.check);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.check);
  }
};