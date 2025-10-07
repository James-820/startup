# Vite

For deeper reading, see [this site](https://vite.dev/guide/).

- For us to use this stuff:
  - JSX
  - minification
  - polyfills
  - bundling
- We need a Command Line Interface (CLI) and a toolchain
- For this, use Vite cuz it's got a lot of good features
- Running the following commands creates a new web app in the `demoVite` directory
```
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```
- These are the new files:
  - `./` directory:
    - `index.html` - primary page of the application and starting point to load other JSX components
    - `package.json` - lists all the npm package dependencies (what it needs to run), and also definitions for script commands
    - `package-lock.json` - **don't edit**, these are the version constraints for the included packages
    - `vite.config.js` - Configuration setting for Vite that will set up React for development
  - `./public`:
    - `vite.svg` - Vite logo
  - `./src` (source):
    - `main.jsx` - Starting point, simply loads the App component from "App.jsx" (this is what makes the "shadow DOM" from the `#root` HTML element)
    - `index.css` - CSS for whole application
    - `App.jsx` - JSX for the top level 'application' component (in the demo case, include counter and stuff)
    - `App.css` - CSS for the top-level application component
  - `./src/assets`:
    - `react.svg` - React logo
- You should probably use `.jsx` file extension for JSX files (as opposed to `.js`)
- When you run `npm run dev`, it makes a temporary directory to test the code, is for development
- When you run `npm run build`, it runs the `vite build` command from the `package.json` file and invokes the `Vite` CLI, whatever that means
  - `vite build` preps everything into a deployment-ready version contained in a distribution subdirectory called `dist`
- To deploy a production release (build):
  - We'll be using the `deployReact.sh` file from the Simon React
  - That script makes a production build by calling `npm run build` and then copying the resulting `dist` to the server