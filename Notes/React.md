# React

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
- 

## Part 1: Routing

## Part 2: Reactivity
