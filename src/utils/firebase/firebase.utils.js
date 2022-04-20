// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getFirestore, 
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore' 


const firebaseConfig = {
  apiKey: "AIzaSyAKl77t6VwJ4eVOPzxuSF-8ji3-3ZKOYRc",
  authDomain: "ecommerce-ropa.firebaseapp.com",
  projectId: "ecommerce-ropa",
  storageBucket: "ecommerce-ropa.appspot.com",
  messagingSenderId: "220406389711",
  appId: "1:220406389711:web:37631bf5d447800d45d0ba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc( db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch(error) {
        console.log('error creando al usuario', error.message);
      }
    }

    return userDocRef
}

