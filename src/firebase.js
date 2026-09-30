// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 👈 Yeh line add karni hai

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJJLU_7PGChioCeWeC37T1XUbSbZ_reeQ",
  authDomain: "bharat-seva-connect.firebaseapp.com",
  projectId: "bharat-seva-connect",
  storageBucket: "bharat-seva-connect.firebasestorage.app",
  messagingSenderId: "719648563058",
  appId: "1:719648563058:web:2144979dfbc047115687eb",
  measurementId: "G-DRPRCJQ23X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore Database and Export it
export const db = getFirestore(app);