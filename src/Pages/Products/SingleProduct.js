import React from 'react'
import './Products.css'

const SingleProduct = ({product}) => {
    const {img,name,description,ratings,rate}=product;
  return (
    <div className='shadow relative bg-white'>
        <img className='w-100' src={img} alt="" />
        <div className="p-3">
        <h6 className='single-product-name'>{name}</h6>
        <div className='text-muted'>
        <p className='m-0'>{ratings}</p>
        <p className='mb-2 fw-bold price'>{rate}$</p>
        <div className="d-flex justify-content-between mb-2">
            <button className='button'>Buy Now</button>
            <button className='button'>See Details</button>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default SingleProduct
