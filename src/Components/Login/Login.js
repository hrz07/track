import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-Container'>
        
            <div className='form'>
                <form >
                        <h3>Log in</h3>
                        <input type="email" placeholder='Email' required />
                        <br />
                        <input type="password" placeholder='Password' required />
                    <br />
                    <p>new to track ? <NavLink to='/register'>register now</NavLink> </p>
                        <button>Login</button>
                </form>

                <div className='orBox'>
                    <div></div>
                        <p>or</p>
                    <div></div>
                </div>
               <button>Continue With Google</button>
            </div>
        </div>
    );
}

export default Login;
