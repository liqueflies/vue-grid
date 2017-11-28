import Container from './components/Container'
import Row from './components/Row'
import Column from './components/Column'
import Hidden from './components/Hidden'
import defaults from './utils/defaults'

const VueGrid = {
  install (Vue, options) {
    const config = Object.assign(defaults, options)

    Vue.component(Container.name, { extends: Container, config })
    Vue.component(Row.name, { extends: Row, config })
    Vue.component(Column.name, { extends: Column, config })
    Vue.component(Hidden.name, { extends: Hidden, config })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGrid)
}

export { VueGrid }
