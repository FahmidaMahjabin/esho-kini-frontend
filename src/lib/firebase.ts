import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn4LbLT1R-5bWBnRV-q0MY5zE8D56LtZI",
  authDomain: "esho-kini-de5c5.firebaseapp.com",
  projectId: "esho-kini-de5c5",
  storageBucket: "esho-kini-de5c5.appspot.com",
  messagingSenderId: "700895227877",
  appId: "1:700895227877:web:0f07b338b78f5248ed890c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
