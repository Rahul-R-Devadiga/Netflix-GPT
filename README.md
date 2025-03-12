# Netflix-GPT

- Clone of Netflix but GPT integrated on it

# Project Setup & Installation Guide  
## Installation
### 1. Initialize the Project
```sh
npm install react react-dom
```
### 2. Install Dependencies
#### :package: Development & Build Tool (Parcel)
```sh
npm install -D parcel
```
Updating **package.json** under `scripts`:
```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```
> **Note:** If you encounter an error, try clearing or deleting the `.parcel-cache` folder.

#### :atom_symbol: React & ReactDOM
```sh
npm install react react-dom
```
#### :globe_with_meridians: React Router
```sh
npm i react-router-dom@6.22.0
```
#### :fire: Firebase
```sh
npm install firebase
```
#### :atom_symbol: React Redux
```sh
npm i -D @reduxjs/toolkit
```
```sh
npm i react-redux
```
## Testing Setup :test_tube:
### 1. Install Testing Dependencies
```sh
npm install --save-dev @testing-library/react @testing-library/dom
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
### 2. Configure Babel for Testing
Create a **babel.config.js** file and add:
```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
```
### 3. Configure Parcel for Testing
Create a **.parcelrc** file and add:
```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
### 4. Initialize Jest
```sh
npx jest --init
```
- Like to use TypeScript? No
- Choose test environment: jsdom (browser-like)
- Want code coverage? Yes
- Provider for code coverage: Babel
- Clear mock calls? Yes
> **Note: If Jest version is 28 or higher, install JSDOM separately:**
```sh
npm install --save-dev jest-environment-jsdom
```
## Tailwind CSS Setup :art:
### 1. Install Tailwind CSS
```sh
npm install tailwindcss @tailwindcss/postcss
```
### 2. Configure PostCSS for Tailwind
Create a **.postcssrc** file and add:
```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```
### 3. Import Tailwind into Your Styles
In **./src/index.css**, add:
```css
@import "tailwindcss";
```
## OpenAI Node SDK
```npm
npm install -D openai
```
### 1. Configure OpenAI
```js
import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
```

# Features
- login/Sign Up
    - Sign In / Sign Up Form
    - redirect to Browse Page
- Browse (after Authentication)
    - Header
    - Main Movie
        - Tailer in background
        - Title & Description
        - Movie Suggestions
            - MovieList * N
- NetflixGPT
    - Search Bar
    - Movies Suggestions
