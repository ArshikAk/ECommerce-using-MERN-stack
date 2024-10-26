/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    // if(isAuthenticated)
    // {
    //     return children;
    // }

    // else{
    //     alert("Login to our website to access this page")
    //     return <Navigate to="/login"/>
    // }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
