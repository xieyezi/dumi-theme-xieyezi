---
nav: Components
group:
  title: Components
  order: 1
title: Example
description: This is an example components doc.
---

## ボタンタイプ

ボタンは `default`、`primary`、`success`、`warning`、`danger` の5つのタイプをサポートしています。デフォルトは `default` です。

```tsx | pure
<Button type="primary">主要ボタン</Button>
<Button type="success">成功ボタン</Button>
<Button type="default">デフォルトボタン</Button>
<Button type="warning">警告ボタン</Button>
<Button type="danger">危険ボタン</Button>
```

## シンプルボタン

`plain` 属性を使用してボタンをシンプルボタンに設定することができます。シンプルボタンのテキストはボタンの色で表示され、背景は白色です。

```jsx | pure
<Button plain type="primary">シンプルボタン</Button>
<Button plain type="success">シンプルボタン</Button>
```

## API

### Props

| パラメータ   | 説明                                                                  | タイプ                   | デフォルト値 |
| ------------ | --------------------------------------------------------------------- | ------------------------ | ------------ |
| type         | タイプ、`primary` `success` `warning` `danger` のいずれかを選択します | _string_                 | default      |
| size         | サイズ、`large` `small` `mini` のいずれかを選択します                 | _number_                 | normal       |
| color        | ボタンの色                                                            | _string_                 | -            |
| icon         | カスタムアイコンコンポーネント                                        | _React.ReactNode_        | -            |
| iconPosition | アイコンの表示位置、`right` を選択します                              | _left_ \| _right_        | left         |
| plain        | シンプルボタンかどうか                                                | _boolean_                | -            |
| square       | 四角いボタンかどうか                                                  | _boolean_                | -            |
| round        | 丸いボタンかどうか                                                    | _boolean_                | -            |
| disabled     | ボタンを無効にするかどうか                                            | _boolean_                | -            |
| loading      | ローディング状態を表示するかどうか                                    | _boolean_                | -            |
| loadingText  | ローディング状態のテキスト                                            | _boolean_                | -            |
| loadingType  | ローディングアイコンのタイプ                                          | _LoadingProps['type']_   | -            |
| loadingSize  | ローディングアイコンのサイズ                                          | _number_                 | -            |
| textStyle    | ボタンのスタイル                                                      | _StyleProp\<TextStyle\>_ | -            |
