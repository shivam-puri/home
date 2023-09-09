import React from 'react'
import '../styling/aboutme.css';

const AboutMe = () => {

    const List = ["HTML/CSS", "JavaScript", "React/Redux", "NextJS", "Firebase", "MongoDB", "NodeJS", "ExpressJS", "Git", "TypeScript", "Directus", "C/C++", "Micro-frontends", "Data Structures & Algorithm"]

    return (
        <section className='aboutme' id='aboutmescroll' >

            <div className="heading_container_about">
                <div className="about_section_heading"><h2>About me</h2></div>

                <div className="about_me_text">
                    <h2> Expert Web Developer | Web Designer | Freelancer</h2>

                    <p>
                        I'm a Web developer with a passion of delivering Top knotch Websites.
                        By offering my expertise in web development, I help businesses to grow their online presence by having modern and up-to-date websites.

                        My strength lies in designing and maintaining responsive websites that provide a seamless and enjoyable user experience.
                        I specialize in creating engaging and dynamic interfaces by writing clean and optimized code. I stay updated with the latest development tools and techniques to ensure that my work is at the cutting edge of technology.
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