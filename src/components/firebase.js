// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAThUM4H5cjLFX_qDu22GkpKPkXypJOTw0",
    authDomain: "responsivelogin-7609a.firebaseapp.com",
    projectId: "responsivelogin-7609a",
    storageBucket: "responsivelogin-7609a.appspot.com",
    messagingSenderId: "238451225305",
    appId: "1:238451225305:web:9ac2500307a23f622884c8",
    measurementId: "G-565C0E2E4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;