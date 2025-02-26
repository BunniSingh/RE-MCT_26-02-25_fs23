import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { SiReactiveresume } from "react-icons/si";

const Navbar = () => {
  const navigate = useNavigate();
  
  const onLogoutClick = ()=>{
      let userData = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('user', JSON.stringify({...userData, isLogin: false}));
      navigate('/login')
  }

  return (
    <div className='navbar-container'>
        <div className="logo">
            <SiReactiveresume className='icon'/>
            <span>Shopify</span>
        </div>
        <ul className="links">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <div className="log-out">
            <button onClick={onLogoutClick}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar