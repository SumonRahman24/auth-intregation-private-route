import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5SY00dF3ovfWiM4nfxRcgQq99OpUQzQE",
  authDomain: "auth-intregation-private-route.firebaseapp.com",
  projectId: "auth-intregation-private-route",
  storageBucket: "auth-intregation-private-route.appspot.com",
  messagingSenderId: "287848076008",
  appId: "1:287848076008:web:77269d1ea2b53b0f91af5d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
