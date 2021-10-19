import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

// Initialize Firebase
const initializeAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuth;