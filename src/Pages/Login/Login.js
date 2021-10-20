import React, { useState } from 'react';
import useAuth from '../Shared/Hooks/useAuth';
import './Login.css';
import initializeFirebase from '../../Firebase/Firebase.init';
import { useHistory } from 'react-router';

const Login = () => {


    const { user, setUser, googleSignin, isLoading, setIsLoading, isLogin,
        handleregistration, handleemail, handlelogin, handleName, handlepassword, managelogin } = useAuth();



    return (
        <div className='mb-5'>
            <div className=''>
                <div className='my-custom w-70 m-5  '>
                    <h1>Please {isLogin ? 'Login' : 'Register'}</h1>
                    <form onSubmit={handleregistration}>

                        {!isLogin && <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">User Name</label>
                            <input onBlur={handleName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>}

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