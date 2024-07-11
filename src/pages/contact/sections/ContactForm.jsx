import React from 'react'
import './styles/ContactForm.css'

function ContactForm() {
    return (
        <section className='contactinfo'>

            <div className='contact-div1'>
                <h2>Get In Touch</h2>

                <form className='contact-form'>
                    <input type='text' placeholder='Your Name' />
                    <input type='phone number' placeholder='Phone Number' />
                    <input type='email' placeholder='Email' />
                    <textarea placeholder='Message' rows={5} />
                    <div>
                        <button className='main-btn'>SEND NOW</button>
                    </div>
                </form>
            </div>


            <div className='contact-div2'>
                <h2>Talk To Us</h2>

                    <div className='contact-divi'>
                        <h5>Email </h5>
                        <p>something@tyler.com</p>
                    </div>

                <div className='contact-divi'>
                    <h5>PHONE NUMBER</h5>
                    <p>202-555-0188</p>
                </div>

                <div className='contact-divi'>
                <h5>Address</h5>
                    <p>2727 Ocean Road,
                    Malibu, CA, 90264</p>
                </div>


                <div className='contact-divi' >
                    <h5>Follow Us</h5>
                    <div className='social-icons'>

                        {/* <div><FaFacebookF /></div> */}
                        {/* <div><FaTwitterSquare /></div> */}
                        {/* <div><FaYoutubeSquare /></div> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm