import React from 'react'
import './styles/Webdesign.css'
import WebImg from "../../../assets/Web.jpg" 

function Webdesign() {
    return (
        <section className='web'>

            <div className='web-div'>
                <h2>Web Design</h2>
                <p>We create custom web design for small businesses, this<br/> will help you capture new audiences and increase your<br/> sales. Contact us by calling, emailing or filling out our<br/> form. You will receive a free quote by email within 24<br/> hours.</p>
                <div><button className="main-btn">EXPLORE</button></div>
            </div>

            <div>
                <img src={WebImg} alt='image' height={450} width={550} />
            </div>

        </section>
    )
}

export default Webdesign