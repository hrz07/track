import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import './Login.css'
import loginImg from '../../photos/login.jpg'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const [user1] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle, loadingGoole, errorGoogle] = useSignInWithGoogle(auth);


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Envalid Email" });
            setUserInfo({ ...userInfo, email: "" })
        }
    }



    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters" })
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user)
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user1) {
            navigate(from);
        }
    }, [user1]);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success('Sent email');
        }
        else {
            toast.error('please enter your email address');
        }
    }
    console.log(userInfo.email)

    return (
        <div className='login-Container'>
            <div className='imgAndFormBox'>
                <div className='loginImgBox'>
                    <img src={loginImg} alt="" />
                </div>

                <div className='form' onSubmit={submitHandler}>
                    <form >

                        <input type="email" placeholder='👤  Email' onChange={handleEmailChange} required />
                        {errors?.email && <p >{errors.email}</p>}
                        <br />
                        <input type="password" placeholder='🔒  Password' onChange={handlePasswordChange} required />
                        {errors?.password && <p >{errors.password}</p>}
                        <br />
                        <p >new to track ? <NavLink to='/register' className='resgiterText'>register now</NavLink> </p>
                        <button className='btn'>Login</button>
                    </form>
                    <div className='forget'>
                        <p className='forgetText'> forget password ?</p> <button className='resetbtn' onClick={resetPassword}>Reset Password</button>
                    </div>
                    <div className='orBox'>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <button className='googleBtn' onClick={() => signInWithGoogle()}> <FcGoogle className='googleIcon' size={18} /> Continue With Google</button>
                </div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>

        </div>
    );
}

export default Login;
