import debounce from 'lodash.debounce'

export default {
  name: 'hidden',
  data: function () {
    return {
      viewport: window.innerWidth
    }
  },
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    from: {
      type: String,
    },
    until: {
      type: String,
    }
  },
  computed: {
    isVisible: function () {
      const { breakpoints } = this.$options.config
      let isVisible = false

      if (!!this.from && !!this.until) {
        const fromWidth = breakpoints[this.from]
        const untilWidth = breakpoints[this.until]
        isVisible = this.viewport < fromWidth || this.viewport >= untilWidth
      }
      else if (!!this.from) {
        const fromWidth = breakpoints[this.from]
        isVisible = this.viewport < fromWidth
      }
      else if (!!this.until) {
        const untilWidth = breakpoints[this.until]
        isVisible = this.viewport >= untilWidth
      }

      return isVisible
    }
  },
  methods: {
    setViewport: function () {
      this.viewport = window.innerWidth
    }
  },
  render: function (createElement) {
    if (this.isVisible) {
      return createElement(
        this.tagName,
        this.$slots.default
      )
    } else {
      return null
    }
  },
  mounted: function () {
    this.setViewport = debounce(this.setViewport, 150)
    window.addEventListener('resize', this.setViewport)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.setViewport)
  }
}
