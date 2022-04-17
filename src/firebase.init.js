// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCDy-gVIfkwzQiNFnJvdohZeHhUL9-L20",
  authDomain: "my-photoshot.firebaseapp.com",
  projectId: "my-photoshot",
  storageBucket: "my-photoshot.appspot.com",
  messagingSenderId: "153959148797",
  appId: "1:153959148797:web:b791a7114eba8637c72294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default auth;
