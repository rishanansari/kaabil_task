# RUNTIME PORTAL - REACT

## Create React App

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

```bash
npx create-react-app my-app
```

## Output

Running the above command will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:

```bash
cd my-app
```

## Run React App

Inside the newly created project, you can run some built-in commands:

```bash
npm start
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## Test React App

```bash
npm test
```

Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

## Build React App

```bash
npm run build
```

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## ESLint Configuration

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

To set up a configuration file:

```bash
npm init @eslint/config
```

This will ask series of questions:

```
1. How would you like to use ESLint?
    - To check syntax, find problems and enforce code style

2. Whay type of modules does your project use?
    - JavaScript modules (import/export)

3. Which framework does your project use?
    - React

4. Does your project use TypeScript?
    - No

5. Where does your code run?
    - Browser

6. how would you like to define a style for your project?
    - Use a popular style guide

7. Which style guide do you want to follow>
    - Airbnb: https://github.com/airbnb/javascript

8. What format do you want your config file to be in?
    - JSON

9. Would you like to install them now with npm?
    - Yes
```

This will create a `.eslintrc.json` file in the root of the project

Add/Replace env, extends, rules in the `.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "react-app",
    "react-app/jest",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "no-shadow": "off"
  }
}
```

## ESList Scripts

Add 2 more scripts to run the linter. `lint` will check for eslint configuration. `lint-fix` will fix all the fixable errors

```json
"scripts": {
    "lint": "eslint .",
    "lint-fix": "eslint --fix ."
  }
```

To run the lint:

```bash
npm run lint

OR

npm run lint-fix
```

## Prettier Configuration

Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.

```
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

Create a `.prettierrc` file for the configuration and add the following

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

## Pre-Commit Hook with Husky

Husky can be to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.

```bash
npx husky-init && npm install
```

`lint-staged` allows us to run scripts on staged files in git.

```bash
npm i lint-staged --save-dev
```

In the `package.json`, add for following script. This will run when git commit is trigged.

```json
"lint-staged": {
    "**/*.{js,jsx}": [
      "npm run lint",
      "prettier --write"
    ]
  }
```

To set pre-commit hook, run the following command:

```bash
npx husky set .husky/pre-commit "npx lint-staged"
```
