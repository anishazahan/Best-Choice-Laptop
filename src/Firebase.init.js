// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY1RrLqZcuDLwmvllSTD2YJdx0EXcJ1pU",
  authDomain: "best-choice-laptop.firebaseapp.com",
  projectId: "best-choice-laptop",
  storageBucket: "best-choice-laptop.appspot.com",
  messagingSenderId: "1004632118091",
  appId: "1:1004632118091:web:b4c7bcea438907522bcece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;