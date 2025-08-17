// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔑 replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBkttg8qUXg0hcfpxM6RCqfvGF6i6rKLBE",
  authDomain: "visitors-entry-form-47e46.firebaseapp.com",
  projectId: "visitors-entry-form-47e46",
  storageBucket: "visitors-entry-form-47e46.firebasestorage.app",
  messagingSenderId: "71395710343",
  appId: "1:71395710343:web:972d4a37ebd7333da0af22"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
