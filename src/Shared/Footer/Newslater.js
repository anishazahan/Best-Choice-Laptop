import React from 'react'
import './Footer.css'

const Newslater = () => {
  return (
    <div className='newslater-background'>

        <div className="newslater-content">

            <div className="newslater-left">
            <h3>NEWSLATER</h3>
            <span>Passage of Lorem Ipsum, you need tobenm.</span>
            </div>
            <div className="newslater-search-field mt-2">
                <input type="text" placeholder='Your Email' className='search-field' /> <button className='subscribe-btn'>Subscribe</button>
            </div>

        </div>



    </div>
  )
}

export default Newslater