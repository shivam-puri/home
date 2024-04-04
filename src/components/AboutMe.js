import React from 'react'
import '../styling/aboutme.css';

const AboutMe = () => {

    const List = ["HTML/CSS", "JavaScript", "React/Redux", "NextJS", "Firebase", "MongoDB", "NodeJS", "ExpressJS", "Git/Github", "Directus", "C/C++", "Micro-frontends", "Data Structures & Algorithm"]

    return (
        <section className='aboutme' id='aboutmescroll' >

            <div className="heading_container_about">
                <div className="about_section_heading"><h2>About me</h2></div>

                <div className="about_me_text">
                    <h2> Full-Stack Developer | Problem Solver</h2>

                    <p>
                        Hi! I'm Shivam, a Bachelor of Technology student in Information Technology at Medicaps University.
                        <br />
                        <br />
                        My passion for development has led me to work on various projects, including three full-fledged MERN stack applications. I also honed my skills through a React development internship, focusing primarily on frontend development with some backend involvement for a doctor consultation website.
                        <br />
                        <br />
                        One of my proudest achievements is a full-stack project about to go live on our college's IP address, serving over 720 students within the IT branch. This project was initiated by our esteemed IT department HOD, and I'm expecting to receive a university dean's certificate in recognition of my work.
                        <br />
                        <br />
                        Beyond development, I enjoy sharing knowledge and simplifying complex concepts. During my second year, I mentored over 100 students in multiple batches, teaching Data Structures and Algorithms (DSA) and C++.
                        <br />
                        <br />
                        Finally, I find creating content valuable. My YouTube channel documents my hackathon experiences and offers coding tutorials to help others learn.

                    </p>

                    <div className='tech-stack' >
                        <p>My Skills Include </p>
                        <div className='tech-stack-div' >
                            {List.map((L) => {
                                return (
                                    <a className='skill' > {L} </a>
                                )
                            })}

                        </div>
                    </div>

                </div>
            </div>



        </section>
    )
}

export default AboutMe