import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../firebase/firebase.init'
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import regImg from '../../photos/reg.jpg'


const Register = () => {
    const [user1] = useAuthState(auth);
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
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user1) {
            navigate(from);
        }
    }, [user1]);

    return (
        <div className='register-Container'>

            <div className="container">
                <div className="regImg">
                    <img src={regImg} alt="" />
                </div>
                <div className='form'>
                    <form onSubmit={formSubmit}>
                        <h3 style={{color:'rgba(0, 128, 0, 0.714)'}} className='regTitle'>Register</h3>

                        <input type="email" placeholder='👤  Email' onChange={handleEmailChange} required />
                        {errors?.email && <p >{errors.email}</p>}
                        <br />
                        <input type="password" placeholder='🔒  Password' onChange={handlePasswordChange} required />
                        {errors?.password && <p >{errors.password}</p>}
                        <br />
                        <input type="password" placeholder='🔒  Confirm Password' onChange={handleConfirmPasswordChange} required />
                        <br />
                        <p>already have account ? <NavLink to='/login'  className='resgiterText'>login now</NavLink> </p>
                        <button className='regBtn'>Register</button>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Register;
