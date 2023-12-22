// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQAekY54DiLk72c3a1_aOdtBQPNpMs30",
  authDomain: "clone-92db0.firebaseapp.com",
  projectId: "clone-92db0",
  storageBucket: "clone-92db0.appspot.com",
  messagingSenderId: "73531576398",
  appId: "1:73531576398:web:f5ad6bd968102f0b4a331f",
  measurementId: "G-N0EKWRVET9"
};


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);