// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth"
// import {getFireStore} from "firebase/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyCyyHubFUfqLwZbhh5i8Ki0ras7JxwzLbc",
//   authDomain: "hackathon-ef2fa.firebaseapp.com",
//   projectId: "hackathon-ef2fa",
//   storageBucket: "hackathon-ef2fa.appspot.com",
//   messagingSenderId: "435691555503",
//   appId: "1:435691555503:web:dd739172aa0bcdc07d225a",
//   measurementId: "G-2XC6K9QXHE"
// };


// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const auth=getAuth()
// export const db=getFireStore(app)
// export default app;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;