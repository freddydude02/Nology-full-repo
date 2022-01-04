import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKSwECtwkWFjIUT3w8NbuCI1oA-80HbC0",
    authDomain: "jan-lessons.firebaseapp.com",
    projectId: "jan-lessons",
    storageBucket: "jan-lessons.appspot.com",
    messagingSenderId: "1039612065956",
    appId: "1:1039612065956:web:4d23793505e8881d234e31",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
