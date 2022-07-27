import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../../../src/img/logo.png'

const Header = () => {
  return (







    <div className="header">
{/* ......................top header................... */}

    <div className="d-flex justify-content-between ">
        <div className="">
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="search">
            <input type="search" className='search-field' placeholder='Search Your Products' /><button className='search-btn'>Search</button>
        </div>
        <div className="d-flex justify-content-around mt-3">
            <p>cart</p>
            <p>wishlist</p>
            <p>profie</p>
            <p>Price</p>
        </div>
    </div>






   <Navbar collapseOnSelect expand="lg" className='navItem'>
     
        {/* <Navbar.Brand className='fw-bold fs-4' Link ='/'>Best Choice</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='menu' to ='/' >Home</Link>
            <Link className='menu' to ='About'>About</Link>
            <Link className='menu' to ='products'>Products</Link>
            <Link className='menu' to ='services'>Services</Link>
            <Link className='menu' to ='contact'>Contact</Link>
          </Nav>
          <Nav>
          <Link className=' login-btn' to ='Login'>Login</Link>
            <Link className=' signUp-btn' to ='SignUp'>Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
       
    </Navbar>
    </div>



  )
}

export default Header