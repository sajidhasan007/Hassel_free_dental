import React, { useState } from 'react';
import useAuth from '../Shared/Hooks/useAuth';
import './Login.css';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
    sendPasswordResetEmail
} from "firebase/auth";
import initializeFirebase from '../../Firebase/Firebase.init';
import { useHistory } from 'react-router';


initializeFirebase();
const provider1 = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();
const auth = getAuth();


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const { user, setUser, googleSignin, isLoading, setIsLoading } = useAuth();
    //console.log(user);
    console.log(typeof (set_newuser));


    const handleemail = (e) => {
        setEmail(e.target.value);
    }

    const handlepassword = (e) => {
        setPassword(e.target.value);
    }

    const handlelogin = (e) => {
        setIsLogin(e.target.checked);
        console.log('form login page toggle', e.target.checked);
    }


    const handleregistration = (e) => {
        e.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const newuser = {
                    email: user.email,
                    name: user.email,
                    img: user.photoURL
                };
                console.log('from login', newuser);
                setUser(newuser);
                setIsLoading(false);
                history.push('/');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }

    const managelogin = (e) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                const newuser = {
                    email: user.email,
                    name: user.email,
                    img: user.photoURL
                };

                setUser(newuser);
                setIsLoading(false);
                history.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }




    // const handleaftersubmit = (e) => {
    //     aftersubmit(e,auth, email, password)
    // }








    return (
        <div className='mb-5'>
            <div className=''>
                <div className='my-custom w-70 m-5  '>
                    <h1>Please {isLogin ? 'Login' : 'Register'}</h1>
                    <form onSubmit={handleregistration}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {!isLogin && <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handlepassword} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            {/*  */}
                            <input onChange={handlelogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already have an account</label>
                        </div>

                        {isLogin ?
                            <button onClick={managelogin} type="submit" className="btn btn-primary">LogIn</button>
                            :
                            <button type="submit" className="btn btn-primary">Submit</button>}
                    </form>
                </div>



            </div>



            <div className='d-flex justify-content-center'>
                <button variant="warning" className="btn btn-warning" onClick={googleSignin}>Google LogIn</button>
            </div>
        </div>
    );
};

export default Login;