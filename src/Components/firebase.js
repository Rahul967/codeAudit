
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyyHubFUfqLwZbhh5i8Ki0ras7JxwzLbc",
  authDomain: "hackathon-ef2fa.firebaseapp.com",
  projectId: "hackathon-ef2fa",
  storageBucket: "hackathon-ef2fa.appspot.com",
  messagingSenderId: "435691555503",
  appId: "1:435691555503:web:dd739172aa0bcdc07d225a",
  measurementId: "G-2XC6K9QXHE"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);
export default app;