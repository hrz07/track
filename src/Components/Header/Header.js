import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logoBox'>
                <h2>track`</h2>
            </div>
            <div>
                <NavLink to='/' >HOME</NavLink>
                <NavLink to='/destinations' >DESTINATIONS</NavLink>
                <NavLink to='/blog' >BLOG</NavLink>
                <NavLink to='/login' >LOGIN</NavLink>
            </div>
        </div>
    );
}

export default Header;
