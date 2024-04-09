import React, { useState } from 'react'

function Works() {

    const [show, setShow] = useState(1);
    return (
        <>
            <div className='works'>
                <div className='txtp'>
                    <li>My Portfolio</li>
                    <p>A collection showcasing my frontend development projects, demonstrating skills and expertise.</p>
                </div>

                <div className='wrkoptions'>
                    <button className={show === 1 ? 'bttn active' : 'bttn'} onClick={() => setShow(1)}>DEVELOPMENT</button>
                    <div className='line2'>|</div>
                    <button className={show === 2 ? 'bttn active' : 'bttn'} onClick={() => setShow(2)}>DESIGNING</button>
                </div>
                {
                    show === 1 ?
                        <>
                            <div className='cards'>
                                <a className='card' href="https://appleclones.netlify.app">
                                    <img className='imgs' src="public/Images/apple.png" alt="" />
                                </a>
                                <a className='card' href="https://grand-lily-56e85f.netlify.app">
                                    <img className='imgs' src="public/Images/counterapp.png" alt="" />
                                </a>
                                <a className='card' href="https://quiet-bavarois-06e721.netlify.app">
                                    <img className='imgs' src="public/Images/strbuks.png" alt="" />
                                </a>
                                <a className='card' href="https://cozy-churros-c1b06b.netlify.app">
                                    <img className='imgs' src="public/Images/burger.png" alt="" />
                                </a>
                            </div>
                        </>
                        :
                        <>
                            <div className='cards'>
                                <a className='Dcard' href="https://www.behance.net/gallery/170935215/Redesigned-app-for-booking-hotelsfoodticketsetc">
                                    <img className='imgs' src="public/Images/TRVL.png" alt="" />
                                </a>
                                <a className='Dcard' href="https://www.behance.net/gallery/174354847/LANDING-PAGE-OF-CYCLE">
                                    <img className='imgs' src="public/Images/CYCLE.png" alt="" />
                                </a>
                                <a className='Dcard' href="https://www.behance.net/gallery/174356605/website-for-healthcare">
                                    <img className='imgs' src="public/Images/HSPTL.png" alt="" />
                                </a>
                                <a className='Dcard' href="https://www.behance.net/gallery/179436761/payment-app">
                                    <img className='imgs' src="public/Images/PYMNT.png" alt="" />
                                </a>

                            </div>
                        </>
                }

            </div>
        </>
    )
}
export default Works