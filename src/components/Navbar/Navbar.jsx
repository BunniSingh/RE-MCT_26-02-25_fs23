import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { SiReactiveresume } from "react-icons/si";

const Navbar = () => {
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
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar