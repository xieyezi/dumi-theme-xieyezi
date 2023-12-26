---
nav: Components
group:
  title: Components
  order: 1
title: Example
description: This is an example components doc.
---

## ประเภทของปุ่ม

ปุ่มสนับสนุน 5 ประเภทคือ `default`、`primary`、`success`、`warning` และ `danger` โดยค่าเริ่มต้นคือ `default`。

```tsx | pure
<Button type="primary">ปุ่มหลัก</Button>
<Button type="success">ปุ่มสำเร็จ</Button>
<Button type="default">ปุ่มตั้งต้น</Button>
<Button type="warning">ปุ่มเตือน</Button>
<Button type="danger">ปุ่มอันตราย</Button>
```

## ปุ่มเรียบร้อย

ใช้คุณสมบัติ `plain` เพื่อตั้งค่าปุ่มให้เป็นปุ่มเรียบร้อย ข้อความในปุ่มเรียบร้อยจะเป็นสีของปุ่มและพื้นหลังเป็นสีขาว

```jsx | pure
<Button plain type="primary">ปุ่มเรียบร้อย</Button>
<Button plain type="success">ปุ่มเรียบร้อย</Button>
```

## API

### Props

| พารามิเตอร์  | คำอธิบาย                                                        | ประเภท                   | ค่าเริ่มต้น |
| ------------ | --------------------------------------------------------------- | ------------------------ | ----------- |
| type         | ประเภท ค่าที่เลือกได้คือ `primary` `success` `warning` `danger` | _string_                 | default     |
| size         | ขนาด ค่าที่เลือกได้คือ `large` `small` `mini`                   | _number_                 | normal      |
| color        | สีของปุ่ม                                                       | _string_                 | -           |
| icon         | คอมโพเนนต์ไอคอนที่กำหนดเอง                                      | _React.ReactNode_        | -           |
| iconPosition | ตำแหน่งการแสดงไอคอน เลือกได้คือ `right`                         | _left_ \| _right_        | left        |
| plain        | เป็นปุ่มเรียบร้อยหรือไม่                                        | _boolean_                | -           |
| square       | เป็นปุ่มสี่เหลี่ยมหรือไม่                                       | _boolean_                | -           |
| round        | เป็นปุ่มกลมหรือไม่                                              | _boolean_                | -           |
| disabled     | ปิดใช้งานปุ่มหรือไม่                                            | _boolean_                | -           |
| loading      | แสดงให้เห็นว่ากำลังโหลดหรือไม่                                  | _boolean_                | -           |
| loadingText  | ข้อความแสดงสถานะการโหลด                                         | _boolean_                | -           |
| loadingType  | ประเภทไอคอนการโหลด                                              | _LoadingProps['type']_   | -           |
| loadingSize  | ขนาดไอคอนการโหลด                                                | _number_                 | -           |
| textStyle    | สไตล์ของปุ่ม                                                    | _StyleProp\<TextStyle\>_ | -           |
