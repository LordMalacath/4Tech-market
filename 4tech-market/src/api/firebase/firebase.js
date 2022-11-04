import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAQEdh5y32S6bTlrrvGeRj6HvdJQAbTVQs",
    authDomain: "thech-market.firebaseapp.com",
    projectId: "thech-market",
    storageBucket: "thech-market.appspot.com",
    messagingSenderId: "835186389096",
    appId: "1:835186389096:web:0823a3f49d903fcc048bdd"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
