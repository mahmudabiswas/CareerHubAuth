// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6MPbEDqGri9Al98jmbL1lH-Uaw3bO0YE",
  authDomain: "careerhub-dbf9d.firebaseapp.com",
  projectId: "careerhub-dbf9d",
  storageBucket: "careerhub-dbf9d.appspot.com",
  messagingSenderId: "548766343483",
  appId: "1:548766343483:web:e8db52b641c0018b63971e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
