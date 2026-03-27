// Import the functions you need from the SDKs you need
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLsW2dvix5E3jEVCrfzhOI8_XzmjRzHHE",
  authDomain: "notes-c8927.firebaseapp.com",
  projectId: "notes-c8927",
  storageBucket: "notes-c8927.firebasestorage.app",
  messagingSenderId: "219581579497",
  appId: "1:219581579497:web:12a2978b210351c52e7078",
  measurementId: "G-J66EM0F669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
export const auth: Auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
