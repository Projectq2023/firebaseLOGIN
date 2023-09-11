// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUNvLmXpZwQDNLmJrsigdEqGfuTv9D1IQ",
  authDomain: "hiring-website-2a7e3.firebaseapp.com",
  projectId: "hiring-website-2a7e3",
  storageBucket: "hiring-website-2a7e3.appspot.com",
  messagingSenderId: "144686661034",
  appId: "1:144686661034:web:62c7d2baecd690f460bfd3",
  measurementId: "G-KQEDT4LLT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);