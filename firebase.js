import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAts7xt6SMHUVzldMNZUe1eDvtPkG_Ltd4",
  authDomain: "adam-c0310.firebaseapp.com",
  projectId: "adam-c0310",
  storageBucket: "adam-c0310.appspot.com",
  messagingSenderId: "133920108372",
  appId: "1:133920108372:web:db5912911f0e940c3ba2c1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;