// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFj0SJGbleeVWkTFMS7itU7FEAkdrpcB0",
  authDomain: "track-de363.firebaseapp.com",
  projectId: "track-de363",
  storageBucket: "track-de363.appspot.com",
  messagingSenderId: "639000457843",
  appId: "1:639000457843:web:ac6e0a719495adb58cb006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;