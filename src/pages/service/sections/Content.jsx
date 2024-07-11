import React from 'react'
import './styles/Content.css'
import ConImg from "../../../assets/Content.jpg"

function Content() {
  return (
    <section className='con'>

    <div className='con-div'>
        <h2>Content Writing</h2>
        <p>Want to attract people to your website? You have to have<br/> the best content in the world. Our content writers will<br/> create award willing content for you. Contact us by calling,<br/>  emailing or filling out ourform. You will receive a free<br/> quote by email within 24 hours.</p>
        <div><button className="main-btn">EXPLORE</button></div>
    </div>

    <div>
        <img src={ConImg} alt='image' height={450} width={550} />
    </div>

</section>
  )
}

export default Content