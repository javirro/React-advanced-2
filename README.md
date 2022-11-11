# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode. The page will reload when you make changes.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### FETCH-SUSPENSE

Using this package we can use the combination of useFetch and Suspense. It permits avoid having any white screen while info is loading in react pages.

### `npm install fetch-suspense`

Then, inside the code in which we want to use this special fetch, we have to use the following code:

```
import useFetch from 'fetch-suspense'
const response = useFetch(url)
```

And then, we have to put inside **Suspense** tags the component which uses the **useFetch**