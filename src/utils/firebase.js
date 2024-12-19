import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAc8dfXwXtPVpGU3PxPdS78vYA70H2PULA",
  authDomain: "socialmedia-feed-abe1a.firebaseapp.com",
  projectId: "socialmedia-feed-abe1a",
  storageBucket: "socialmedia-feed-abe1a.firebasestorage.app",
  messagingSenderId: "916771647369",
  appId: "1:916771647369:web:41d7afd85386492d49bb58",
  measurementId: "G-914WTFTBQ2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore


export { app, analytics, db };
