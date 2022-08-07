import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import './Products.css'
import{Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
const Products = () => {

    const [allProducts,setAllProducts] = useState(false);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
  return (
   <div className="product-background">
    <h4 className='text-center my-5'>Feature products!!</h4>
     <div className="container">
     <div className="row">
        <div className="col-md-2 col-sm-3 mr-0 ">
          
        <Table responsive="sm" className='border border-sm-0 lg-table'>
        <thead className='border border-sm-0'>
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

      <div className="sm-table">
        <h5>ALl cateogories</h5>
        <div className="D-flex my-3 ">
            <button className='cateogory-btn'>Laptop</button>
            <button className='cateogory-btn'>Mobile</button>
            <button className='cateogory-btn'>Watch</button>
        </div>
      
      </div>
     
        </div>
        <div className="col-md-10 col-sm-9 ml-0">
        <div className='products-container'>

       {
        !allProducts && 
        products.map(product=><SingleProduct key={product._id} product={product}></SingleProduct>).slice(0,6)
       }

       {
        allProducts &&
        products.map(product=><SingleProduct key={product._id} product={product}></SingleProduct>)
       }
    </div>
    <div className="mr-auto my-5 see-more-btn">
        <button onClick={()=>{setAllProducts(!allProducts)}}>{allProducts? 'see less':'See More'}</button>
    </div>


        </div>
     </div>
     </div>
   </div>
  )
}

export default Products