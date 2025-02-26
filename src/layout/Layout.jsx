import React, { useEffect } from 'react'
import './Layout.css'
import { data, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Layout = () => {
  let navigate = useNavigate()
  let userData = localStorage.getItem('user');
  useEffect(()=>{
    if(userData){
      userData = JSON.parse(userData);
      if(!userData.isLogin){
        navigate('/login')
      }
    }else{
      navigate('/login')
      return;
    }
  }, [])
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout