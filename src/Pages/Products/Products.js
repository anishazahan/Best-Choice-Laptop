import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import './Products.css'

const Products = () => {


    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
  return (
    <div className='products-container'>
       {
        products.map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)
       }
    </div>
  )
}

export default Products