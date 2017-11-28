# Hidden component

Hidden is an utility component that allows you to hide / show content based on your breakponts.

## Simple example

```html
<hidden from="md">
  This content is hidden in `md` breakpoint and upper.
</hidden>

<hidden until="md">
  This content is visible from `md` breakpoint and upper.
</hidden>

<hidden from="sm" to="md">
  This content is hidden from `sm` to `md` breakpoint.
</hidden>
```

## Hidden options

Property Name | Type | Description | Default
--- | --- | --- | ---
tagName | String | Set tag for the wrapper element that render our content | `div`
from | String | the `breakpoint` name where the component starts to hide content | -
until | String | the `breakpoint` name where the component starts to show content | -