

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
//import {getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCE9iR4GprNMRPh1jzmGpNw0ZLg3KAK7f8",
  authDomain: "hotel-app-d1662.firebaseapp.com",
  projectId: "hotel-app-d1662",
  storageBucket: "hotel-app-d1662.appspot.com",
  messagingSenderId: "157377502461",
  appId: "1:157377502461:web:f21ff5b53fdfceab157294",
  measurementId: "G-8TGY1XWELJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

//const analytics = getAnalytics(app);
export {auth, db, storage};
