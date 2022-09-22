import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqKHHDiPsBDDPNLmTsi9P486LgTd5HEAI",
  authDomain: "chat-room-98bef.firebaseapp.com",
  projectId: "chat-room-98bef",
  storageBucket: "chat-room-98bef.appspot.com",
  messagingSenderId: "558132902106",
  appId: "1:558132902106:web:36ef2941a9916f92878de3",
  measurementId: "G-N3X327YV71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
