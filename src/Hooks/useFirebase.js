import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../components/Firebase/firebase.init";


firebaseAuthentication();

const useFirebase = _ => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    // Google Sign In
    const signInUsingGoogle = _ => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = _ => {
        signOut(auth)
            .then(setUser({}))
    }

    return {
        user,
        setUser,
        error,
        setError,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;

