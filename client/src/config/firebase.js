import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBGJd-YgVc57tx3YEArdl2FT1X5fxmBsms",
  authDomain: "dotchat-d605f.firebaseapp.com",
  projectId: "dotchat-d605f",
  storageBucket: "dotchat-d605f.appspot.com",
  messagingSenderId: "928702746464",
  appId: "1:928702746464:web:847fd03979ef188b585805",
  measurementId: "G-DXWKJDREE3"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
