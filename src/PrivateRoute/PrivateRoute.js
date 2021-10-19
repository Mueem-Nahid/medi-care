import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading)
    {
        return <p>...Loading</p>
    }
    return (
        <Route
        {...rest}

        render={({location})=>user.email?children: <Redirect
            to={{
                pathname: '/login',
                state: {from: location}
            }}>
            </Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;