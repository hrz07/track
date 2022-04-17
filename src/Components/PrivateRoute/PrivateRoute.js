import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init'
import Spinner from '../Spinner/Spinner';
const Privateroute = ({children}) => {
   
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Spinner/>
    }
    if (!user) {
       return <Navigate to="/login" state={{from: location}} replace />
    } else {
        return children;
    }
}

export default Privateroute;
