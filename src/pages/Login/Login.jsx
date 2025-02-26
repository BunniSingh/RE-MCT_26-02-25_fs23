import React, { useEffect, useRef, useState } from 'react'
import "./Login.css"
import image from '../../assets/login-image.jpg'
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  let userData = localStorage.getItem('user');
   useEffect(()=>{
       if(userData){
         userData = JSON.parse(userData);
         if(userData.isLogin){
           navigate('/')
         }
       }else{
        setIsLogIn(true);
       }
     }, [])

  let loginSubmit = (e) =>{
    e.preventDefault();
    let email_ = emailRef.current.value.trim();
    let password_ = passwordRef.current.value.trim();
    let {email , password} = userData;
    if(email === email_ && password === password_){
      localStorage.setItem('user', JSON.stringify({...userData, isLogin: true}));
      navigate('/');
    }else{
      alert('Email or password not match!')
    }
    
    
  }

  let registerSubmit = (e) =>{
    e.preventDefault();
    let name = nameRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let password = passwordRef.current.value.trim();
    localStorage.setItem('user', JSON.stringify({name, email, password, isLogin: true}));
    console.log('Data seved successfully')
    navigate('/');
  }

  let onGoogleBtnClick = () =>{

  }

  return (
    <div className="login-container">
      <div className="left">
      <h1>Welcome to Shopify</h1>
        <h3>{!isLogIn ? "Login" : "Register"}</h3>
        {
          !isLogIn ?
          <form onSubmit={loginSubmit} className="login">
            <input ref={emailRef} type="email" placeholder='Email' required />
            <input ref={passwordRef} type="password" placeholder='Password' required />
            <div className='sub'>
              <div>
                <input type="checkbox" name='check' />
                <label htmlFor="check">Remember me</label>
              </div>
              <p>Forget password?</p>
            </div>
            <button type='submit'>Log In</button>
          </form>
          :
          <form onSubmit={registerSubmit} className="register">
            <input ref={nameRef} type="text" placeholder='Name' required />
            <input ref={emailRef} type="email" placeholder='Email' required />
            <input ref={passwordRef} type="password" placeholder='Password' required />
              <div>
                <input type="checkbox" name='check' required/>
                <label htmlFor="check">Agree</label>
              </div>
           
            <button type='submit'>Register</button>
          </form>
        }
        <div className='login-wigh-google'>
          <button onClick={onGoogleBtnClick}><FaGoogle className='icon'/> Login with google</button>
        </div>
        {
          !isLogIn ?
          <div>
            New user?<span onClick={() => setIsLogIn(true)}>Create an account</span>
          </div>
          :
          <div>
            Alrady have an account?<span onClick={() => setIsLogIn(false)}>Click here</span>
          </div>
        }
      </div>
      <div className="right">
        <img src={image} alt="image" />
      </div>
    </div>
  )
}

export default Login