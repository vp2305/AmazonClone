// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Things to install to use the login stuff is
//npm install firebase
//npm install -g firebase-tools

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZyHw2Q6Uxz7mS-51KjbzOWLWzWo2piSg",
    authDomain: "clone-341d6.firebaseapp.com",
    projectId: "clone-341d6",
    storageBucket: "clone-341d6.appspot.com",
    messagingSenderId: "29647068937",
    appId: "1:29647068937:web:5d2632f43bb6ffbca63dd8",
    measurementId: "G-99ZZQ1YRCR"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig); //This is what sets up the app

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };