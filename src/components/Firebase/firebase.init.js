import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthentication = _ => {
    return initializeApp(firebaseConfig);
}

export default firebaseAuthentication;