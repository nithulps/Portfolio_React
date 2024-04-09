import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='txtp'>
        <li>Contact Me</li>
        <p>Here you can contact me for my services and discuss ideas .</p>
        <div className='line2'>|</div>
        </div>
        <div className='formbox'>
          <div className='firstbox'>
            <div className='cntctbx'>
              <div><FontAwesomeIcon icon={faLocationDot} size="2xl" /></div>
              <h3>Address</h3>
              <h5>Kochi,Kerala</h5>
            </div>
            <div className='cntctbx'>
              <div><FontAwesomeIcon icon={faEnvelope} size="2xl" /></div>
              <h3>Email</h3>
              <h5>nithulps4@gmail.com</h5></div>
            <div className='cntctbx'>
              <div><FontAwesomeIcon icon={faPhone} size="2xl" /></div>
              <h3>Phone</h3>
              <h5>+91 9645769619</h5></div>
          </div>
          <div className='secondbox'>
            <form>
              <div className='txtinput'>
                <input placeholder='Name' type="text" id="name" name="name" required />
                <input placeholder='Email' type="email" id="email" name="email" required />
              </div>
              <input placeholder='Subject' type="email" id="subject" name="email" required />
              <textarea placeholder='your message  here..' id="message" name="message" required></textarea>
              <button className='bbtn' type="submit"><span className='btntxt'>Send Your Message</span></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact