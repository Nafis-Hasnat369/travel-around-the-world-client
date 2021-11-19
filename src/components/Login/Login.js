import React from 'react';
import { Container } from 'react-bootstrap';
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
        <Container className="mt-5" style={{ height: "50vh" }}>
            <button onClick={handleGoogleSignIn} className="btn btn-dark">Google Sign In</button>
        </Container>
    );
};

export default Login;