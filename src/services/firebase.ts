import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxJrScJFHM973NrKcH-wAuV8wK5Lsy-7c",
  authDomain: "todo-list-6a85f.firebaseapp.com",
  projectId: "todo-list-6a85f",
  storageBucket: "todo-list-6a85f.appspot.com",
  messagingSenderId: "320694729100",
  appId: "1:320694729100:web:f49059e97ad5141f2abea9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
