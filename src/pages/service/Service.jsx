import React from 'react'
import PageHero from '../../components/PageHero'
import Footer from '../../components/Footer'
import Talktous from '../../components/Talktous'
import Webdesign from './sections/Webdesign'
import Graphicdesign from './sections/Graphicdesign'
import Content from './sections/Content'

function Service() {
  return (
    <div>
      <PageHero title='SERVICES'/>
      <Webdesign/>
      <Graphicdesign/>
      <Content/>
      <Talktous/>
      <Footer/>
    </div>
  )
}

export default Service