import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const catchEmail = e => {
        setEmail(e.target.value)
    }
    const catchPassword = e => {
        setPassword(e.target.value)
    }
    const catchRePassword = e => {
        setRePassword(e.target.value)
    }
    const catchName = e => {
        setName(e.target.value)
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
        if (!email) {
            setError('input email')
        }
        else if (!name) {
            setError('input name')
        }
        else if (!password) {
            setError('input password')
        }
        else if (!rePassword) {
            setError('er enter your password')
        }
        else if (password !== rePassword) {
            setError('password didnt match')
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setError('');
                    addName();
                })
                .catch(error => {
                    setError(error.message)
                })
                .finally(() => {
                    setError('');
                    setSuccess('You open your account successfully.');
                    setName('');
                    setPassword('');
                    setRePassword('');
                    setEmail('');
                })
        }
    }

    const addName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // updated profile
        }).catch((error) => {
            setError(error.message)
        });
    }

    const loginWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUser(result.user);
            })
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
        isLoading,
        name,
        catchName,
        catchRePassword,
        success
    }
}

export default useFirebase;