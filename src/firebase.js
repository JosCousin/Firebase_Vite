// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-4cTzo0-MWOkZ5zLFEMf3sH3A_ejuOhI",
  authDomain: "react-2info-jc.firebaseapp.com",
  projectId: "react-2info-jc",
  storageBucket: "react-2info-jc.appspot.com",
  messagingSenderId: "185042801019",
  appId: "1:185042801019:web:74b5c8e44b69ba77536dde",
  measurementId: "G-LD4P541ZE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)