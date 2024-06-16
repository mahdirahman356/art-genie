// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOpdzEdCHttMavYxjbh1fPG2XR6iijKk",
  authDomain: "artgenie-49b1a.firebaseapp.com",
  projectId: "artgenie-49b1a",
  storageBucket: "artgenie-49b1a.appspot.com",
  messagingSenderId: "893197425624",
  appId: "1:893197425624:web:9146de31afd618773d30ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth