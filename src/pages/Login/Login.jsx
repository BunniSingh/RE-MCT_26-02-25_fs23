import React, { useState } from 'react'
import "./Login.css"
import image from '../../assets/login-image.jpg'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  let loginSubmit = () =>{

  }
  
  let registerSubmit = () =>{

  }

  return (
    <div className="login-container">
      <div className="left">
        <h1>{!isLogIn ? "Login" : "Register"}</h1>
        {
          !isLogIn ?
          <form onSubmit={loginSubmit} className="login">
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
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
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
              <div>
                <input type="checkbox" name='check' required/>
                <label htmlFor="check">Agree</label>
              </div>
           
            <button type='submit'>Log In</button>
          </form>
        }
        <div className='login-wigh-google'>
          <button><FaGoogle className='icon'/> Login with google</button>
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