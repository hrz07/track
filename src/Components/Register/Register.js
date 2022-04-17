import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'
import auth from '../../firebase/firebase.init'
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";


const Register = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };


    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

   
    const formSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    }

    
    return (
        <div className='register-Container'>
            <div className='form'>
                <form  onSubmit={formSubmit}>
                    <h3>Register</h3>
                   
                    <input type="email" placeholder='Email' onChange={handleEmailChange} required />
                    {errors?.email && <p >{errors.email}</p>}
                    <br />
                    <input type="password" placeholder='Password' onChange={handlePasswordChange} required />
                    {errors?.password && <p >{errors.password}</p>}
                    <br />
                    <input type="password" placeholder='Confirm Password' onChange={handleConfirmPasswordChange} required />
                    <br />
                    <p>already have account ? <NavLink to='/login'>login now</NavLink> </p>
                    <button>Register</button>
                </form>

            </div>
        </div>
    );
}

export default Register;
