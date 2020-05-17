#### Generate default `package.json` file
    npm init -y

#### Generate default `tsconfig.json` file
    tsc --init

#### Install Nodemon and Concurrently
    npm install nodemon concurrently

#### Specify root and build directories in `tsconfig.json`
    "outDir": "./build",
    "rootDir": "./src",

#### Set up scripts to 1) build, 2) run, and 3) concurrently run these two commands. In `package.json`:
    "scripts": {
        "start:build": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*"
    },

#### Install the type definition file for Node. This is required if we're using TypeScript and also want to use anything from the Node standard library.
    npm install #types/node