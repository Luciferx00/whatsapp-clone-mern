import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5w4UaRNA_CsbYDJ7EmxOD4_3Fn5yXn8Y",
    authDomain: "whatsapp-clone-x.firebaseapp.com",
    projectId: "whatsapp-clone-x",
    storageBucket: "whatsapp-clone-x.appspot.com",
    messagingSenderId: "641876361517",
    appId: "1:641876361517:web:f2e5a9421a4c306d03d3a4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const auth=firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export  {auth, provider}
export default db