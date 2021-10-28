import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { setUser, setError, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    // Google sign in...

    const handleGoogleSignIn = _ => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-dark">Google Sign In</button>
        </div>
    );
};

export default Login;