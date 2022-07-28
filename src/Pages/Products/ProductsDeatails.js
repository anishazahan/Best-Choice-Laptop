import React from 'react'
import { useParams } from 'react-router-dom';

const ProductsDeatails = () => {

    const {productsDetails}=useParams();
  return (
    <div>ProductsDeatails{productsDetails}</div>
  )
}

export default ProductsDeatails