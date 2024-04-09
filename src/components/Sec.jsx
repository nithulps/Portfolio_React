import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sec() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      
      {
        breakpoint: 480, // Breakpoint for tablets and smaller devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <>
      <div className='services'>
        <div className='txtp'>
          <li>My Services</li>
          <p className=''>Crafting user-centric web solutions that seamlessly blend creativity and functionality, I specialize in transforming ideas into captivating digital experiences.</p>
          <div className='line'></div>
        </div>
        < div className="slider-container" >
          <Slider className='sldr' {...settings}>

            <div className='cardCusl'>
              <div className='cardone'>

                <h1>UI Development</h1>
                <p className='ptxt'>
                  Designing and implementing the visual <br />
                  elements thatusers interact with on a  <br />
                  website or web application.</p>


              </div>
            </div>
            <div className='cardCusl'>
              <div className='cardtwo'>
                <h1>Responsive </h1>
                <p className='ptxt'>

                  UI designers ensure websites and apps <br />
                  adapt to desktops, laptops, tablets, <br />
                  and smartphones.</p>
              </div>
            </div>
            <div className='cardCusl'>
              <div className='cardthree'>
                <h1>Visual  Design</h1>
                <p>
                  Designers create UI visual elements <br />
                  like layout, typography, color schemes,<br />
                  icons,and buttons. </p>
              </div>
            </div>
            <div className='cardCusl'>
              <div className='cardfour'>
                <h1> Frameworks</h1>
                <p>
                  Developers utilize React.js, AngularJS, <br />
                  Bootsrap and Tailwind CSS to enhance <br /> user experience
                  effectively.
                </p>
              </div>
            </div>
            <div className='cardCusl'>
              <div className='cardfive'>
                <h1>Accessibility</h1>
                <p>Ensuring web apps are accessible to <br />
                  all users by following WCAG standards <br />
                  and best practices.</p>
              </div>
            </div>



          </Slider>
        </div >
      </div >
    </>
  )
}


export default Sec

