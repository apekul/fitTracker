import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA-bm8WnUJGztbXXVCv-c9wNfJljQSEys",
  authDomain: "fitapp-a0638.firebaseapp.com",
  projectId: "fitapp-a0638",
  storageBucket: "fitapp-a0638.appspot.com",
  messagingSenderId: "864934353908",
  appId: "1:864934353908:web:46d301f0e1b3277ba4b7a1",
};

// Access Firebase services
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// Collection refference
export const itemsCollectionRef = collection(db, "items");
