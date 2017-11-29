# vue-grid

> A powerful flexbox grid system for Vue.js 2.x, built with inline-styles

## Installation
``` bash
  npm install @liqueflies/vue-grid --save
  # or
  yarn add @liqueflies/vue-grid
```

## Introduction

`vue-grid` use principles of [bootstrap layout](https://getbootstrap.com/docs/4.0/layout/overview/) providing a responsive grid made with components, props and inline-styles.

## Example usage

```js
import { VueGrid } from '@liqueflies/vue-grid'

Vue.use(VueGrid, { /* your configuration */ })
```

### This object is the `default` confguration representing the properties that you can override:

```js
{
  columns: 12,
  gutter: 16,
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
}
```

This instruction will install 4 components, `Container`, `Row`, `Column`, `Hidden`.
Please refer to [Documentation](docs/main.md) for more details.

An example of code using `vue-grid`:

```html
<container xl="1200">
  <row>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
    <column :sm="6" :md="3">
      <img src="http://unsplash.it/800x800" class="img-fluid" alt="placeholder" />
    </column>
  </row>
  <hidden :from="sm" :until="lg">
    This is only visible from sm to lg breakpoints
  </hidden>
</container>
```

## Documentation

#### [View the Documentation](docs/main.md)

## Examples

``` bash
  npm run examples
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Lorenzo Girardi