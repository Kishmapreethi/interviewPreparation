
# JavaScript Differences - Questions and Answers (in Table Format)

## 1. Difference Between Object, Map, and Set

| Feature            | Object                                         | Map                                             | Set                           |
|--------------------|------------------------------------------------|-------------------------------------------------|-------------------------------|
| Storage Type       | Key-value pairs where keys are strings or symbols | Key-value pairs where keys can be of any type    | Unique values only             |
| Ordering           | Not ordered                                    | Ordered by insertion                            | Ordered by insertion           |
| Key Type           | String or Symbol                               | Any type                                        | Not applicable                 |
| Uniqueness         | Keys are unique                                | Keys are unique, but values can be duplicated    | Only unique values             |
| Performance        | Slower for adding/removing entries             | Better for frequent additions/removals          | Faster for maintaining uniqueness |

---

## 2. Difference Between Filter, Map, and Reduce

| Method     | Description                                               | Returns                                          | Example Syntax                |
|------------|-----------------------------------------------------------|-------------------------------------------------|-------------------------------|
| **Filter** | Creates a new array with elements that pass a test         | New array with elements that satisfy condition  | `array.filter(callback)`       |
| **Map**    | Creates a new array by applying a function to each element | New array of transformed elements               | `array.map(callback)`          |
| **Reduce** | Reduces array to a single value by applying a function     | Single value derived from array                 | `array.reduce(callback, initialValue)` |

---

## 3. Difference Between Call by Value and Call by Reference

| Type               | Used For           | Behavior                                              | Example                   |
|--------------------|--------------------|-------------------------------------------------------|---------------------------|
| **Call by Value**  | Primitive Types    | A copy of the value is passed; changes do not affect original | `let a = 10; let b = a; b = 20;` |
| **Call by Reference** | Objects (Arrays, Functions) | A reference to the original value is passed; changes affect original | `let obj = {a: 1}; let ref = obj; ref.a = 2;` |

---

## 4. Difference Between Rest and Spread Operators

| Operator           | Description                                  | Used For                                      | Example                     |
|--------------------|----------------------------------------------|-----------------------------------------------|-----------------------------|
| **Rest (`...`)**   | Collects multiple elements into a single array or object | Function parameters, destructuring            | `function(a, ...rest) {}`    |
| **Spread (`...`)** | Spreads elements into individual elements    | Function calls, array literals, object literals | `Math.max(...array)`         |

---

## 5. Difference Between Shallow and Deep Copy

| Type             | Description                                      | Methods to Create                               | Example                      |
|------------------|--------------------------------------------------|-------------------------------------------------|------------------------------|
| **Shallow Copy** | Copies only the top level of an object           | `Object.assign()`, spread operator `{...obj}`    | `let shallow = {...obj};`     |
| **Deep Copy**    | Copies all levels of the object recursively      | `JSON.parse(JSON.stringify(obj))`, `_.cloneDeep()` | `let deep = JSON.parse(JSON.stringify(obj));` |

---

## 6. Difference Between `==` and `===`

| Operator | Description                                           | Example                        |
|----------|-------------------------------------------------------|--------------------------------|
| `==`     | Compares values after type coercion                    | `1 == '1' // true`             |
| `===`    | Compares values without type coercion                  | `1 === '1' // false`           |

---

## 7. Difference Between Var, Let, and Const

| Keyword | Scope             | Redeclarable | Mutable | Hoisting | Example                     |
|---------|-------------------|--------------|---------|----------|-----------------------------|
| **Var** | Function-scoped   | Yes          | Yes     | Yes      | `var a = 1; var a = 2;`      |
| **Let** | Block-scoped      | No           | Yes     | Yes      | `let b = 1; let b = 2;`      |
| **Const** | Block-scoped   | No           | No      | Yes      | `const c = 1;`               |

---

## 8. Difference Between Synchronous and Asynchronous JavaScript

| Type               | Description                                           | Example                              |
|--------------------|-------------------------------------------------------|--------------------------------------|
| **Synchronous**    | Code is executed line by line, blocking the next task until the current completes | `for` loop, function calls            |
| **Asynchronous**   | Allows other tasks to run while waiting for an operation to finish | `setTimeout()`, Promises, `async/await` |

---

## 9. Difference Between Arrow Functions and Regular Functions

| Feature                 | Arrow Function                            | Regular Function                      |
|-------------------------|-------------------------------------------|---------------------------------------|
| Syntax                  | Concise syntax, no `function` keyword     | Verbose syntax, uses `function` keyword |
| `this` Binding          | Does not have its own `this`              | Has its own `this`                    |
| Usage as Constructor    | Cannot be used as a constructor           | Can be used as a constructor          |

---

## 10. Difference Between Promises and Async/Await

| Feature           | Promises                                      | Async/Await                                  |
|-------------------|-----------------------------------------------|----------------------------------------------|
| Syntax            | Uses `.then()` and `.catch()` for handling success/failure | Uses `async` functions and `await` expressions |
| Code Style        | Can lead to chaining `.then()` methods         | Makes asynchronous code look synchronous    |
| Error Handling    | `.catch()` is used for error handling         | Uses `try/catch` blocks                      |
