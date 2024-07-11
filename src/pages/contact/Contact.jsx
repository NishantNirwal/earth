import React from 'react'
import PageHero from '../../components/PageHero'
import ContactForm from './sections/ContactForm'
import Footer from '../../components/Footer'

function Contact() {
  return (
    <div>
      <PageHero title='CONTACT US'/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact