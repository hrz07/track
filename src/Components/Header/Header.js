import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import './Header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='header-container'>
            <div className='logoBox'>
                <h2>track`</h2>
            </div>
            <div>
                <NavLink to='/' >HOME</NavLink>
                <NavLink to='/destinations' >DESTINATIONS</NavLink>
                <NavLink to='/blog' >BLOG</NavLink>
                <NavLink to='/me' >ABOUT ME</NavLink>
                {
                    user ? <button onClick={()=> signOut(auth)}>LOGOUT</button> : <NavLink to='/login' >LOGIN</NavLink>
                }
                
            </div>
        </div>
    );
}

export default Header;
