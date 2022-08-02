import React from 'react'
import './Headers.css'
// import {Link} from 'react-router-dom'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'

const TopHeader = () => {
  return (
    

        <>
        <section className='head'>
    <div className="container-width flex">

        <div className="left left-row">
            <p className='icon text-white mt-2'><MdCall/> </p>
            <label>+287675546464</label>
            <p className='icon text-white mt-2'><BsFillEnvelopeFill/> </p>
            <label>bestchoice@gmail.com</label>
        </div>

        <div className="right right-row right-text">
            <label> FAQ's</label>
            <label> Need help?</label>
            <label>EN</label>
            <label>USD</label>
        </div>

    </div>

        </section>
        
        </>


 
  )
}

export default TopHeader