import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import OurService from './sections/OurService'
import Aboutus from './sections/Aboutus'
import Talk from './sections/Talk'

function Home() {
  return (
    <div>
      <Hero/>
      <OurService/>
      <Aboutus/>
      <Talk/>
      <Footer/>
    </div>
  )
}

export default Home