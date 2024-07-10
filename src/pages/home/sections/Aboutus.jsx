import React from 'react'
import './styles/Aboutus.css'
import Our from '../../../assets/Our.jpg'

function Aboutus() {
  return (
    <section className='aboutus'>

      <div className='aboutus-div'>
        <h2>ABOUT US</h2>
        <p>I made it so it is super easy to update and so that it flows<br/> perfectly with my tutorials. Lots of love and hundreds of hours<br/> went into making it. I hope you love it as much as I do. I wish<br/> you the best of luck with your business, enjoy the adventure.</p>
      </div>

      <div>
        <img src={Our} alt='image' height={400} width={550} />
      </div>

    </section>
  )
}

export default Aboutus