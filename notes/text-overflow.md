# 为什么 text-overflow 有时会不起作用

在用 text-overflow 将多余的文字变成省略号时，会发现有时没起作用，有可能是 CSS-Tricks 中提到的[这个原因](https://css-tricks.com/almanac/properties/t/text-overflow/)：

> Text overflow can only happen on **_block_** or **_inline-block_** level elements, because the element needs to have a width in order to be overflow-ed. The overflow happens in the direction as determined by the direction property or related attributes.
