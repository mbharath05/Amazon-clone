import React from 'react'
import Logo from './images/logologin1.png';
import './LoginPage.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';


function LoginPage() {
    const navigate =useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                navigate("/")    
                   }
        })
        .catch(error =>alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                navigate("/")    
                   }
        })
        .catch(error =>alert(error.message))
    }
  return (
    <div className='LoginPage'>
        <Link to="/">
        <img className='Login_logo' src={Logo}/> 
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail:</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
                 <h5>Password:</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
            <button  type='submit' onClick={signIn}  className='login_signin'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the Amazon Clone  Conditions of use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads.
            </p>
            <button  onClick={register} className='login_register'>Create your Amazon account</button>
        </div>
      
    </div>
  )
}

export default LoginPage
