import React from 'react'

const SingleProduct = ({product}) => {
    const {img,name,description,ratings,rate}=product;
  return (
    <div className='shadow relative'>
        <img className='w-100' src={img} alt="" />
        <div className="p-3">
        <h5>{name}</h5>
        <p>{ratings}</p>
        <h2>{rate}</h2>
        <div className="d-flex justify-content-between">
            <button>Buy Now</button>
            <button>See Details</button>
        </div>
        </div>
        
    </div>
  )
}

export default SingleProduct
