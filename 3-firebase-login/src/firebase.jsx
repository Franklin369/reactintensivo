import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhINnyjOly_IADrQvRWDep7IniA8qabaU",
  authDomain: "fir-login-6fbff.firebaseapp.com",
  projectId: "fir-login-6fbff",
  storageBucket: "fir-login-6fbff.appspot.com",
  messagingSenderId: "1075628018225",
  appId: "1:1075628018225:web:92c5d111c6741c72656310"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };