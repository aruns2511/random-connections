import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHtDkRT10XgAJ0-NLMrQ1qHF1-16Vp04",
  authDomain: "random-connections.firebaseapp.com",
  projectId: "random-connections",
  storageBucket: "random-connections.appspot.com",
  messagingSenderId: "273409076902",
  appId: "1:273409076902:web:cb81c3244124b325a64e67",
  measurementId: "G-JHCK6JYV9Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,provider };
export default db;