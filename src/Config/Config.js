import { initializeApp } from "firebase/app";
import { getFirestone } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfLXYYQQc8rdALjigmHGb6v37ik-fNxTg",
  authDomain: "toys-app-coderhouse.firebaseapp.com",
  projectId: "toys-app-coderhouse",
  storageBucket: "toys-app-coderhouse.appspot.com",
  messagingSenderId: "126658560665",
  appId: "1:126658560665:web:0221b33adb20f990e82e08",
  measurementId: "G-DPHNCBWH73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestone(app);
