// do not store config file in the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr6i2HhG7s-0xZxbqviLZaV8IcrX_RyS4",
  authDomain: "my-react-applications-81580.firebaseapp.com",
  projectId: "my-react-applications-81580",
  storageBucket: "my-react-applications-81580.firebasestorage.app",
  messagingSenderId: "779771347711",
  appId: "1:779771347711:web:5805318a5a8e05951382ca",
  measurementId: "G-3JQM8PWCMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;