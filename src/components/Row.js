export default {
  name: 'row',
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    resetStyle: {
      type: Boolean,
      default: false
    }
  },
  render: function (createElement) {
    return createElement(
      this.tagName, {
        attrs: this.$attrs,
        on: this.$listeners,
        style: Object.assign({
          display: 'flex',
          flexWrap: 'wrap',
          margin: `0 -${this.$options.config.gutter}px`,
          justifyContent: 'stretch',
          alignItems: 'stretch'
        }, 
          this.resetStyle ? {
            padding: '0',
            listStyle: 'none'
          } : {}
        )
      }, this.$slots.default)
  }
}
