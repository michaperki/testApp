import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

firebase.initializeApp(firebaseConfig);
