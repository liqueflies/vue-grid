import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';
import Hidden from './components/Hidden';
import defaults from './utils/defaults';

var VueGrid = {
  install: function install(Vue, options) {
    var config = Object.assign(defaults, options);

    Vue.component(Container.name, { extends: Container, config: config });
    Vue.component(Row.name, { extends: Row, config: config });
    Vue.component(Column.name, { extends: Column, config: config });
    Vue.component(Hidden.name, { extends: Hidden, config: config });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGrid);
}

export { VueGrid };