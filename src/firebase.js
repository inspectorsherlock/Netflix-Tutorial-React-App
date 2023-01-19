import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
  authDomain: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
  projectId: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
  storageBucket: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
  messagingSenderId: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
  appId: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
