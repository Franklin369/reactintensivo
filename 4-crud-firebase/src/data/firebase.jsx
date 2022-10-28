
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCyBV9fGgFqVfe-_LUATzJMCFvMlSffSKo",
  authDomain: "fir-crud-c857b.firebaseapp.com",
  projectId: "fir-crud-c857b",
  storageBucket: "fir-crud-c857b.appspot.com",
  messagingSenderId: "146032533895",
  appId: "1:146032533895:web:56a3d8549def66f7647322"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};