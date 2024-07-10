import React from 'react'
import './styles/OurService.css'
import ServImg1 from "../../../assets/Service1.jpg" 
import ServImg2 from "../../../assets/Service2.jpg" 
import ServImg3 from "../../../assets/Service3.jpg" 

function OurService() {
    return (
        <section className="service">

            <div className="service-img">

                <div><img src={ServImg1} alt="image1" />
                    <h4>Web Design</h4>
                    <p>Custom web design for small businesses,<br/> we help you capture new audiences and <br/> increase your sales.</p>
                </div>

                <div><img src={ServImg2} alt="image2" />
                    <h4>Graphic Design</h4>
                    <p>Logos, merchandise and more. Anyone <br/> can create nice graphics. We think it’s <br/> better to create memorable ones.</p>
                </div>
                
                <div><img src={ServImg3} alt="image3" />
                    <h4>Content Creation</h4>
                    <p>Want to attract people to your website? <br/> You have to have the best content in the <br/> world. That’s what we do.</p>
                </div>

            </div>
        </section>
    )
}

export default OurService