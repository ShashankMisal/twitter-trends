// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "***REMOVED***",
    authDomain: "***REMOVED***",
    projectId: "***REMOVED***",
    storageBucket: "***REMOVED***.appspot.com",
    messagingSenderId: "***REMOVED***",
    appId: "1:***REMOVED***:web:c5491edf90a4ffe65ba5ef",
    measurementId: "***REMOVED***"
  };

firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;   