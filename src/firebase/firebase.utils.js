import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBtFJ8gIi0wuFaGLXJ84dEwQNOK-1Ktvdo',
  authDomain: 'crwn-db-35761.firebaseapp.com',
  databaseURL: 'https://crwn-db-35761.firebaseio.com',
  projectId: 'crwn-db-35761',
  storageBucket: 'crwn-db-35761.appspot.com',
  messagingSenderId: '1024236264765',
  appId: '1:1024236264765:web:4b838b62d1c70d49143954',
  measurementId: 'G-DYP371QJSZ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
