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
  apiKey: 'AIzaSyAbeWx_z9X7d5KtwsbXvnqGFDIQbGKvjDE',
  authDomain: 'note-taking-1840a.firebaseapp.com',
  projectId: 'note-taking-1840a',
  storageBucket: 'note-taking-1840a.firebasestorage.app',
  messagingSenderId: '1058888846114',
  appId: '1:1058888846114:web:c5edde2d114634e6d8337b',
  measurementId: 'G-SRVVCYM4ZP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
export const auth: Auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
