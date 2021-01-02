import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAa5HGEjxpywP0iJbjPv2Vo7tXVyQq8gUY",
  autoDomain: "clone-3a2b6.firebaseapp.com",
  databaseURL: "http://clone-3a2b6.firebaseio.com",
  projectid: "clone-3a2b6",
  storageBucket: "clone-3a2b6.appspot.com",
  messagingSenderid: "158892815873",
  appId: "1:793318211417:web:fed488f3555dce1f1a1648",
  measurementId: "G-E0P5B1JLRQ",
});

const auth = firebase.auth();

export { auth };

// THIS IS HOW WE CONNECT FIREBASE TO OUR REACT FRONTEND
// npm i firebase

//const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
