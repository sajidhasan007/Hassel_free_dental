

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "./Firebase.init";

const UseFirebase = () => {
    initializeFirebase();
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const googleSignin = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };
                setUser(newuser);
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    const handlesignout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        googleSignin,
        handlesignout
    }
}

export default UseFirebase;