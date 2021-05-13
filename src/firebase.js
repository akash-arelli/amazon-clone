import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Y2I6jhh_FhDXVredafAYO-SotA3vVTo",
  authDomain: "clone-4bc31.firebaseapp.com",
  projectId: "clone-4bc31",
  storageBucket: "clone-4bc31.appspot.com",
  messagingSenderId: "889066900798",
  appId: "1:889066900798:web:7793228df1d0be84c2f06f",
  measurementId: "G-57Z8G2KVV5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
