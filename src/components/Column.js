import pick from 'lodash.pick'
import debounce from 'lodash.debounce'
import { columnProps, calcBreakpoint, calcSpan } from '../utils'

export default {
  name: 'column',
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
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    check: function () {
      const vw = window.innerWidth
      const { breakpoints } = this.$options.config
      const bp = calcBreakpoint(vw, breakpoints)

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
      return calcSpan(this.breakpoint, this.breakpoints, breakpoints)
    },
    shift: function () {
      if (!this.breakpoint)
        return
      const { breakpoints } = this.$options.config
      return calcSpan(this.breakpoint, this.breakpoints, breakpoints, true)
    },
    breakpoints: function () {
      const { breakpoints, columns } = this.$options.config
      const bpKeys = Object.keys(breakpoints)
      const shiftedKeys = bpKeys.map(k => k + 'Shift')
      const keysToKeep = [bpKeys, shiftedKeys]
      
      const declaredProps = pick(this.$attrs, ...keysToKeep)
      const defaultProps = columnProps(breakpoints, columns)
      return Object.assign({}, ...defaultProps, declaredProps)
    },
    column: function () {
      const { columns } = this.$options.config
      return this.span / columns * 100
    },
    offset: function () {
      const { columns } = this.$options.config
      return this.shift / columns * 100
    },
    gutter: function () {
      const { gutter } = this.$options.config
      return this.fluid ? 0 : gutter
    },
  },
  render: function (createElement) {
    return createElement(
      this.tagName, {
        style: {
          position: 'relative',
          minHeight: '1px',
          width: '100%',
          flex: `0 0 ${this.column}%`,
          maxWidth: `${this.column}%`,
          paddingLeft:  `${this.gutter}px`,
          paddingRight: `${this.gutter}px`,
          marginLeft: `${this.offset}%`,
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
