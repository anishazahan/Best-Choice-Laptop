import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import './Products.css'
import Table from 'react-bootstrap/Table';
const Products = () => {


    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
  return (
   <div className="product-background">
    <h4 className='text-center my-5'>Feature products!!</h4>
     <div className="row">
        <div className="col-lg-2 mr-0 ">
          
        <Table responsive="sm" className='border'>
        <thead className='border'>
          <tr>
           
            <th>All Cateogories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laptop</td>
          </tr>
          <tr>
            <td>Smart Phone</td>
          </tr>
          <tr>
          <td>Smart Watch</td>
          </tr>
         
        </tbody>
      </Table>
     
           
        </div>
        <div className="col-lg-10 ml-0">
        <div className='products-container'>
       {
        products.map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)
       }
    </div>
        </div>
     </div>
   </div>
  )
}

export default Products