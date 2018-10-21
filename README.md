# angularjs-webpack-routes

[![Build Status](https://travis-ci.com/logashoff/angularjs-webpack-routes.svg?branch=master)](https://travis-ci.com/logashoff/angularjs-webpack-routes) [![Dependency Status](https://david-dm.org/logashoff/angularjs-webpack-routes/status.svg)](https://david-dm.org/logashoff/angularjs-webpack-routes#info=dependencies) [![devDependency Status](https://david-dm.org/logashoff/angularjs-webpack-routes/dev-status.svg)](https://david-dm.org/logashoff/angularjs-webpack-routes#info=devDependencies)

A complete, yet simple, starter for AngularJS using Webpack and UI Router.

This workflow serves as a starting point for building AngularJS (1.x) applications using Webpack 4.x. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and Yarn

### Quick start

> Clone/Download the repo then edit entry component `app.component.js` inside [`/src/app/app.component.js`](/src/app/app.component.js)

> Components for each route are located in [`/src/app/components`](/src/app/components)

```bash
# clone our repo  
$ git clone https://github.com/logashoff/angularjs-webpack-routes.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with yarn
$ yarn install

# start the server
$ yarn server
```

Go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `yarn`
* Ensure you're running Node (`8.x`+) and Yarn (`1.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `yarn install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
yarn server
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `yarn build`
* build files and watch: `yarn server`

## Testing

#### 1. Unit Tests

* single run: `yarn test`
* live mode (TDD style): `yarn test-watch`

# License

[MIT](/LICENSE)
