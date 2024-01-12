import React from 'react'
import '../styling/contact.css'

const Contact = () => {
  return (
    <section className='contact_section' id='contactscroll' >
        <div className="contact_heading">
            CONTACT
        </div>
        <div className="contact_line">
        Don't be Shy, Drop me a Line! &nbsp; 👇
        </div>

        <div className="contact_links_container">
            <div className="contact_link">
                <div className="contact_icon"><i class="fa-regular fa-envelope"></i></div>
                <div className="contact_details">
                    <div className="contact_head">MAIL</div>
                    <div className="contact_hyperlink">
                        <a href="mailto:puri46394@gmail.com">puri46394@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="contact_link">
                <div className="contact_icon"><i class="fa-solid fa-location-dot"></i></div>
                <div className="contact_details">
                    <div className="contact_head">LOCATION</div>
                    <div className="contact_hyperlink">
                        <a href="">Indore,&nbsp;India</a>
                    </div>
                </div>
            </div>
            
           
        </div>
    </section>
  )
}

export default Contact