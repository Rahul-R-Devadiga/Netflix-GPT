// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN2vB-vvFeADj5MdMv_IWMK3_gdTOhhEs",
  authDomain: "netflixgpt-9ea30.firebaseapp.com",
  projectId: "netflixgpt-9ea30",
  storageBucket: "netflixgpt-9ea30.firebasestorage.app",
  messagingSenderId: "513181268200",
  appId: "1:513181268200:web:811ed2e3c0f4f0b0ca315d",
  measurementId: "G-8F0QVLHWQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
