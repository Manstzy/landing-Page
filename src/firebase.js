// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTmsvoDt3PIjZfcvXRVZTIk4Q2Tk8Ky4Y",
  authDomain: "for-learn-building-netflix.firebaseapp.com",
  projectId: "for-learn-building-netflix",
  storageBucket: "for-learn-building-netflix.appspot.com",
  messagingSenderId: "8634663124",
  appId: "1:8634663124:web:3502540ad36dc9c4593b41",
  measurementId: "G-P0PF8B5SNK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)