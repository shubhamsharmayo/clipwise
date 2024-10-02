import React from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import navbtn from '../../assets/navbtn.svg'


const Navbar = () => {


     
  return (
    <div className='navdiv'>
      <nav className='navbar'>
        <h1><img src={logo} alt="" /></h1>
        <ul className='navlist'>
            <li className='nav-link nav-link-ltr'>Home</li>
            <li className='nav-link nav-link-ltr'>Shop</li>
            <li className='nav-link nav-link-ltr'>About Us</li>
            <li className='nav-link nav-link-ltr'>Help</li>
           
        </ul>
        <ul className='btnlist'>
            <img src={navbtn} alt="" />
        </ul>
       
      </nav>
      </div>
         
      
 
    )
 
}

export default Navbar
