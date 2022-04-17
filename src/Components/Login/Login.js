import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import './Login.css'

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
        signInWithEmailAndPassword(userInfo.email,userInfo.password)
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
        <div className='login-Container'>

            <div className='form' onSubmit={submitHandler}>
                <form >
                    <h3>Log in</h3>
                    <input type="email" placeholder='Email' onChange={handleEmailChange} required />
                    {errors?.email && <p >{errors.email}</p>}
                    <br />
                    <input type="password" placeholder='Password' onChange={handlePasswordChange} required />
                    {errors?.password && <p >{errors.password}</p> }
                    <br />
                    <p>new to track ? <NavLink to='/register'>register now</NavLink> </p>
                    <button>Login</button>
                </form>

                <div className='orBox'>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <button onClick={()=>signInWithGoogle()}>Continue With Google</button>
            </div>
        </div>
    );
}

export default Login;