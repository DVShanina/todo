// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1JbSg195r2r0BkGlSA9ml0FClbfTxME",
  authDomain: "files-678e1.firebaseapp.com",
  projectId: "files-678e1",
  storageBucket: "files-678e1.appspot.com",
  messagingSenderId: "658868663513",
  appId: "1:658868663513:web:eab6c9a7b7499260edbac8",
  measurementId: "G-XD98VKMPXC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
