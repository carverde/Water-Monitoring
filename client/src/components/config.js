// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAomXZaUj1BdKiWj7Dy495bIdCtp9tkzSk",
  authDomain: "iotfinalproject-e2f0e.firebaseapp.com",
  databaseURL: "https://iotfinalproject-e2f0e-default-rtdb.firebaseio.com",
  projectId: "iotfinalproject-e2f0e",
  storageBucket: "iotfinalproject-e2f0e.appspot.com",
  messagingSenderId: "283107368923",
  appId: "1:283107368923:web:2cda9ed70a0a76bb0111fe"
};

firebase.initializeApp(firebaseConfig);

export default firebase;


