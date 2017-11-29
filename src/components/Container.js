import pick from 'lodash.pick'
import debounce from 'lodash.debounce'
import { getDefaultContainerProps, getCurrentBreakpoint, getBreakpointValue } from '../utils'

export default {
  name: 'container',
  inheritAttrs: false,
  data: function () {
    return {
      breakpoint: null
    }
  },
  props: {
    tagName: {
      type: String,
      default: 'div'
    }
  },
  methods: {
    check: function () {
      const vw = window.innerWidth
      const { breakpoints } = this.$options.config
      const bp = getCurrentBreakpoint(vw, breakpoints)

      if (bp !== this.breakpoint) {
        this.breakpoint = bp
      }
    }
  },
  computed: {
    span: function () {
      if (!this.breakpoint)
        return
      const { breakpoints } = this.$options.config
      return getBreakpointValue(this.breakpoint, breakpoints, this.reducedAttrs)
    },
    reducedAttrs: function () {
      const { breakpoints } = this.$options.config
      // xl, md, sm...
      const bpNames = Object.keys(breakpoints)
      // remove unecessary attrs
      const declaredProps = pick(this.$attrs, bpNames)
      // add default props
      const defaultProps = getDefaultContainerProps(breakpoints)
      // return default props overrated by declared dynamic attrs
      return Object.assign({}, ...defaultProps, declaredProps)
    },
  },
  render: function (createElement) {
    return createElement(
      this.tagName, {
        style: {
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          maxWidth: `${this.span ? `${this.span}px` : '100%'}`,
          paddingLeft:  `${this.$options.config.gutter}px`,
          paddingRight: `${this.$options.config.gutter}px`
        }
      }, this.$slots.default)
  },
  mounted: function () {
    this.check()
    this.check = debounce(this.check, 150)
    window.addEventListener('resize', this.check)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.check)
  }
}
