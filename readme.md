- [Introduction](#introduction)
- [Development start](#development-start)
- [Commands list](#commands-list)
- [TODO](#todo)

## Introduction
Boilerplate to make NW.js and Webpack work in synergy.

## Development start

Install the required dependencies by typing `npm install` or `yarn`.

Start the test server by running `npm start` or `yarn start`.

To make the code production-ready, run npm `run build` or `yarn build`. Then build the app in the flavor you need (see list below).

## Commands list

- `start`: Starts development mode and opens an app window connected to http://localhost:4000
- `nw`: Opens a NW.js window pointed at `./docs`
- `build`: Builds the static assets to be used by NW.js
- `build:icons`: Creates an iconset for all systems from a single image
- `build:nw:mac`: Builds a mac executable
- `build:nw:linux`: Builds a linux executable
- `build:nw:win`: Builds a windows executable
- `build:nw:all`: Builds executables for all systems

## TODO
* Document `nwjc` usage
* Improve NW.js version and dependency selection