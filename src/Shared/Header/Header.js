import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className=''>
       <Container>

       
        <Navbar.Brand className='fw-bold fs-4' Link ='/'>Best Choice</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className='menu' to ='/' >Home</Link>
            <Link className='menu' to ='About'>About</Link>
            <Link className='menu' to ='products'>Products</Link>
            <Link className='menu' to ='services'>Services</Link>
            <Link className='menu' to ='contact'>Contact</Link>
          </Nav>
          <Nav>
          <Link className='menu' to ='Login'>Login</Link>
            <Link className='menu' to ='SignUp'>Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>



  )
}

export default Header