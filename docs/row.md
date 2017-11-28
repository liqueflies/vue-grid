# Row component

```html
<container>
  <row>
    ...
  </row>
</container>
```

## Row options

Property Name | Type | Description | Default
--- | --- | --- | ---
tagName | String | Set tag for the wrapper element that render our content | `div`
resetStyle | Boolean | If true, add reset styles for `list` tags E.G. `ul` | `false`

## Transitions

If you need to use a [transition-group](https://vuejs.org/v2/api/#transition-group) for your items, as far you can!

```js
<row tagName="transition-group" tag="ul" name="my-awesome-transition">
  ...
</row>
```
