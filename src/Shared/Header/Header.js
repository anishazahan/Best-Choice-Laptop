import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../../../src/img/logo.png'
// import { BsHeart} from "@react-icons/all-files/fa/BsHeart";

const Header = () => {
  return (







    <div className="header">
{/* ......................top header................... */}

    <div className="top-header ">
        <div className="logo-container">
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="search mt-4">
            <input type="search" className='search-field' placeholder='Search Your Products' /><button className='search-btn'>Search</button>
        </div>
        <div className=" side-menu-cart d-flex  mt-4">
           
            {/* <p> <BsHeart/> wishlist</p> */}
            <p className='side-menu'>profie</p>
            <p className='side-menu'>Price</p>
            <p className='side-menu'>cart</p>
            <p className='side-menu'>wishlisht</p>
        </div>
    </div>






   <Navbar collapseOnSelect expand="lg" className='navItem'>
     
        {/* <Navbar.Brand className='fw-bold fs-4' Link ='/'>Best Choice</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggole-btn' />
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
       
    </Navbar>
    </div>



  )
}

export default Header