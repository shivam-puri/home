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
                   Freelancer
                   </div>

                   <div className="experience_time">
                    June 2023 - Present
                   </div>
                   <div className="experience_des">
                   As a passionate Full-stack developer, I am continuously sharpening my skills by immersing myself in a range of client projects. By diligently understanding and fulfilling their unique requirements, I consistently deliver exceptional value to my clients.
                
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
                   >`Learn more on Linkedin.`</a>
                   </div>
               </div>
           </div>
          
           
       </div>
        

        </section>
    )
}

export default Experience