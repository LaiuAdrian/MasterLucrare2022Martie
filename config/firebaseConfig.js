
import firebase from 'firebase/app'
import "firebase/auth";
require("firebase/firestore");


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDL_ktzMohOLJVgKCU1nK7Zgo6pXcynKc8",
    authDomain: "ums-bacau.firebaseapp.com",
    projectId: "ums-bacau",
    storageBucket: "ums-bacau.appspot.com",
    messagingSenderId: "1085009013776",
    appId: "1:1085009013776:web:f2f4be3e4f7c6576b4ee95",
    measurementId: "G-T1KGS6EFFC"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default  db;

