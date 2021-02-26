import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSFvdiCsgf6gGMQkg95vDV-4dZlGmPkoU",
    authDomain: "slack-clone-iamayushdas.firebaseapp.com",
    projectId: "slack-clone-iamayushdas",
    storageBucket: "slack-clone-iamayushdas.appspot.com",
    messagingSenderId: "471989411537",
    appId: "1:471989411537:web:d48592ce9b47cdb6272ff0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;