---
nav: Components
group:
  title: Components
  order: 1
title: Example
description: This is an example components doc.
---

## 버튼 유형

버튼은 `default`, `primary`, `success`, `warning`, `danger` 5가지 유형을 지원합니다. 기본값은 `default`입니다.

```tsx | pure
<Button type="primary">기본 버튼</Button>
<Button type="success">성공 버튼</Button>
<Button type="default">기본 버튼</Button>
<Button type="warning">경고 버튼</Button>
<Button type="danger">위험 버튼</Button>
```

## 간단한 버튼

`plain` 속성을 사용하여 버튼을 간단한 버튼으로 설정할 수 있습니다. 간단한 버튼의 텍스트는 버튼의 색상으로 표시되며 배경은 흰색입니다.

```jsx | pure
<Button plain type="primary">간단한 버튼</Button>
<Button plain type="success">간단한 버튼</Button>
```

## API

### 속성

| 매개변수     | 설명                                                                 | 유형                     | 기본값  |
| ------------ | -------------------------------------------------------------------- | ------------------------ | ------- |
| type         | 유형, `primary`, `success`, `warning`, `danger` 중 하나를 선택합니다 | _string_                 | default |
| size         | 크기, `large`, `small`, `mini` 중 하나를 선택합니다                  | _number_                 | normal  |
| color        | 버튼 색상                                                            | _string_                 | -       |
| icon         | 사용자 정의 아이콘 구성 요소                                         | _React.ReactNode_        | -       |
| iconPosition | 아이콘 표시 위치, `right`를 선택합니다                               | _left_ \| _right_        | left    |
| plain        | 간단한 버튼 여부                                                     | _boolean_                | -       |
| square       | 사각형 버튼 여부                                                     | _boolean_                | -       |
| round        | 둥근 버튼 여부                                                       | _boolean_                | -       |
| disabled     | 버튼을 비활성화할지 여부                                             | _boolean_                | -       |
| loading      | 로딩 상태를 표시할지 여부                                            | _boolean_                | -       |
| loadingText  | 로딩 상태의 텍스트                                                   | _boolean_                | -       |
| loadingType  | 로딩 아이콘 유형                                                     | _LoadingProps['type']_   | -       |
| loadingSize  | 로딩 아이콘 크기                                                     | _number_                 | -       |
| textStyle    | 버튼 스타일                                                          | _StyleProp\<TextStyle\>_ | -       |
