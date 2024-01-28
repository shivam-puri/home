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
                        I am a full-stack developer whose journey began with learning languages and creating projects from YouTube videos.
                        <hr className='hr-line' ></hr>
                        I secured an internship in a startup, gaining exposure  to real-world production and learning valuable skills such as working with documentation, collaborating in teams, utilizing version control, and participating in effective collaboration.
                        <hr className='hr-line' ></hr>
                        Recently, I developed a website for my university, designed to benefit over 720 students in the IT branch. There are plans to expand its scope to encompass all programs and branches of the university.
                        <hr className='hr-line' ></hr>
                        My experiences in both personal and real-world production-level projects have equipped me to write clean, optimized, and efficient code. I possess strong computer science fundamentals and have a passion for teaching. I conducted cohorts for Data Structures and Algorithms (DSA) and C++ programming, teaching over 100 students across different batches. This not only reinforced my foundational knowledge but also enhanced my communication skills, enabling me to convey ideas in a clear and straightforward manner.
                        <hr className='hr-line' ></hr>
                        As a problem solver, I actively engage in solving problems on platforms like Leetcode.

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