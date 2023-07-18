// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8y2irGPTnlGYyTRdS1b-TzIHqgpR9HjI",
  authDomain: "eshop-60416.firebaseapp.com",
  projectId: "eshop-60416",
  storageBucket: "eshop-60416.appspot.com",
  messagingSenderId: "632943069574",
  appId: "1:632943069574:web:ead17b2344f034769f0407",
  measurementId: "G-W5L8NSYKGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);