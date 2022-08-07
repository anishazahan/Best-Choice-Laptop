import React, { useState } from 'react'
import {FiChevronDown} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {GoThreeBars} from 'react-icons/go'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [mobileMenu,setMobileMenu]=useState(false);


  return (
    <>
    <header className="header">
        <div className="container-width flex">
      
           
            <div className="nav-link ms-auto">
                <ul className={ mobileMenu? "nav-links-mobileMenu":"link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
                    <li>
                    <Link className='menu' to ='/' >Home</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='About'>About</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='products'>Products</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='services'>Services</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='order'>Order</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='contact'>Contact</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='login'>Login</Link>
                    </li>
                    <li>
                    <Link className='menu' to ='signOut'>Sign Out</Link>
                    </li>
                    
                </ul>

                <button className='toggole' onClick={()=>setMobileMenu(!mobileMenu)}>
                    {
                        mobileMenu? <span className='close home-btn'><AiOutlineClose/> </span>:<span className='open'><GoThreeBars/> </span>
                    }
                </button>
            </div>

        </div>

    </header>


    </>
  )
}

export default Navbar