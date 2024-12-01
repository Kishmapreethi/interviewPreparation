
# CSS Interview Questions and Answers (3 Years of Experience)

### 1. **What is the difference between `id` and `class` selectors in CSS?**
**Answer:**  
- **`id` Selector**: Uses `#` to target an element and is unique to each element (`#header`).  
- **`class` Selector**: Uses `.` to target multiple elements (`.button`).  

Example:  
```css
#header { color: blue; }  /* Targets a unique element */
.button { color: red; }  /* Targets multiple elements */
```

---

### 2. **What is the Box Model in CSS?**
**Answer:**  
The CSS Box Model describes the structure of an element, including:  
- **Content**: The actual content inside the element.  
- **Padding**: Space between content and the border.  
- **Border**: Surrounds the padding (or content if no padding).  
- **Margin**: Space outside the border separating the element from others.

Example:  
```css
div {
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

---

### 3. **How do you apply styles specifically to child elements using CSS?**
**Answer:**  
Use the child combinator (`>`):  
```css
div > p {
  color: blue;
}
```
This targets only `<p>` elements that are **direct children** of a `<div>`.

---

### 4. **What is Flexbox, and how is it useful?**
**Answer:**  
Flexbox is a layout model designed to align items within a container efficiently, even when their sizes are dynamic. It is especially useful for responsive designs.

Example:  
```css
.container {
  display: flex;
  justify-content: center;  /* Aligns items horizontally */
  align-items: center;      /* Aligns items vertically */
}
```

---

### 5. **What are pseudo-classes in CSS? Give examples.**
**Answer:**  
Pseudo-classes define a special state of an element. Examples:  
- `:hover`: Applies when the mouse hovers over an element.  
- `:nth-child(n)`: Targets specific child elements.

Example:  
```css
a:hover {
  color: green;
}
li:nth-child(2) {
  background-color: yellow;
}
```

---

### 6. **What is the difference between `relative`, `absolute`, and `fixed` positioning in CSS?**
**Answer:**  
- **Relative**: Positions an element relative to its normal position.  
- **Absolute**: Positions an element relative to its nearest positioned ancestor.  
- **Fixed**: Positions an element relative to the viewport, staying fixed during scrolling.

Example:  
```css
.relative { position: relative; top: 10px; }
.absolute { position: absolute; top: 10px; }
.fixed { position: fixed; top: 10px; }
```

---

### 7. **How would you implement a responsive design using media queries?**
**Answer:**  
Media queries apply styles based on device characteristics like width or resolution.  
Example:  
```css
body {
  font-size: 16px;
}
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

---

### 8. **What is the difference between `inline`, `block`, and `inline-block` elements?**
**Answer:**  
- **Inline**: Elements do not start on a new line and only take up as much width as necessary (`<span>`).  
- **Block**: Elements start on a new line and take up the full width (`<div>`).  
- **Inline-block**: Behaves like `inline`, but you can set width and height.

---

### 9. **What is the difference between `em`, `rem`, `%`, and `px` units?**
**Answer:**  
- **`px`**: Absolute unit.  
- **`em`**: Relative to the parent element’s font size.  
- **`rem`**: Relative to the root element (`html`) font size.  
- **`%`**: Relative to the parent element’s size.

---

### 10. **How can you create a CSS grid layout?**
**Answer:**  
CSS Grid is a two-dimensional layout system useful for complex designs.  
Example:  
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
}
```
This creates a grid with two columns, one taking 1 fraction and the other 2 fractions.
