# React

Important to include in your JSX files:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
```

## Overview Notes
- Is part of what runs on the browser
- D.R.Y.: Don't Repeat Yourself
- Single Page Applications have higher performance, replaces sections of the screen (half a second loses a lot of sales)
- Increases device coverage as well (**do mobile first**, more users there)
- Seen as a tool rather than an all-encompassing framework, can be used on specific parts
- _Model, view, and controller???_
- JSX combines HTML with JavaScript (it's a variant of JavaScript)
- Vite is also used, IDK what it does tho
- **IMPORTANT FUNCTION WRITING** (This makes the latency lower, this executes the functions sooner, write as if it's all running at once):
```
const Hello = () => {
    return <div>Hello React</div>;
};
```
- To add properties to the components (the curly braces stuff):
```
const Hello = ({ phrase }) => {
    return (
        <div>
            <p>Hello {phrase}</p>
        </div>
    );
};

const root =
```
- Can't return more than one tag, should probably use `<div>` to wrap it
- React component writing: `<[Component Name] [attributes] />`
- State variables:
```
```
- Basic building block in React is a component (wich is a function that returns JSX) which gets injected into the tree
- Using CSS frameworks in the JSX in React can speed up styling
- Vite: can run a live local server to host JUST the frontend, and ***translates JSX to JS and HTML*** for the browser, among other things
- Usually, we use a `<div id="root">` as the root of the React tree

## Components
- Components allow for code to more fully represent the elements the user interacts with, in addition to being able to better reuse code for repeated elements
  - Example of a component (JSX, the "Demo" is not valid HTML, so it injects the React stuff):
```
<div>
  Component: <Demo />
</div>

// The actual React component function thingy:
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}

// The result:
<div>Component: <b>Hello world</b></div>

// Normal variable names also work:
const hello = <div>Hello</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(hello);

// Result:
<div>Hello</div>
```
- CSS:
  - You could apply CSS styling by importing the stylesheet into the JSX file, for example, with `import './index.css';` at the top with the rest of the import statements
  - Just be sure to use `className=""` in JSX because `class` is already a keyword in JavaScript
- Children:
  - The components that JSX returns could also reference other components ("child" components)
  - The `App` component is usually the parent of all other components
- Properties:
  - The elements can also recieve properties (kind of like parameters/arguments)
  - Example:
```
// Calling the React component:
<div>Component: <Demo who="Walke" /><div>

// Using the properties in the constructor function:
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```
- State:
  - A component can also have an internal state
  - State is created by calling `React.useState` function, which returns a variable that's the state, and a function to update/change the state
  - Example:
```
// State and function are captured and assigned names here:
function App() {
  const [clicked, updateClicked] = React.useState(false);

// This function essentially switches the state between true and false
  function onClicked() {
    updateClicked(!clicked);
  }

  return <p onClick={onClicked}>clicked: {`${clicked}`}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
- Reactivity:
  - The state and properties of a function determine the reactivity
  - Whenever a component's state or properties change, then the `render` functions for the component and all its dependent components are called

```
```

## Part 1: Routing

[Vite Notes](Vite.md)

### Routing Overview
- Is the thing that replaces the multiple HTML pages
- Will have a "deployReact.sh" script instead of "deployFiles"
  - There will be 2 extra steps
- Good practice: `npm run test`
- **Change** `main.css` to `app.css`, and `index.html` to `login.html` (we'll have a different `index.html`)
- We'll add `app.jsx` and `app.css`
- Other modules can only grab code if it is being exported with `export` keyword
- **Important**: must use `className=""` for HTML element tags in JSX instead of `class=""`
- Watch for `body` selector in app.css, add dot to make it a className `.body`
- The React version of the DOM is called a shadowDOM, is then copied over to the normal DOM
- The program will make a React version of the root, and then render the app into that root
- `npm run dev` then `o` in Vite lets us preview the site
- The `app.jsx` will make a `<BrowserRouter>` element, with lots of stuff in the 
- There's also some `<Routes>` stuff??? I don't remember learning this

### Vite
- Vite essentially combines everything up into just a few files:
  - 1 CSS, 1 JSX, and the OG HTML
- ***This is what Vite does***
- 

## Part 2: Reactivity
- These are the [slides](https://docs.google.com/presentation/d/1nMPGe1x8KWnCamz22QSPMgkpK1_Y8m4zpxZPHqMfLbw/edit?slide=id.g27fdbd84860_0_0#slide=id.g27fdbd84860_0_0)
- Start with a basic, unreactive app
- The way to tell React to update the tree is by using a `React.useState([initial state value]);` thing
  - This returns a state variable and an update function (state changes, but function doesn't)
  - Use the update function to change the state variable
  - Hardcoding the initial state value isn't great, better to pass it in as a parameter (arguments form an object??)
- JSON:
  - Takes objects and turns them into strings
  - See valid types in [slides](https://docs.google.com/presentation/d/1nMPGe1x8KWnCamz22QSPMgkpK1_Y8m4zpxZPHqMfLbw/edit?slide=id.g27fdbd84860_0_0#slide=id.g27fdbd84860_0_0)