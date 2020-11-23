// Your web app's Firebase configuration
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCydUh0FWAzXiVrmw7NBBSwer6aXRdtkkE',
  authDomain: 'my-cv-25c23.firebaseapp.com',
  databaseURL: 'https://my-cv-25c23.firebaseio.com',
  projectId: 'my-cv-25c23',
  storageBucket: 'my-cv-25c23.appspot.com',
  messagingSenderId: '549212108672',
  appId: '1:549212108672:web:61f4348d23955e06d83365',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
