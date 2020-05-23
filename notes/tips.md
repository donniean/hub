# Tips

- [Tips](#tips)
  - [HTML](#html)
  - [CSS](#css)
    - [iOS Scroll](#ios-scroll)
  - [JavaScript](#javascript)
    - [对象枚举](#对象枚举)

## HTML

## CSS

### iOS Scroll

```css
selector {
  -webkit-overflow-scrolling: touch;
}
```

## JavaScript

### 对象枚举

```js
for (let key in obj) {
  // 可枚举的自身属性和原型属性
}

Object.keys(obj); // 所有可枚举自身属性

Object.getOwnPropertyNames(obj); // 所有可枚举和不可枚举的自身属性
```
