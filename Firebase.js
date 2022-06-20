// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBbNuRTqjBDLeTsMt3EuJ3sj3lsUehCs",
  authDomain: "loginapp-b5836.firebaseapp.com",
  projectId: "loginapp-b5836",
  storageBucket: "loginapp-b5836.appspot.com",
  messagingSenderId: "779679173992",
  appId: "1:779679173992:web:1a2253beadd38571c39add"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app=firebase.app()
}

const auth = firebase.auth();

export { auth };