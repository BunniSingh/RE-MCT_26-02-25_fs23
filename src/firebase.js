import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlDxkt4gadvc0Gn8_Yfyg28DuJ6mM9r10",
  authDomain: "shopify-ffb7d.firebaseapp.com",
  projectId: "shopify-ffb7d",
  storageBucket: "shopify-ffb7d.firebasestorage.app",
  messagingSenderId: "773913567914",
  appId: "1:773913567914:web:6111f438b687800ddd26d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
