// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrFP5_PfPQbCegeVQfeBX-KIcMFEmlefg",
  authDomain: "skillforge-clean.firebaseapp.com",
  projectId: "skillforge-clean",
  storageBucket: "skillforge-clean.appspot.com",
  messagingSenderId: "66555906909",
  appId: "1:66555906909:web:b797f68daa21583915b6b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
