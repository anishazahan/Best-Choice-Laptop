import React from 'react'
import logo from '../../../src/img/logo.png'
import {BiSearch} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import {BsBagFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const MiddleHeader = () => {

    window.addEventListener('scroll',function(){
        const search = this.document.querySelector('.search');
        search.classList.toggle('active',window.scrollY>100)

    })

  return (
    <>
    <section className='search'>
        <div className="container-width c_flex">
            <div className="logo width">
            <img src={logo} alt="" />
            </div>

            <div className="search-box f_flex">
                <span className='icon'><BiSearch/></span>
                <input type="text" placeholder='Search Your Product'/>
                <span>All Cateogory</span>
            </div>
            <div className="icon f_flex width">
                <span className='user-icon'> <FaUserCircle/> </span>
                <div className="cart">
                    <Link to='/cart' className='bag-icon'> <BsBagFill/></Link>
                    <span>0</span>
                </div>
            </div>
        </div>

    </section>
    
    
    </>
  )
}

export default MiddleHeader
