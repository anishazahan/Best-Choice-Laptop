import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductsDeatails = () => {

  const {productsDetailsID}=useParams();

  const [productDetails,setProductDetails]= useState({});
  useEffect(()=>{
    const url = `http://localhost:5000/product/${productsDetailsID}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setProductDetails(data))
  },[])


   
  return (
    <div>ProductsDeatails:{productsDetailsID}</div>
  )
}

export default ProductsDeatails