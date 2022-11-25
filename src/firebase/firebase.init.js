import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBXJvu1kG6CJcYAvAE4JR3OgZiyAGgNams",
  authDomain: "first-firebase-app-c2297.firebaseapp.com",
  projectId: "first-firebase-app-c2297",
  storageBucket: "first-firebase-app-c2297.appspot.com",
  messagingSenderId: "745394308940",
  appId: "1:745394308940:web:092660ca52481fb9b631e9",
  measurementId: "G-CFS66X49E0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export app;