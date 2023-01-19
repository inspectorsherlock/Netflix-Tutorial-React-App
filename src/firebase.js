import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRGdLSRhLnuuHsB3XhrJVI4fWhzq22O3I",
  authDomain: "netflix-clone-c642e.firebaseapp.com",
  projectId: "netflix-clone-c642e",
  storageBucket: "netflix-clone-c642e.appspot.com",
  messagingSenderId: "679292406577",
  appId: "1:679292406577:web:c377badce15b547d13fe10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;