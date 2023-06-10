import React from 'react'
import '../styling/techstack.css';

const TechStack = () => {
  return (
    <section className='techstack_container' ><p>Tech Stack &nbsp; &nbsp; | </p>
    <div className='tech_icon' >
    <i class="fa-brands fa-html5"></i>
    </div>
    <div className='tech_icon' >
    <i class="fa-brands fa-css3-alt"></i>
    </div>
    <div className='tech_icon' >
    <i class="fa-brands fa-square-js"></i>
    </div>
    <div className='tech_icon' >
    <i class="fa-brands fa-react"></i>
    </div>
    <div className='tech_icon' >
    <i class="fa-brands fa-ethereum"></i>
    </div>
    </section>
  )
}

export default TechStack