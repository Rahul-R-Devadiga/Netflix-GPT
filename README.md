# Netflix-GPT
## About the Project
Netflix-GPT is a clone of Netflix with integrated GPT-powered recommendations. It allows users to search for movies using AI and get personalized suggestions based on their interests. The project is built with React, Redux, Firebase, and integrates Google's Generative AI.
## Live Demo
🚀 Check out the deployed version here: [Netflix-GPT Live](https://netflix-gpt-rahul-r-devadiga.vercel.app/)


## Project Setup & Installation Guide

### Installation

#### 1. Initialize the Project

```sh
npm install react react-dom
```

#### 2. Install Dependencies

##### :package: Development & Build Tool (Parcel)

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

##### :atom_symbol: React & ReactDOM

```sh
npm install react react-dom
```

##### :globe_with_meridians: React Router

```sh
npm i react-router-dom@6.22.0
```

##### :fire: Firebase

```sh
npm install firebase
```

##### :atom_symbol: React Redux

```sh
npm i -D @reduxjs/toolkit
```

```sh
npm i react-redux
```

### Testing Setup :test_tube:

#### 1. Install Testing Dependencies

```sh
npm install --save-dev @testing-library/react @testing-library/dom
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

#### 2. Configure Babel for Testing

Create a **babel.config.js** file and add:

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

#### 3. Configure Parcel for Testing

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

#### 4. Initialize Jest

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

### Tailwind CSS Setup :art:

#### 1. Install Tailwind CSS

```sh
npm install tailwindcss @tailwindcss/postcss
```

#### 2. Configure PostCSS for Tailwind

Create a **.postcssrc** file and add:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

#### 3. Import Tailwind into Your Styles

In **./src/index.css**, add:

```css
@import "tailwindcss";
```

### GoogleGenerativeAI Package :robot:

```npm
npm install -D @google/generative-ai
```

## Features 🎬
✅ **User Authentication**  
   - Sign In / Sign Up with Firebase Authentication  
   - OAuth state management (auto-login, sign-out, profile updates)  
   - Secure authentication flow with Redux store  

✅ **Browsing Movies**  
   - Fetches real-time movie data from TMDB API  
   - Categories: **Now Playing, Popular, Top Rated, Upcoming**  
   - Embedded YouTube trailers with autoplay & mute  
   - Smooth UI using Tailwind CSS  

✅ **NetflixGPT AI Assistant**  
   - GPT-powered movie recommendations  
   - Smart Search Bar for AI-based movie suggestions  
   - Multi-language support for global users  

✅ **Performance & Optimization**  
   - **Custom Hooks** for API calls and state management  
   - **Redux State Management** for efficient data storage  
   - **Debouncing & Throttling** for optimized API requests  
   - **Error Handling & Retry Logic** (Handles 429, 403, 500 errors)  
   - **Block System** (Limits excessive search requests)  

✅ **Additional Enhancements**  
   - TMDB Image CDN integration for optimized image loading  
   - Dynamic redirects for authentication (Login ⇆ Browse)  
   - Environment variables (.env) for secure API key storage  



## Contributing 🤝
Contributions are welcome!  
If you find any bugs or want to improve features, feel free to fork the repository and submit a pull request.  
