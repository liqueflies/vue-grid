# vue-grid

## Breakpoints

`vue-grid` is built mobile-first, reflecting the `bootstrap layout` breakpoints I.E.

```js
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
```

you can easily override them passing them on config options when you install `vue-grid`

```js
import VueGrid from '@liqueflies/vue-grid'

Vue.use(VueGrid, { /* your configuration */ })
```

## Gutter

Default `gutter` is `16` and you can override passing the `gutter` property on config options.

## Columns

Default `columns` number is `12` and you can override passing the `columns` property on config options.

## Components

### [Container](container.md)
### [Row](row.md)
### [Column](column.md)
### [Hidden](hidden.md)