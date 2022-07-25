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
   <div className="">
    <h4 className='text-center my-5'>Feature products!!</h4>
     <div className='products-container'>
       
       {
        products.map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)
       }
    </div>
   </div>
  )
}

export default Products