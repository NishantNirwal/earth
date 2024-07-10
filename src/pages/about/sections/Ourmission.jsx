import React from 'react'
import './styles/Ourmission.css'
import AboutImg from '../../../assets/Our.jpg'

function Ourmission() {
    return (
        <section className='mission'>
             <div>
                <img src={AboutImg} alt='image' height={380}  width={520} />
            </div>

            <div className='mission-div'>
                <h2>Our Mission</h2>
                <p>Hello, my name is Tyler Moore and with the help of many <br/> people I made this template. I made it so it is super easy <br/>to update and so that it flows perfectly with my tutorials.<br/> Lots of love and hundreds of hours went into making it. I<br/> hope you love it as much as I do.</p>
                <p>I wish you the best of luck with your business, enjoy the <br/> adventure.</p>
            </div>
           
        </section>
    )
}

export default Ourmission