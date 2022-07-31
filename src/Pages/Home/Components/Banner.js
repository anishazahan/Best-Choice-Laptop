import React from 'react'
import bannerImg from "../../../img/category-banner-watch__00751.original.jpg"
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner' >
        <div className="banner-content  text-left">
            
            <h2 className='banner-heading'>Best Laptop of Your Best <span className='specific-banner-content'>Choice!!</span> </h2>
            <p className='banner-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, iste velit  incidunt sequi <br/> iusto molestiae? Architecto praesentium sint inventore placeat.</p>
            <div className="btn-group">
                <button className='explore-btn'>Explore Now</button>
                <button className='shop-btn'>Shop Now</button>
            </div>
            <p className='last-content'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className=" bottom-banner">
            <img className='bottom-img' src={bannerImg} alt="" />
        </div>

    </div>
  )
}

export default Banner
