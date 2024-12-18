// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc8dfXwXtPVpGU3PxPdS78vYA70H2PULA",
  authDomain: "socialmedia-feed-abe1a.firebaseapp.com",
  projectId: "socialmedia-feed-abe1a",
  storageBucket: "socialmedia-feed-abe1a.firebasestorage.app",
  messagingSenderId: "916771647369",
  appId: "1:916771647369:web:41d7afd85386492d49bb58",
  measurementId: "G-914WTFTBQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
