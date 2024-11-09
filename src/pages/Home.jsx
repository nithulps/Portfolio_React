import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <>
      <div className='baground'>
        <div className='txt1'>
          <span className='jobrolee'>WELCOME</span>
          <div className='autotxt one'>Im <span className='jobrole'>
            <TypeAnimation
              sequence={[
                "NITHUL PS",
                400,
                "web Developer",
                400,
                "web Designer",
                400,]}
              wrapper="span"
              speed={10}
              repeat={Infinity}>
            </TypeAnimation></span>
          </div>
          <div className='autotxt two '>Designer. Developer. Content Creator.</div>
          <div className="icons">
            <FontAwesomeIcon className="iconss" icon={faFacebookF} />
            <FontAwesomeIcon className="iconss" icon={faTwitter} />
            <FontAwesomeIcon className="iconss" icon={faInstagram} />
            <FontAwesomeIcon className="iconss" icon={faLinkedinIn} />
            <FontAwesomeIcon className="iconss" icon={faBehance} />
            <FontAwesomeIcon className="iconss" icon={faGithub} />
          </div>
        </div>
        <div className='imgContnt'>
          <img className='imgrs' src="./Images/bg-img.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
