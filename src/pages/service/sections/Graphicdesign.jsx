import React from 'react'
import './styles/Graphicdesign.css'
import GraphicImg from "../../../assets/Graphic.jpg" 

function Graphicdesign() {
  return (
    <section className='graphic'>

    <div className='graphic-div'>
        <h2>Graphic Design</h2>
        <p>We specialize in logos, merchandise and more. Anyone<br/> can create nice graphics but it’s much better to create <br/> memorable ones. Contact us by calling, emailing or filling out our<br/> form. You will receive a free quote by email within 24<br/> hours.</p>
        <button className="main-btn">EXPLORE</button>
    </div>

    <div>
        <img src={GraphicImg} alt='image' height={450} width={550} />
    </div>

</section>
  )
}

export default Graphicdesign