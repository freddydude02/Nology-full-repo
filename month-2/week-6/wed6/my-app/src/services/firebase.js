import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQfjpGzU7ht6cmbVUUth7hxcHfdRnvLPs",
    authDomain: "first-project-12498.firebaseapp.com",
    projectId: "first-project-12498",
    storageBucket: "first-project-12498.appspot.com",
    messagingSenderId: "137456126098",
    appId: "1:137456126098:web:e1c7c8c2dbf7e604557e4b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
