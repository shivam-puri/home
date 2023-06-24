import React from 'react'
import '../styling/projects.css';

const Projects = () => {
    return (
        <section className='projects_section' id='projectscroll' >

            <div className="projects_section_heading"><h2>Favourite&nbsp;Projects</h2></div>

            <div className="projects_text_head">
                <h2>
                    Every Project is a Distinctive Work of Dev Art
                </h2>
            </div>

            <div className="projects" >

               <a href="https://zippy-kitsune-87dd9f.netlify.app/"
               target="_blank" rel="noopener noreferrer"
               >
               <div className="project">
                    <div className="project_info">
                        <div className="project_title">Video Calling Site</div>
                        <div className="project_tech">
                            <i class="fa-brands fa-react"></i> &nbsp;
                            <i class="fa-brands fa-node"></i>
                        </div>
                        <div className="project_des">
                            Designed and developed a premium looking and mobile friendly videocalling site using WebRTC.
                        </div>
                    </div>
                </div>
               </a>

                <a 
                href="https://fluffy-starlight-b4577f.netlify.app/" target="_blank" rel="noopener noreferrer"
                >
                <div className="project">
                    <div className="project_info">
                        <div className="project_title">UrbanEstate</div>
                        <div className="project_tech">
                            <i class="fa-brands fa-ethereum"></i> &nbsp;
                            <i class="fa-brands fa-react"></i>
                        </div>
                        <div className="project_des">
                            Developed a cutting-edge Web 3.0 Real Estate App akin to Zillow. employed Solidity, Ethereum, Hardhat, and React to create a decentralized platform for property transactions using Metamask and seamless user experience.
                        </div>
                    </div>
                </div>

                </a>
                <a href="https://vermillion-mermaid-44c887.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="project">
                        <div className="project_info">
                            <div className="project_title">ToDo List</div>
                            <div className="project_tech">
                                <i class="fa-brands fa-html5"></i> &nbsp;
                                <i class="fa-brands fa-css3-alt"></i> &nbsp;
                                <i class="fa-brands fa-react"></i>
                            </div>
                            <div className="project_des">
                                Developed a minimalist Todo List app in React with data persistence, ensuring your tasks are saved across sessions.
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://shivm29.github.io/_snakegame/" target="_blank" rel="noopener noreferrer" >
                    <div className="project"  >
                        <div className="project_info">
                            <div className="project_title">Snaker</div>
                            <div className="project_tech">
                                <i class="fa-brands fa-html5"></i> &nbsp;
                                <i class="fa-brands fa-css3-alt"></i> &nbsp; <i class="fa-brands fa-square-js"></i>
                            </div>
                            <div className="project_des">
                                Created a classic Snake Game using HTML, CSS, and JavaScript. Dive into nostalgia with this interactive and addictive game that challenges your reflexes and strategic thinking.
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://shivm29.github.io/skye/index.html" target="_blank" rel="noopener noreferrer">
                    <div className="project" >
                        <div className="project_info">
                            <div className="project_title">Skye</div>
                            <div className="project_tech">
                                <i class="fa-brands fa-html5"></i> &nbsp;
                                <i class="fa-brands fa-css3-alt"></i> &nbsp; <i class="fa-brands fa-square-js"></i>
                            </div>
                            <div className="project_des">
                                Crafted a captivating fashion website using HTML, CSS, and JavaScript. Immerse yourself in a stylish online destination that features stunning visuals, intuitive navigation, interactive elements, and seamless shopping for fashion-forward individuals
                            </div>
                        </div>
                    </div>
                </a>


            </div>



        </section>
    )
}

export default Projects
