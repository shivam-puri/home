import React from 'react'
import '../styling/linkssection.css';
const LinksSection = () => {
    return (
        <section className='links_section' >
            <div className="link">
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/shivam-puri-goswami-041081200/" target="_blank" rel="noopener noreferrer"> <h2>Linkedin</h2>  </a>
            </div>
            <div className="link">
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/shivm29" target="_blank" rel="noopener noreferrer"> <h2>Github</h2>  </a>
            </div>
            <div className="link">
                <i class="fa-brands fa-youtube"></i>
                <a href="https://www.youtube.com/@whyyshivam" target="_blank" rel="noopener noreferrer"> <h2>YouTube</h2>  </a>
            </div>
            {/* <div className="link">
        <i class="fa-brands fa-instagram"></i> 
            <a href=""> <h2>Instagram</h2>  </a> 
        </div> */}
            <div className="link">
                <i class="fa-regular fa-envelope"></i>
                <a href="mailto:shivm.onweb@gmail.com"> <h2>Gmail</h2>  </a>
            </div>
        </section>
    )
}


export default LinksSection