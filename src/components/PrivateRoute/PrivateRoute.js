import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <>
            {
                user.email ? <Route
                    {...rest}
                    render={({ location }) => user.email ? children : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                    }
                >
                </Route> : <CircularProgress />
            }</>
    );
};

export default PrivateRoute;