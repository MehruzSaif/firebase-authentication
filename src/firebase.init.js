// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm4vPpzpDeGiurRZ7CywZ82wn2cQoVyqs",
  authDomain: "fir-authentication-baf5b.firebaseapp.com",
  projectId: "fir-authentication-baf5b",
  storageBucket: "fir-authentication-baf5b.appspot.com",
  messagingSenderId: "1025201651009",
  appId: "1:1025201651009:web:ef359f07b477568b05b5c0",
  measurementId: "G-8P5H26NT6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;