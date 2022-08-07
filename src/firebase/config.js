// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSxkOgHIv2iZaXVH3p-3hyRDQstDR69U",
  authDomain: "amarettoclothing-eb5dc.firebaseapp.com",
  projectId: "amarettoclothing-eb5dc",
  storageBucket: "amarettoclothing-eb5dc.appspot.com",
  messagingSenderId: "316560354226",
  appId: "1:316560354226:web:14cffd194b6ffdf13b92ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)