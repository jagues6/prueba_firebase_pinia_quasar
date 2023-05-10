// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUIk5ZiQOzcGHPAMxxULBkAwP3oXxof7c",
  authDomain: "adsi2165489.firebaseapp.com",
  databaseURL: "https://adsi2165489-default-rtdb.firebaseio.com",
  projectId: "adsi2165489",
  storageBucket: "adsi2165489.appspot.com",
  messagingSenderId: "1023965578942",
  appId: "1:1023965578942:web:da045bade0054e086440ef",
  measurementId: "G-DH3KGEF5T6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export {auth}
