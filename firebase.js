import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC3FCdWg5NqPtz1GP-ECssC1wu6F2_purE",
    authDomain: "netflix-s-f3e13.firebaseapp.com",
    projectId: "netflix-s-f3e13",
    storageBucket: "netflix-s-f3e13.appspot.com",
    messagingSenderId: "518181404329",
    appId: "1:518181404329:web:e0af685e6e6306303fb3b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export default app;