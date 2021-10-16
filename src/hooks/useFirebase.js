import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const catchEmail = e => {
        setEmail(e.target.value)
    }
    const catchPassword = e => {
        setPassword(e.target.value)
    }

    const loginUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // logout successfully
            })
    }

    const signUpWithEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // sign up
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
            .finally(setIsLoading(false))
    }

    const loginWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
            .finally(setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        error,
        loginUsingGoogle,
        logOut,
        signUpWithEmailPassword,
        catchEmail,
        catchPassword,
        loginWithEmailPassword,
        isLoading
    }
}

export default useFirebase;