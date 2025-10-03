# JavaScript Syntax Cheat Sheet

## Variables

```javascript
let myVariable = value;        // Block-scoped, can be reassigned
const myConstant = value;      // Block-scoped, cannot be reassigned
var oldVariable = value;       // Function-scoped, avoid using
```

**Notes:**
- Use `const` by default; use `let` only when you need to reassign
- `var` is outdated but you may see it in older code
- No need to specify data type (JavaScript is dynamically typed)

---

## Data Types

```javascript
let myBoolean = true;          // or false
let myInteger = 42;            // Just a number
let myFloat = 3.14;            // Also just a number (no separate type)
let myString = "hello";        // or 'hello' (single or double quotes)
let myTemplateString = `Hello ${name}`; // Template literal with interpolation
```

**Notes:**
- JavaScript has only one number type (no distinction between int and float)
- Use backticks `` ` `` for template literals with `${}` for interpolation
- Check type with `typeof myVariable`

---

## Lists or Arrays

```javascript
let myArray = [item1, item2, item3];
let emptyArray = [];

// Accessing elements
let firstItem = myArray[0];

// Common methods
myArray.push(item);            // Add to end
myArray.pop();                 // Remove from end
myArray.unshift(item);         // Add to beginning
myArray.shift();               // Remove from beginning
let length = myArray.length;   // Get length
```

**Notes:**
- Zero-indexed like Python
- Arrays can hold mixed types
- `.length` is a property, not a method (no parentheses)

---

## Maps

```javascript
// Using Map object (more like Python dict)
let myMap = new Map();
myMap.set(key, value);
let value = myMap.get(key);
myMap.has(key);                // Returns boolean
myMap.delete(key);

// Using plain objects (more common)
let myObject = {
  key1: value1,
  key2: value2
};

// Accessing object properties
let value = myObject.key1;     // Dot notation
let value = myObject["key1"];  // Bracket notation
myObject.key3 = value3;        // Adding new property
```

**Notes:**
- Plain objects are usually preferred for simple key-value pairs
- Use `Map` when you need keys that aren't strings or need map-specific methods
- Object keys are automatically converted to strings

---

## Functions, Parameters, and Return Statements

```javascript
// Function declaration
function myFunction(param1, param2) {
  // function body
  return result;
}

// Function expression
const myFunction = function(param1, param2) {
  return result;
};

// Arrow function (most modern)
const myFunction = (param1, param2) => {
  return result;
};

// Arrow function with implicit return (single expression)
const myFunction = (param1, param2) => result;

// Single parameter (parentheses optional)
const myFunction = param => result;

// Default parameters
function myFunction(param1 = defaultValue) {
  return result;
}
```

**Notes:**
- Arrow functions are most common in modern JS
- Implicit return only works with single expressions (no curly braces)
- Functions without `return` implicitly return `undefined`

---

## Function Calls

```javascript
myFunction(arg1, arg2);
let result = myFunction(arg1, arg2);

// Method calls (on objects/arrays)
myArray.push(item);
myObject.myMethod(arg);
```

**Notes:**
- Same as Python - use parentheses with arguments
- Can call functions before they're defined (function declarations are hoisted)

---

## "If" Statements

```javascript
if (condition) {
  // code
}

if (condition) {
  // code
} else {
  // code
}

if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}

// Ternary operator
let result = condition ? valueIfTrue : valueIfFalse;
```

**Notes:**
- Condition must be in parentheses
- Use curly braces `{}` for code blocks (not indentation)
- `else if` is two words (not `elif`)
- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`

---

## "For" and "While" Loops

```javascript
// Traditional for loop
for (let i = 0; i < array.length; i++) {
  // code using array[i]
}

// For...of loop (iterates over values)
for (let item of myArray) {
  // code using item
}

// For...in loop (iterates over keys/indices)
for (let key in myObject) {
  // code using key
}

// While loop
while (condition) {
  // code
}

// Do-while loop
do {
  // code
} while (condition);
```

**Notes:**
- `for...of` is like Python's `for item in list`
- `for...in` iterates over keys (use with objects, not arrays)
- Traditional for loops need initialization, condition, and increment
- `break` and `continue` work the same as Python

---

## Anonymous Functions

```javascript
// Anonymous function expression
function(param1, param2) {
  return result;
}

// Anonymous arrow function
(param1, param2) => {
  return result;
}

// Commonly used in callbacks
myArray.map(item => item * 2);
myArray.filter(item => item > 10);

setTimeout(() => {
  console.log("Delayed");
}, 1000);

button.addEventListener('click', (event) => {
  console.log("Clicked!");
});
```

**Notes:**
- Arrow functions are the most common form of anonymous functions
- Often used as callbacks for array methods and event handlers
- Can be assigned to variables or passed directly as arguments

---

## Tests

```javascript
// Equality
x === y                        // Strict equality (recommended)
x == y                         // Loose equality (avoid)
x !== y                        // Strict inequality
x != y                         // Loose inequality

// Comparison
x > y
x < y
x >= y
x <= y

// Logical operators
condition1 && condition2       // AND
condition1 || condition2       // OR
!condition                     // NOT

// Checking existence
myVariable === null
myVariable === undefined
myVariable === null || myVariable === undefined  // Check for both
typeof myVariable === "string"
```

**Notes:**
- Always use `===` and `!==` (strict equality) instead of `==` and `!=`
- Strict equality checks both value and type
- `&&` and `||` are short-circuit operators

---

## Objects

```javascript
// Object literal
const myObject = {
  property1: value1,
  property2: value2,
  myMethod: function(param) {
    return result;
  },
  // ES6 method shorthand
  myMethod(param) {
    return result;
  },
  // Arrow function as property
  myArrowMethod: (param) => {
    return result;
  }
};

// Accessing properties
myObject.property1             // Dot notation
myObject["property1"]          // Bracket notation
myObject.myMethod(arg);

// Adding/modifying properties
myObject.newProperty = value;
myObject["newProperty"] = value;

// Deleting properties
delete myObject.property1;

// Object destructuring
const {property1, property2} = myObject;

// Constructor function (older style)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 25);

// Class syntax (ES6)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
const person1 = new Person("Alice", 25);
```

**Notes:**
- Objects are collections of key-value pairs (like Python dictionaries)
- Use dot notation when possible; bracket notation when key is dynamic
- `this` refers to the object in methods (be careful with arrow functions)
- ES6 classes are syntactic sugar over constructor functions
- No `self` keyword - use `this` instead