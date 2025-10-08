# JavaScript

[Syntax Cheatsheet](js_syntax_cheatsheet.md)

- Is (primarily) used to add functionality to websites
- Can be added to HTML with a separate file referenced in the head, a script element in the body, or directly in the tags
- Node.js is the interpreter for JS, can be used to run stuff on the backend
- NPM is the Node Package Manager, used to use other people's code

## JS Advanced
- Functions can be anonymous in two ways, and also can be given names in two ways:
  - Arrow functions and anonymous functions
  - Assigning a function a name vs. declaring a function with the name
```
```
- 3 different ways to write arrow functions:
  - `() => 3;` - returns a 3
  - `() => { 3; };` - no return value, returns "undefined"
  - `() => { return 3; };` - also returns 3
- Closure:
  - Returns a function that keeps a state, even though normally the state would go away
```
```
- Arrays:
  - Are kinda like lists in Python
  - Array object type, has a bunch of methods on it
  - See [slides](https://docs.google.com/presentation/d/1nMPGe1x8KWnCamz22QSPMgkpK1_Y8m4zpxZPHqMfLbw/edit?slide=id.g27fdbd84860_0_0#slide=id.g27fdbd84860_0_0) for examples
- Objects:
  - An object is a bunch of key-value pairs
  - Like a dictionary in Python
  - Values can be whatever you want, even nested objects
  - Can be used to store as a `.json` file, learn about that later
```
const obj = {
  a: 3,
  b: 'fish',
  c: [1, true, 'dog'],
  d: { e: false},
  f: function () {
    return 'hello';
  },
};
```
- Classes & Inheritance:
  - For syntax, see [slides](https://docs.google.com/presentation/d/1nMPGe1x8KWnCamz22QSPMgkpK1_Y8m4zpxZPHqMfLbw/edit?slide=id.g27fdbd84860_0_0#slide=id.g27fdbd84860_0_0)
  - Kinda like other programming language
- Destructuring:
  - Can assign new variables to individual array or object values (see slides)