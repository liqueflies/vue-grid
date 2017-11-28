import pick from 'lodash.pick'
import debounce from 'lodash.debounce'
import { getDefaultContainerProps, getBreakpointValue } from '../utils'

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
      const bp = getBreakpointValue(vw, breakpoints)

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
      return getBreakpointValue(this.breakpoint, this.breakpoints, breakpoints)
    },
    breakpoints: function () {
      const { breakpoints, columns } = this.$options.config
      const declaredProps = pick(this.$attrs, Object.keys(breakpoints))
      const defaultProps = getDefaultContainerProps(breakpoints, columns)
      return Object.assign({}, ...defaultProps, declaredProps)
    }
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
