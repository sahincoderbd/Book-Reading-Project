import React, { useState } from 'react';
import googleImg from '../assets/Google.svg';

import { GoogleAuthProvider,signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.init';


const Login = () => {

    const [userInfo,setUser]=useState(null);
    const handleGoogleSignIn=()=>{
       const provider = new GoogleAuthProvider();
       signInWithPopup(auth,provider)
       .then((result) => {
        console.log(result.user);
        setUser(result.user);
    
        // ...
      }).catch((error) => {
        console.log('Error:', error);
        setUser(null);
        // ...
      });

       console.log('google sign in progressing');
    }


    const handleSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('Sign out successfull');
            setUser(null);
        }).catch()
    }
    return (
        <div className='container mx-auto py-10 space-y-3'>
            
            <fieldset className="fieldset text-lg bg-base-200 border-base-300 rounded-box w-sm lg:w-xl border px-4 py-6 mx-auto">
            <h2 className=" w-full text-2xl font-medium text-center ">Login</h2>

            <label className="label text-lg">Email</label>
            <input type="email" className="input text-base w-full" placeholder="Email" />

            <label className="label text-lg">Password</label>
            <input type="password" className="input text-base w-full" placeholder="Password" />

            <button className="btn btn-neutral mt-4 text-lg">Login</button>
            </fieldset>

        <div className='text-center'>
            {
                userInfo ? <button onClick={handleSignOut} className="btn bg-white dark:bg-gray-700 text-black dark:text-primary border-[#e5e5e5] dark:border-gray-600">
                Sign out      
                </button> : <button onClick={handleGoogleSignIn} className="btn bg-white dark:bg-gray-700 text-black dark:text-primary border-[#e5e5e5] dark:border-gray-600">
        <img className='w-5' src={googleImg} alt="" />
        Login with Google
        </button>
            }
        
        
        </div>

        </div>
    );
};

export default Login;