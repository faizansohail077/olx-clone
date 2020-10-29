import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCQghRHxK7FkvCpHKRbawAt8e5MbCHINDU",
    authDomain: "olx-clone-99d45.firebaseapp.com",
    databaseURL: "https://olx-clone-99d45.firebaseio.com",
    projectId: "olx-clone-99d45",
    storageBucket: "olx-clone-99d45.appspot.com",
    messagingSenderId: "913683413011",
    appId: "1:913683413011:web:8d82d23bb8b317753a67e6",
    measurementId: "G-MRZEEYYMTP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
