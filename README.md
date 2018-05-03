# Currencies App

This is a solution for the [interview test](https://docs.google.com/document/d/13Xwphp3XsacTb0Nse-Ulvpkk7P0x3b6fXpNS-rI63J8/edit?hl=en) by @berdyshev.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Application folders

* The `components` directory contains React components and theirs styles.
* Each module in the `modules` contains action type definition, action creators, reducer (exported as default) and selectors to use in the connected components. The reducers from the modules are combined in the root reducer in `modules/index.js`.
* The `middleware` directory contains side effects for the app used by redux store.
* `index.js` file in the project's root initialize the redux store and renders App wrapped with redux Provider.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
