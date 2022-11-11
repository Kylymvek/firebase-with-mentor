import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYcRdGzo9FdTmx7J_kuRNrItNN-zjSFCY",
  authDomain: "fir-crud-js25.firebaseapp.com",
  projectId: "fir-crud-js25",
  storageBucket: "fir-crud-js25.appspot.com",
  messagingSenderId: "400208039768",
  appId: "1:400208039768:web:58dbc2c402ec482f3d5f2d",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
