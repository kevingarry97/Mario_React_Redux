import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaPndprYLJI0n5fqsGM8gTAWTcWK7GXPM",
  authDomain: "project-mario-810c6.firebaseapp.com",
  databaseURL: "https://project-mario-810c6.firebaseio.com",
  projectId: "project-mario-810c6",
  storageBucket: "project-mario-810c6.appspot.com",
  messagingSenderId: "967986620863",
  appId: "1:967986620863:web:45b71806d7a4b66a79d90a",
  measurementId: "G-Y8E76TRJ2K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
