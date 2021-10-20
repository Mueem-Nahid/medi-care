import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //to fix reloading problem 
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //----------function to login using email and pass--------------
    const signInUsingEmailAndPass = (email, pass) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    //-----------func to create user using email and pass-------------
    const createUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          setError('SignUp complete, please go to LogIn page and LogIn'); //if signup successful then set setError as empty string
          //verifyEmail();
          //setUserName();
          //setError('Please verify your email');
          logOut();
        })
        .catch(error => {
          setError(error.message);
        })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(()=>setIsLoading(false));
    }

    //observer
    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                setError('');
            }else {
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    }, [auth]);

    return {
        user,
        logOut,
        isLoading,
        signInUsingGoogle,
        signInUsingEmailAndPass,
        createUser,
        error
    }
}

export default useFirebase;