import React from 'react'
import '../styling/experience.css';


const Experience = () => {
    return (
        <section
            className='experience_container'
        >
            <div className="experience_heading">
                <h2>Experience</h2>
            </div>

       
        <div className="experiences">
           
           <div className="experience">
               <div className="experience_info">
                   <div className="experience_title">
                   Technical Executive at ACM chapter
                   </div>

                   <div className="experience_time">
                    Oct 2023 - Present
                   </div>
                   <div className="experience_des">
                   Technical Executive at Medicaps University ACM Chapter. Handle Tasks related to Development and Mentorship.
                   </div>
               </div>
           </div>
           <div className="experience">
               <div className="experience_info">
                   <div className="experience_title">
                   React Dev Intern in Qureal (Startup)
                   </div>

                   <div className="experience_time">
                    Jan 2023 - Mar 2023
                   </div>
                   <div className="experience_des">
                  Honed my skills in react development with my first Internship in a Startup. Worked on technologies like Directus, Micro-frontends, Semantic-UI and much more.
                
                   
                   </div>
               </div>
           </div>
           <div className="experience">
               <div className="experience_info">
                   <div className="experience_title">
                   DSA Instructor
                   </div>

                   <div className="experience_time">
                    July 2022 - Nov 2022
                   </div>
                   <div className="experience_des">
                   As a proficient DSA expert, I conducted multiple batches of DSA and C++, delivered engaging and high value lectures to 100+ students during my second year.
                <br />
                <br />
                   <a href="https://www.linkedin.com/in/shivam-puri-goswami-041081200/" 
                   target="_blank" rel="noopener noreferrer"
                   >`Know more on Linkedin.`</a>
                   </div>
               </div>
           </div>
          
           
       </div>
        

        </section>
    )
}

export default Experience