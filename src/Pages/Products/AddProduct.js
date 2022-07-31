import React from 'react'
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{

        const url = `http://localhost:5000/product/`
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'aplication/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=> console.log(result))
    };

  return (
    <div className='w-50 mx-auto'>
        <h2 className='text-center my-5'>Please Add Product</h2>

        <form className='d-flex flex-clumn ' onSubmit={handleSubmit(onSubmit)}>
      <input className='my-2 p-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} /><br/>
      <input className='my-2 p-2' placeholder='price' type='number' {...register("rate")}  /><br/>
      <input className='my-2 p-2' placeholder='rating'  type='number'{...register("ratings")} /><br/>
      <input className='my-2 p-2' placeholder='img'  type='text'{...register("img")} /><br/>
    
     <input type="submit" value='Add Product'/>
    </form>
    </div>
  )
}

export default AddProduct
