import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Header.css'
// import {Link} from 'react-router-dom'
// import logo from '../../../src/img/logo.png'
// import { BsHeart,BsBagCheck} from "react-icons/bs";
// import { CgProfile} from "react-icons/cg";
import TopHeader from './TopHeader';

const Header = () => {
  return (


    <div className="">
{/* ......................top header................... */}
{/* 
<div className="top-header-background">
    <div className="top-header ">
        <div className="logo-container">
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="search mt-4">
            <input type="search" className='search-field' placeholder='Search Your Products' /><button className='search-btn'>Search</button>
        </div>
        <div className=" side-menu-cart mt-4">
           
           
            <p className='side-menu'> <BsHeart/></p>
            <p className='side-menu'><CgProfile/></p>
            <p className='side-menu'> <BsBagCheck/> <sup className='sup-count'>0</sup> </p>
            <div className="top-cart">
              <p className='m-0'>My Cart  </p>
              <p>$ 0.00</p>
            </div>
            
        </div>
    </div>
    </div>






   <Navbar collapseOnSelect expand="lg" className='navItem'>
     
        {/* <Navbar.Brand className='fw-bold fs-4' Link ='/'>Best Choice</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggole-btn' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className='menu' to ='/' >Home</Link>
            <Link className='menu' to ='About'>About</Link>
            <Link className='menu' to ='products'>Products</Link>
            <Link className='menu' to ='services'>Services</Link>
            <Link className='menu' to ='addProduct'>Add Products</Link>
            <Link className='menu' to ='contact'>Contact</Link>
            
          
          </Nav>
          <Nav>
          <Link className=' login-btn' to ='Login'>Login</Link>
            <Link className=' signUp-btn' to ='SignUp'>Sign Out</Link>
          </Nav>
        </Navbar.Collapse>
       
    </Navbar> */} 


<TopHeader></TopHeader>









    </div>



  )
}

export default Header