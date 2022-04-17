import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-Container'>
            <div className='form'>
                <form >
                    <h3>Register</h3>
                    <input type="text" placeholder='Name' />
                    <br />
                    <input type="email" placeholder='Email' required />
                    <br />
                    <input type="password" placeholder='Password' required />
                    <br />
                    <input type="password" placeholder='Confirm Password' required />
                    <br />
                    <p>already have account ? <NavLink to='/login'>login now</NavLink> </p>
                    <button>Register</button>
                </form>

            </div>
        </div>
    );
}

export default Register;
