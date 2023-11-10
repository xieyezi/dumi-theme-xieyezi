---
nav: Components
group:
  title: Components
  order: 1
title: Example
description: This is an example components doc.
---

## Button Types

Buttons support five types: `default`, `primary`, `success`, `warning`, and `danger`, with `default` being the default type.

```tsx | pure
<Button type="primary">Primary Button</Button>
<Button type="success">Success Button</Button>
<Button type="default">Default Button</Button>
<Button type="warning">Warning Button</Button>
<Button type="danger">Danger Button</Button>
```

## Plain Button

Set the button as a plain button by using the `plain` prop. The text color of a plain button matches the button color, and the background is white.

```jsx | pure
<Button plain type="primary">Plain Button</Button>
<Button plain type="success">Plain Button</Button>
```

## API

### Props

| Parameter    | Description                                                            | Type                     | Default |
| ------------ | ---------------------------------------------------------------------- | ------------------------ | ------- |
| type         | Type of the button, options: `primary`, `success`, `warning`, `danger` | _string_                 | default |
| size         | Size of the button, options: `large`, `small`, `mini`                  | _number_                 | normal  |
| color        | Button color                                                           | _string_                 | -       |
| icon         | Custom icon component                                                  | _React.ReactNode_        | -       |
| iconPosition | Icon position, options: `left`, `right`                                | _string_                 | left    |
| plain        | Whether it is a plain button                                           | _boolean_                | -       |
| square       | Whether it is a square button                                          | _boolean_                | -       |
| round        | Whether it is a round button                                           | _boolean_                | -       |
| disabled     | Whether the button is disabled                                         | _boolean_                | -       |
| loading      | Whether to show the button as loading                                  | _boolean_                | -       |
| loadingText  | Loading state text                                                     | _boolean_                | -       |
| loadingType  | Loading icon type                                                      | _LoadingProps['type']_   | -       |
| loadingSize  | Loading icon size                                                      | _number_                 | -       |
| textStyle    | Button style                                                           | _StyleProp\<TextStyle\>_ | -       |
