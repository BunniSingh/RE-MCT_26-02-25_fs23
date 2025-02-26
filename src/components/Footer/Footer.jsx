import React from 'react'
import './Footer.css';
import { SiReactiveresume } from "react-icons/si";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer-container">
        <div className="logo">
            <SiReactiveresume className='icon'/>
            <span>Shopify</span>
        </div>
        <p>&copy; 2024 Shopify | All rights reserved.</p>
        <ul className="social-icons">
            <li>
                <a href="https://github.com/BunniSingh" target='_blank'>
                    <FaGithub className='icon'/>
                </a>
            </li>
            <li>
                <a href="" target='_blank'>
                    <FaLinkedin className='icon'/>
                </a>
            </li>
            <li>
                <a href="" target='_blank'>
                    <FaTwitter className='icon'/>
                </a>
            </li>
            <li>
                <a href="" target='_blank'>
                    <FaInstagramSquare className='icon'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer