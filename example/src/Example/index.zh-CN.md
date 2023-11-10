---
nav: Components
group:
  title: Components
  order: 1
title: Example
description: This is an example components doc.
---

## 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```tsx | pure
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="default">默认按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx | pure
<Button plain type="primary">朴素按钮</Button>
<Button plain type="success">朴素按钮</Button>
```

## API

### Props

| 参数         | 说明                                                  | 类型                     | 默认值  |
| ------------ | ----------------------------------------------------- | ------------------------ | ------- |
| type         | 类型，可选值为 `primary` `success` `warning` `danger` | _string_                 | default |
| size         | 尺寸，可选值为 `large` `small` `mini`                 | _number_                 | normal  |
| color        | 按钮颜色                                              | _string_                 | -       |
| icon         | 自定义图标组件                                        | _React.ReactNode_        | -       |
| iconPosition | 图标展示位置，可选值为 `right`                        | _left_ \| _right_        | left    |
| plain        | 是否为朴素按钮                                        | _boolean_                | -       |
| square       | 是否为方形按钮                                        | _boolean_                | -       |
| round        | 是否为圆形按钮                                        | _boolean_                | -       |
| disabled     | 是否禁用按钮                                          | _boolean_                | -       |
| loading      | 是否显示为加载状态                                    | _boolean_                | -       |
| loadingText  | 加载状态提示文字                                      | _boolean_                | -       |
| loadingType  | 加载图标类型                                          | _LoadingProps['type']_   | -       |
| loadingSize  | 加载图标大小                                          | _number_                 | -       |
| textStyle    | 按钮样式                                              | _StyleProp\<TextStyle\>_ | -       |
