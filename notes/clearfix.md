# 新增空白元素

- HTML

  ```html
  <div>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div class="clearfix"></div>
  </div>
  ```

- CSS

  ```css
  .clearfix {
    clear: both;
    height: 0;
    line-height: 0;
    font-size: 0;
  }
  ```

---

# overflow

- HTML

  ```html
  <div class="clearfix">
      <div>one</div>
      <div>two</div>
      <div>three</div>
  </div>
  ```

- CSS

  ```css
  .clearfix {
    overflow: auto;
    zoom: 1;
  }
  ```

---

# 用伪元素充当空白元素

- HTML

  ```html
  <div class="clearfix">
      <div>one</div>
      <div>two</div>
      <div>three</div>
  </div>
  ```

- CSS

  ```css
  .clearfix {
    zoom: 1;
  }

  .clearfix::after {
    content: ' ';
    clear: both;
    display: table;
    visibility: hidden;
    height: 0;
  }
  ```
