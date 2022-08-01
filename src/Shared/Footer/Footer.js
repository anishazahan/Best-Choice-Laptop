import React from 'react'
import './Footer.css'
import logo from '../../../src/img/logo.png'
import {Link} from 'react-router-dom'
import {ImLocation} from 'react-icons/im'
import {MdCall} from 'react-icons/md'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {FaCcVisa,FaCcDiscover,FaCcMastercard,FaCcPaypal,FaCcApplePay} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
   

    <div className="top-footer">
      <div className="top-footer-container">
        <div className="row">
        <div className="col-md-3">
          <img className='logo' src={logo} alt="" />
          <p className='footer-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m</p>

        </div>
        <div className="col-md-9 mt-3">
          <div className="row">

          <div className="col-md-3">
            <h6 className='footer-heading'>NAVIGATION</h6>
            <div className="footer-menu">
            <Link className='footer-link' to='/'>About Us</Link>
            <Link className='footer-link' to='/'>FAQ</Link>
            <Link className='footer-link' to='/'>Privacy Policy</Link>
            <Link className='footer-link' to='/'>Shipping and Returns</Link>
            <Link className='footer-link' to='/'>RSS Syndication</Link>
            <Link className='footer-link' to='/'>Blog</Link>
            <Link className='footer-link' to='/'>Sitemap</Link>
            </div>
          </div>
          <div className="col-md-3">
          <h6 className='footer-heading'>Popular Brands</h6>
            <div className="footer-menu">
            <Link className='footer-link' to='/'>Apple</Link>
            <Link className='footer-link' to='/'>Microsoft</Link>
            <Link className='footer-link' to='/'>Booq</Link>
            <Link className='footer-link' to='/'>Speck</Link>
            <Link className='footer-link' to='/'>Crumpler</Link>
            <Link className='footer-link' to='/'>Elgato</Link>
            <Link className='footer-link' to='/'>View all</Link>
            </div>
          </div>
          <div className="col-md-3">
          <h6 className='footer-heading'>Cateogories</h6>
            <div className="footer-menu">
            <Link className='footer-link' to='/'>Shop Mac</Link>
            <Link className='footer-link' to='/'>Creative Toys</Link>
            <Link className='footer-link' to='/'>Color forms</Link>
            <Link className='footer-link' to='/'>Smart Watch</Link>
            <Link className='footer-link' to='/'>Smart Laptop</Link>
            <Link className='footer-link' to='/'>IPhone</Link>
            <Link className='footer-link' to='/'>View All</Link>
            </div>
          </div>
          <div className="col-md-3">
          <h6 className='footer-heading'>Information</h6>
            <div className="footer-menu">
            <div className="d-flex">
            <span className=' icon'><ImLocation/></span> <span className='footer-location'>Acme Widgets</span>
            </div>
              <p className='footer-location'>123 Widget Street Acmeville,</p>
               <p className='footer-location'> United States Of America</p>
               <div className="d-flex">
            <span className=' icon'><MdCall/></span> <span className='footer-location'>01249856498</span>
            </div>
               <div className="d-flex">
            <span className=' icon'><BsFillEnvelopeFill/></span> <p className='footer-location mt-1'>bestChoice@gmail.com</p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>

    </div>


    {/* /////-----last footer... */}

    <div className="last-footer ">
      
     <div className="last-footer-menu">
     <Link to='/' className="last-footer-link">
        About Us
        </Link>
     <Link to='/' className="last-footer-link">
        Products
        </Link>
     <Link to='/' className="last-footer-link">
        Return Policy
        </Link>
     <Link to='/' className="last-footer-link">
        Blog
        </Link>
     <Link to='/' className="last-footer-link">
        Contact Us
        </Link>
     <Link to='/' className="last-footer-link">
        FAQ
        </Link>
     <Link to='/' className="last-footer-link">
        Privacy Policy
        </Link>
     </div>
     <p className='text-center footer-text'>Copyright    {(new Date().getFullYear())} All Rights Reserved.Powered by <span className='footer-name'>Anisha Zahan</span>  </p>

     <div className="pay-icon">
      <Link className='pay-menu' to='/'> <FaCcVisa/> </Link>
      <Link className='pay-menu' to='/'> <FaCcDiscover/> </Link>
      <Link className='pay-menu' to='/'> <FaCcMastercard/> </Link>
      <Link className='pay-menu' to='/'> <FaCcPaypal/> </Link>
      <Link className='pay-menu' to='/'> <FaCcApplePay/> </Link>
     </div>
      
      </div> 
    
    </div>
  )
}

export default Footer