import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD5tGKTZSdD7Z5AvXKf1wqNfF1WM60QqBc",
  authDomain: "messengerapp95.firebaseapp.com",
  databaseURL: "https://messengerapp95.firebaseio.com",
  projectId: "messengerapp95",
  storageBucket: "messengerapp95.appspot.com",
  messagingSenderId: "71442133242",
  appId: "1:71442133242:web:67035364236dc6c4d25943",
  measurementId: "G-623XE4DVH1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
