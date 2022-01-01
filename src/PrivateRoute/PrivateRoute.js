import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Firebase/Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth();
    let location = useLocation();
    
    if(loading){
        return <div className='text-center'><Spinner animation="grow" variant="danger" /></div>
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;