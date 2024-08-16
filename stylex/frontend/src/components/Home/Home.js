import React from 'react'
import NavBar from '../Navbar/Navbar'
import ImageSlider from './ImageSlider'
import Footer from '../Footer/Footer'
import Offer from './Offer'
import ParallaxComponent from './ParallaxComponent'


const Home = () => {
  return (
    <div>
        <NavBar/>
        <ImageSlider/>
        <ParallaxComponent/>
        <Offer/>
        <Footer/>
    </div>
  )
}

export default Home
