import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDh2fn6QMGcDBaP7_DlwrDUngg9Xr1V0mw",
    authDomain: "bankingappbyaj.firebaseapp.com",
    databaseURL: "https://bankingappbyaj-default-rtdb.firebaseio.com",
    projectId: "bankingappbyaj",
    storageBucket: "bankingappbyaj.appspot.com",
    messagingSenderId: "609572537357",
    appId: "1:609572537357:web:655ed1404976ed3fc68144",
    measurementId: "G-E8H7F5QQYX"
  };


  firebase.initializeApp(firebaseConfig)

  const storage=firebase.storage()

  export {storage};
  // export default firebase;