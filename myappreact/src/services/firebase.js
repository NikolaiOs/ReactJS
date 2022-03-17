// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegBj00kg927FD5oEqF3ji3puIIVGOjJo",
  authDomain: "react-02-2022.firebaseapp.com",
  projectId: "react-02-2022",
  storageBucket: "react-02-2022.appspot.com",
  messagingSenderId: "1027089820456",
  appId: "1:1027089820456:web:0218d1d5c06810ee293e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const signUp = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);

// export const db = getDatabase(app);