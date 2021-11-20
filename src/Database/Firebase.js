import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyAWoahQKQiOIk5CJE-zQMXw0H5iQNNLFa8",
    authDomain: "efac-kenya.firebaseapp.com",
    projectId: "efac-kenya",
    storageBucket: "efac-kenya.appspot.com",
    messagingSenderId: "438805241630",
    appId: "1:438805241630:web:6565be1a6f49309c24b30f",
    measurementId: "G-Z8MPQY52C1"
  };

  const Database = firebase.initializeApp(firebaseConfig);

  export default Database;
  
  // Initialize Firebase
