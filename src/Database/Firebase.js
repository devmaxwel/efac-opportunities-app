import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: "AIzaSyBwkJKbGQUFhsu22NJIHtGiZ-sk3cps1qo",
  authDomain: "saruk-el.firebaseapp.com",
  projectId: "saruk-el",
  storageBucket: "saruk-el.appspot.com",
  messagingSenderId: "892256300057",
  appId: "1:892256300057:web:cf4f239042e19c761fce88",
  measurementId: "G-Y95KRY2P5H"
  };

  const Database = firebase.initializeApp(firebaseConfig);

  export default Database;
  
