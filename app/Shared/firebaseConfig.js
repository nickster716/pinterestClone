// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOHx-97mCrN5xrH6wrhti9I1TdVCth50",
  authDomain: "pinterest-clone-fc3c4.firebaseapp.com",
  projectId: "pinterest-clone-fc3c4",
  storageBucket: "pinterest-clone-fc3c4.firebasestorage.app",
  messagingSenderId: "684719630583",
  appId: "1:684719630583:web:689f81ed2dc7c662938bf2",
  measurementId: "G-WN15Y747C9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
