import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzeJnFLFsOQCFokyRfEHHqcAOZxG7wpZU",
    authDomain: "tutorial-889bb.firebaseapp.com",
    projectId: "tutorial-889bb",
    storageBucket: "tutorial-889bb.appspot.com",
    messagingSenderId: "702020063860",
    appId: "1:702020063860:web:2809e25f28062a3d96f721",
    measurementId: "G-H6Z89TSY9C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const User=db.collection("Users");
export default User;


