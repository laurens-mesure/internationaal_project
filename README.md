# Internationaal Project

This is the repository for the frontend web site for our international project.

## Get started

### Cors anywhere

To run this project you need to enable CORS-ANYWHERE. This does require [Node.js](https://nodejs.org/en/download/)
If our server is running you don't need to enable cors-anywhere.

```bash
    git submodule add https://github.com/Rob--W/cors-anywhere.git
    cd cors-anywhere
    yarn install (OR npm install)
    node server.js
```

Let this run in the background.

### ⚛️ React

To get the frontend running all you need to do is run yarn 👍 (or npm 😳) to install dependencies and run the dev environment

```bash
    yarn install
    yarn start
```

✨ Or if you don't care about developing you can run the website from public directory

```bash
yarn build
cd build
chrome ./build/index.html
```
