// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCnYpyGyROK2ZWuCs3Y2J30KCS8_QWWkbg",
  authDomain: "new-shopping-cart-8a565.firebaseapp.com",
  projectId: "new-shopping-cart-8a565",
  storageBucket: "new-shopping-cart-8a565.firebasestorage.app",
  messagingSenderId: "873657595238",
  appId: "1:873657595238:web:a668294d6dd6fe03bec4a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
