import React from 'react'
import { Link } from 'react-router-dom'
import './DiscoverBanner.css'

const DiscoverBanner = () => {
  return (
    <>

    <div className="discover-background">
        <div className="discover-content">
            <p>NEXT IS NOW : ULTRA SOUND</p>
            <h3 className='discover-heading'>Samsung S7 340</h3>
            <div className="">
                <button className='discover-btn my-2'>POWERFUL, STUNNING & NOW EVEN BIGGER</button>
                <div className="">
                <Link className='discover-link' to='/'>Discover Me</Link>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default DiscoverBanner