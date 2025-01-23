import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/database";

const config = {
  //   api keys get from firebase websites
  apiKey: "AIzaSyBYUECBFprGLfCTvWYVAnBmQq2aIG2GkaE",
  authDomain: "chat-webapp-2.firebaseapp.com",
  databaseURL: "https://chat-webapp-2-default-rtdb.firebaseio.com",
  projectId: "chat-webapp-2",
  storageBucket: "chat-webapp-2.firebasestorage.app",
  messagingSenderId: "386373855971",
  appId: "1:386373855971:web:30d150555b0ea4e5f4f3d6"
};

const db = initializeApp(config);
export default db;
