View the demo of this app on: [Movies Star](https://movie-stars.herokuapp.com/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the app

First of all, you need to install all the used packages. In the project directory, you can run:

### `yarn install`

If you do not have yarn installed gloabll, then read [How to install yarn](https://yarnpkg.com/lang/en/docs/install/).

### Run the app in development mode

To run the app in development mode, in the project directory you can run

### `yarn run startdev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Run the app in production mode

In order to run the app in production mode, you need to create a new `.env.prod` files using production values for the environment variables. Then you need to run

### `yarn run setup prod`

to setup those values. Alternatively, you can use the `.env.dev` file running `yarn run setup dev` and you will run the app with development variables.<br><br>

Then run

### `npm run build`

Finally run

### `yarn run start`

## Run the test

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
