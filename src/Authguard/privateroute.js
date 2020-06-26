import React,{ Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component:Component, ...rest }) => {
    <Route {...rest}
        render={({ location }) => sessionStorage.getItem('token') ? (
        Component
    ) : (
        <Redirect
            to={{
                pathname:"/",
                state:{from:location}
            }}
        />
        )}
    />
}
export default PrivateRoute;