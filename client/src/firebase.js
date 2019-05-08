import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/functions'

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBNgslY6tTNtZ4S-0JrLIGr9Wo7xsEgrPc",
  authDomain: "mern-cinema.firebaseapp.com",
  databaseURL: "https://mern-cinema.firebaseio.com",
  projectId: "mern-cinema",
  storageBucket: "mern-cinema.appspot.com",
  messagingSenderId: "263280835783"
};

firebase.initializeApp(config);
firebase.auth();
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.functions()

export default firebase 