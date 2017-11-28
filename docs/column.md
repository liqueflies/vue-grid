# Column component

```html
...
  <row>
    <column> <p> By default lower breakpoint is `12` columns and renders a div ay 100% width </p> </column>
  </row>
```

## Column options

> ***IMPORTANT***: you can add / remove your breakpoints dinamically, if you do it changes will be reflected also on props.

Property Name | Type | Description | Default
--- | --- | --- | ---
tagName | String | Set tag for the wrapper element that render our content | `div`
fluid | Boolean | If true, disable gutter | `false`
xs | Number | column width during `xs` breakpoint | `12`
sm | Number | column width during `sm` breakpoint | -
md | Number | column width during `md` breakpoint | -
lg | Number | column width during `lg` breakpoint | -
xl | Number | column width during `xl` breakpoint | -
xsShift | Number | shift column width during `xs` breakpoint | `0`
smShift | Number | shift column width during `sm` breakpoint | -
mdShift | Number | shift column width during `md` breakpoint | -
lgShift | Number | shift column width during `lg` breakpoint | -
xlShift | Number | shift column width during `xl` breakpoint | -