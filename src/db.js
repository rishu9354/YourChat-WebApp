import firebase from "firebase/app";
import "firebase/database";

const config = {
    //   api keys get from firebase websites
    apiKey: "AIzaSyBTJpDtDHAsToZ6JxlWrEk7h02MgYh5pvo",

    authDomain: "chat-webapp-5f636.firebaseapp.com",

    projectId: "chat-webapp-5f636",

    storageBucket: "chat-webapp-5f636.firebasestorage.app",

    messagingSenderId: "1064979605679",

    appId: "1:1064979605679:web:45511cb2729bea704ecc5a"

};

const db = firebase.initializeApp(config);
export default db;