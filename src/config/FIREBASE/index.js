import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyB6yEQJ1bOENatO4Ld223gXDOhhtDeuGkA",
    authDomain: "gincuu-51582.firebaseapp.com",
    projectId: "gincuu-51582",
    storageBucket: "gincuu-51582.appspot.com",
    messagingSenderId: "752323289120",
    appId: "1:752323289120:web:e89f090ff26f9ddf545c45"
});

const FIREBASE = firebase;

export default FIREBASE;