import React from 'react'
import '../styling/herosection.css'


const HeroSection = () => {
  return (
    <section className='hero_section_container' id='homescroll' >
        <div className="hero_section">
         <div className="profile_image">
            <img src="images/me.jpeg" className='circular--square'  alt="" />
         </div>
         <div className="intro_text">
            <p>Hi, I'm Shivam</p>
            &nbsp; 
            &nbsp; 
            <img  height="14px" src="images/waving-hand.png" alt="" />
         </div>
         <div className="main_text">
            <h2> Expert Web Developer & Freelancer</h2>
         </div>
        </div>
    </section>
  )
}

export default HeroSection