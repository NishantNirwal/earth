import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/Footer'
import Ourmission from './sections/Ourmission'
import Talktous from '../../components/Talktous'

function About() {
  return (
    <div>
      <PageHero title="Who We Are?" />
      <Ourmission />
      <Talktous/>
      <Footer />
    </div>
  )
}

export default About