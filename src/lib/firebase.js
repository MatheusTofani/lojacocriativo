// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Config do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6-yJT19cli41PT-2Rf2scxjMAfZXZT3U",
  authDomain: "lojacocriativo-1c233.firebaseapp.com",
  projectId: "lojacocriativo-1c233",
  storageBucket: "lojacocriativo-1c233.firebasestorage.app",
  messagingSenderId: "187723561094",
  appId: "1:187723561094:web:bc3b384fbccb0b42f6b907",
  measurementId: "G-51GZQ41GLW"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// ⚠️ Analytics só no cliente
// if (typeof window !== "undefined") {
//   const { getAnalytics } = require("firebase/analytics");
//   const analytics = getAnalytics(app);
// }

export { db };
