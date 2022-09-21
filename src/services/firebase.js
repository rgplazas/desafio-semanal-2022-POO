// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
    databaseURL: process.env.REACT_APP_DATABASEURL_FIREBASE,
    projectId: process.env.REACT_APP_PROJECTID_FIREBASE,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET_FIREBASE,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_FIREBASE,
    appId: process.env.REACT_APP_APPID_FIREBASE,
    measurementId: process.env.REACT_APP_MEASUREMENTID_FIREBASE
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);