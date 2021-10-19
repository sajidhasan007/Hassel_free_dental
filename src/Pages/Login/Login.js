import React from 'react';
import useAuth from '../Shared/Hooks/useAuth';

const Login = () => {
    const { googleSignin } = useAuth();
    return (
        <div>
            <h1>Please LogIn</h1>
            <button variant="warning" onClick={googleSignin}>Google LogIn</button>
        </div>
    );
};

export default Login;