# React Single Page Template App

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running Apps Locally](#running-apps-locally)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

## Prerequisites

This project requires NodeJS (version 18.14.x) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
v9.5.0
v18.14.2
```

**Recommended:** Download [`nvm`](https://github.com/nvm-sh/nvm) to make it easier to manage Node versions.

### Setting Up VS Code

You shouldn't have to do anything other than install the ESLint Extension for VSCode.

## Running App Locally

The application can be ran standalone on its own port and dedicated webpack dev server.

1. `npm install`
2. `npm start`

**Recommended:** Use the terminal inside of VS Code to run the npm start commands to make life easier

## Building App

You can build the static react app through the command line running the command below. This will output files to the build directory which can be then deployed as a static web app.

1. `npm run build`

## Project Structure

The application is packaged into it's own minified JS bundle using [Webpack 5](#https://webpack.js.org/concepts/).

`/packages/components/*`: Everything common including common React components, styled components, hooks ..ect.

`index.tsx`: Required. The webpack entry point for the application. This should be where the redux provider wrapper is initalized if you are using redux in your application.

## Troubleshooting

- Any issues with running app locally

  - Run `npm -v && node -v` to verify Node/NPM versions are correct (See [Prerequisites](#prerequisites))
  - `rm -rf node_modules/` -> `npm install`
  - Check node versions -> `rm -rf node_modules/` -> `rm package-lock.json` -> `npm install`
