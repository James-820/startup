# ReactRouter

Notes are from [this article](https://blog.webdevsimplified.com/2022-07/react-router/).

## ReactRouter Basics
- To install the react router, do:
  - `npm i react-router-dom` for the DOM version
  - `npm i react-router-native` for the native version (I'll learn that later lol)
- There are now 3 things to do to use it:
  1. Set up the router
  2. Define routes
  3. Handle navigation
- Configuring the Router:
  - Import the router you need (`BrowserRouter` for web and `NativeRouter` for other), generally in the `index.jsx` page
  - Then wrap the entire application in that router
  - Example:
```
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```
- Defining Routes:
  - This is typically done in the top level `App` component, but can be wherever you want
  - Define a `Route` component for each route, then put all the `Route` components into a `Routes` component
  - When the URL changes, the ReactRouter will find the `Route` whose `path` property matches the URL and then render whatever is in that `Route`'s `element` property
  - React Router will only refres the content inside the `Routes` component, helping performance and user experience
  - Example:
```
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  )
}
```
- Handling Navigation:
  - Normally in HTML we use anchor (`<a>`) tags, but React Router uses its own custom `Link` component (or `NavLink`)
  - The `Link` component is a wrapper for the anchor tags, making sure they work properly within React Router
  - Links use the `to` property instead of `href`
  - In the example below, the `nav` element will not be re-rendered with URL changes
  - Example:
```
export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  )
}
```

## Advanced Route Definitions
- Dynamic Routing:
- Routing Priority:
- Nested Routes:
- Multiple Routes:
- `useRoutes` Hook: