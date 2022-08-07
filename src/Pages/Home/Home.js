import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Newslater from '../../Shared/Footer/Newslater'
import Products from '../Products/Products'
import Banner from './Components/Banner'
import DiscoverBanner from './Components/DiscoverBanner'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Products></Products>
        <DiscoverBanner></DiscoverBanner>
        <Newslater></Newslater>
        <Footer></Footer>
    </div>
  )
}

export default Home