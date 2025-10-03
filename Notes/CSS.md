# CSS

## Overview
- Helps your HTML be cute.
- 3 ways of adding CSS:
  1. Apply the attributes directly in the element tags
  2. Include all your CSS statements and rules in a `<style>` element at the top
  3. Include a `<link>` element with `rel=stylesheet` and `href` set to your stylesheet
- These will be applied in the order they are seen by the browser: the most recent will be applied on top of other styles
- Selectors (these select which elements get which styles):
  - Element name: like `body` or `header`, just picks all of that element
  - Descendant combinator: `section h2`, space delimited list where each item is a descendant of the one before (this example gets all the `h2` elements that are descendants, or within, `section` elements)
  - **To be Continued**

## Common Attributes & Values Reference List
- `display: none` hides the element (good for media queries)
- `display: flex` makes the element a flex container, the children can have the `flex` attribute
- **To be Continued**

## Animations
- **Complete this soon**

## Flex

- This is the [website](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) that I got my notes from
- IDK about prefixing stuff yet
- `flex-direction` is set to column if we want the children to be arranged top and bottom, and set to row if side by side is wanted
- It's helpful to make the parent `min-height` (or `min-width`) set to `100vh` to allow the body to fill the entire visible screen
  - `vw` refers to viewport width

Parent/Container info:

- `display` refers to wether or not a container 
- `flex-direction` is the direction, horizontal or vertical, that the container flexes, and `row` is default
- `flex-flow` is shorthand for both the two upper options, the default of which is `row nowrap`
- `justify-content` defines alignment along the main axis, safest values are flex-start, flex-end, and center. `safe` ensures that
the spacing is such that the element won't render off-screen and can't be scrolled
- `align-items` is kind of like the justify-content version for the cross axis, `stretch` is the default and still respects min and max dimensions.
`safe` and `unsafe` keywords can also be used.
- `align-content` only works for multi-line flexible containers that have wrap enabled. Otherwise it's pretty much ignored
- `gap` determines the space between flex items (not for the outer edges) and is kind of like a minimum gutter

Example code:

```
.container {
   display: flex;
   flex-direction: row | row-reverse | column | column-reverse;
   flex-wrap: nowrap | wrap | wrap-reverse;
   flex-flow: row nowrap;
   justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | safe | unsafe;
   align-items: stretch | flex-start | flex-end | center | (first/last-)baseline;
   align-content: flex-start | flex-end | space-between | space-around | stretch | center;
   ...
   gap: 10px;
   gap: 10px 20px; /* row-gap column-gap */
   row-gap: 10px;
   column-gap: 20px;
}
```

Child/Item info:

- `order` is the order in which the item is placed, default is 0, and items with same order default to source order
- `flex-grow` allows the item to grow if necessary, accepts unitless value that acts as a proportion,  default is 0 (negaitve are invalid)
- `flex-shrink` is like flex-grow but for shrinking
- `flex-basis` defines the default size of a flex item, can be length (20%, 5em, etc.) or keyword, `auto` keyword means width or height property, `content` sizes based on the content it contains but isn't well supported yet
- `flex` is shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`, and the default is `0 1 auto`, and is recommended above setting the properties individually
- `align-self` allows the `align-items` property to be overriden for individual flex items 

Example Code:

```
.item {
   order: 4;
   flex-grow: 2;
   flex-shrink: 3;
   flex-basis: auto;
   flex: 0 1 auto;
   align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

## Media Queries

- Media queries detect certain conditions of the webpage, for example, if the page is in portait orientation
- The CSS inside the media query gets applied when the condition is true

Possible conditions:

- `orientation: portrait | landscape` detects the orientation of the viewport, applies if orientation is the one listed
- `max-height: "N"px` detects the height of the viewport, applies if the viewport is less than or equal to "N" pixels

Example code:

```
@media (condition: condition-param) {
   CSS goes here
}
```
```
@media (orientation: portait) {
   main {
      flex-direction: column;
   }
}

@media (max-height: 700px) {
   header {
      display: none;
   }
   footer {
      display: none;
   }
}
```

## Frameworks

### Overview
- CSS Frameworks are essentially pre-written code that helps you speed up your styling
- Benefits: helps your website look good, speeds up the process of styling
- Drawbacks: your website will look like everyone else's

### Bootstrap
- Bootstrap is the "reigning champ" of CSS frameworks, the downside is the page looking like everyone else's
- [Read this](https://getbootstrap.com/docs/5.2/getting-started/introduction/) later
- To put it in your application, just reference the Bootstrap CSS files from their CDN (Content Delivery Network):
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
  </head>
  <body>
    ...
  </body>
</html>
```
- You can also add their JavaScript to your application at **the end** of the body section, just before the `</body>` tag:
```
<body>
  ...

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
```
- ***For future reference:*** you can install bootstrap with the NPM to run it off your machine:
```
npm install bootstrap@5.3.3
```
- Make sure the links above are to the most recent version of Bootstrap to use in your application
- HTML elements are styled with Bootstrap by using the proper class
- To change the default color of the document, place something like this into the custom CSS sheet:
```
:root {
  --bs-primary: #28a745; /* Change to green */
  --bs-primary-rgb: 40, 167, 69; /* RGB values for the same color */
}
```
### Bootstrap Reference List
- Accordion Element:
  - Add a `<div>` with `class="accordion"`, this is the main container wrapper
  - For each accordion item:
    - Within that parent `<div>`, add another `<div>` element with `class="accordion-item"` and an `id` for the accordion-collapse elements to reference, these are the individual section containers
    - Within the `accordion-item`, add an `<h2>` element with `class="accordion-header"`, and with a `<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#[ID of the accordion-collapse from below]>"` inside of that with the title of the section included
    - Outside of and below that `<h2>` element, make another `<div>` with `class="accordion-collapse collapse"` or `"accordion-collapse collapse show"` if it's the first one and you want it to show by default, and with an `id` for the button to reference
    - Within that `accordion-collapse` element, put one more `<div>` with `class="accordion-body"` for the actual content of the accordion section
  - Here are each of the important Bootstrap classes:
    - `accordion`: The main container wrapper, prolly what gets returned as a component in React
    - `accordion-item`: Accordion section container
    - `accordion-header`: Header wrapper
    - `accordion-button`: Clickable button that toggles the collapse
    - `accordion-collapse`: Wrapper for collapsible content
    - `accordion-body`: Actual content area inside each body
    - `collapse`: Bootstrap's collapse utility class (IDK what that means but oh well)
    - `show`: shows the panel by default, optional
    - `collapsed`: indicates a collapsed state for buttons
  - Here's an example generated by Claude AI:
```
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> Content for the second accordion panel goes here.
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> Content for the third accordion panel goes here.
      </div>
    </div>
  </div>
</div>
```
- Navigation Header:
  - Add `class="sticky-top"` to your `header` element to make it stay on the top of the page when you scroll down
  - Make a `<nav class="navbar navbar-expand-lg bg-light">`
    - `navbar` is the base Bootstrap navbar class, and is necessary for all navigation bars in Bootstrap
    - `navbar-expand-lg` means that the navbar will expand horizontally on large screens (bigger than 992px), and will be collapsed on screens smaller than that
    - Other options for that second phrase are `navbar-expand[-sm, -md, -xl]` (brackets means that it's optional, and without any of those endings it will just always be expanded)
    - `bg-light` refers to a light-colored background, but other options include `bg-dark`(dark grey or black), `bg-primary` (blue or whatever primary color in your theme), `bg-white`, and others
  - Add a `<div class="container-fluid">`
  - Within that `div`, add the brand link as an `h1` inside of an `<a class="navbar-brand" href="[your domain]">`
  - Then, outside the `a`, add a `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">` (the ID will target the `div` you add below)
  - Inside that button, add `<span class="navbar-toggler-icon"></span>`
  - After the button, add `<div class="collapse navbar-collapse" id="navbarSupportedContent">`
  - Within that `div`, add `<ul class="navbar-nav me-auto mb-2 mb-lg-0">` with a `<li class="nav-item">` and an `<a class="nav-link" href="#">` nested inside of it
    - `navbar-nav` styles the list as navigation items within a navbar
    - `me-auto` means "margin-end auto" and basically will left-align your nav items and allow other items to appear on the right.
    - `mb-2` adds margin bottom spacing of size 2 (bootstrap spacing goes from 0-5, 0 is 0, 1 is 0.25rem, and then it doubles until 5)
    - `mb-lg-0` means that the bottom margin will be 0 on large screens (992px), is used because the margin is useful on mobile screens, but unnecessary on larger ones
  - In each of the `a` elements, you can add `#[element id]` for the `href` value, and it will take you to that element on the page (or do other React routing, idk about that yet)
  - **If** you want a search bar, after the `ul` element, add `<form class="d-flex" role="search">` with `<input class="form-control me-2" type="search" placeholder="Search"><button class="btn btn-outline-success" type="submit">Search</button>` inside
```
<header class="sticky-top">
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <h1 style="color: lightgreen; font-weight: bold; border-radius: 0.25em;">Habit.ly</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="habits.html">My Habits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="groups.html">My Groups</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```
- Sticky Footer:
  - Add `class="sticky-bottom"` to your `footer` element
  - Add a `<nav class="navbar">` inside that
  - Add `<div class="container-fluid">` inside that
  - Add a `<p class="text-muted">` inside that with the text you want shown in the footer
- Card:
  - Make a `<div class="card">` (optional: add a `style="width:[width]px"` to the element)
  - To put the image on top, make an `<img class="card-img-top" src="[source URL]" />`
    - I'm willing to bet that there's other configurations, like `"card-img-bottom"` or something
  - After the image (still within the parent div), add a `<div class="card-body">`
  - Within that, you can add `<h5 class="card-title">` and `<p class="card-text">` as well, or more stuff if you want

### Tailwind
