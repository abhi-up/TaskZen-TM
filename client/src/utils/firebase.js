// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "task-manager-abhi.firebaseapp.com",
    projectId: "task-manager-abhi",
    storageBucket: "task-manager-abhi.appspot.com",
    messagingSenderId: "635912672982",
    appId: "1:635912672982:web:bd48330d4b1b74a09d1b77",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
