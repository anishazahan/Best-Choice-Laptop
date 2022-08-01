import React from 'react'
import Newslater from '../../Shared/Footer/Newslater'
import Products from '../Products/Products'
import Banner from './Components/Banner'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Products></Products>
        <Newslater></Newslater>
    </div>
  )
}

export default Home