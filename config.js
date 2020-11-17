import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDPNk7Ds8w8di3ZmGvql8ayBnavq569jT8",
    authDomain: "wily-app-7b91d.firebaseapp.com",
    databaseURL: "https://wily-app-7b91d.firebaseio.com",
    projectId: "wily-app-7b91d",
    storageBucket: "wily-app-7b91d.appspot.com",
    messagingSenderId: "928554268450",
    appId: "1:928554268450:web:fd305feeb2d920aa4cd77b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();