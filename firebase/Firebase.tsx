// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX_1wmBXgbWi0P9p_eyWwH_xtO5PsRLms",
    authDomain: "careerdekho-ai.firebaseapp.com",
    projectId: "careerdekho-ai",
    storageBucket: "careerdekho-ai.appspot.com",
    messagingSenderId: "988311283290",
    appId: "1:988311283290:web:250c82acd043e2d8b5da63",
    measurementId: "G-1XBK6LVFPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}