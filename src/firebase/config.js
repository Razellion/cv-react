// Your web app's Firebase configuration
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBS--FKQOoz9mvcnF0ipHsG0PeOGwXl1UQ',
  authDomain: 'react-cv-6da38.firebaseapp.com',
  databaseURL: 'https://react-cv-6da38.firebaseio.com',
  projectId: 'react-cv-6da38',
  storageBucket: 'react-cv-6da38.appspot.com',
  messagingSenderId: '425732378832',
  appId: '1:425732378832:web:a17b2c6a7672895c4a4ed5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
