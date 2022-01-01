import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // ACCOUNT CREATE WITH EMAIL AND PASS

    const  createAccountWithMail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // LOGIN WITH EMAIL AND PASS
     const loginWithEmailAndPassword =( email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // USER OBSERVER 
    useEffect( () => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            } 
            setLoading(false);
        });
        return () => unSubscribed;
    }, [auth]);

    // LOGOUT
    const logOut = () => {
        setLoading(true);
        signOut(auth)
         .then(() => {
            setUser({});
          }).catch((error) => {
           setError(error.message);
          })
          .finally( () => setLoading(false));
    };

    

    return {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        createAccountWithMail,
        logOut,
        loginWithEmailAndPassword
    }

}

export default useFirebase;