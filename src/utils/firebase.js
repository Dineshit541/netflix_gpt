// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQPZqXjYJnlErcxt7xwHeySLEuKMqzL3I",
  authDomain: "netflixgpt-764e4.firebaseapp.com",
  projectId: "netflixgpt-764e4",
  storageBucket: "netflixgpt-764e4.appspot.com",
  messagingSenderId: "787687111145",
  appId: "1:787687111145:web:9be935fa85ac9935483378",
  measurementId: "G-CFXBPVX3FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();