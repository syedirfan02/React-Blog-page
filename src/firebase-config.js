import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7rq_5QScQ8P5aW-1bsLp91uiZEm0yNk",
  authDomain: "my-blog-7b258.firebaseapp.com",
  projectId: "my-blog-7b258",
  storageBucket: "my-blog-7b258.appspot.com",
  messagingSenderId: "277825493260",
  appId: "1:277825493260:web:52ba2e8d61a6e49bea5129",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
