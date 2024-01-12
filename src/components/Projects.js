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


                <a
                    target="_blank" rel="noopener noreferrer"
                >
                    <div className="project">
                        <div className="project_info">
                            <div className="project_title">Mentor-Mentee Interaction</div>
                            <div className="project_tech">
                                <i class="fa-brands fa-react"></i> &nbsp;
                                <i class="fa-brands fa-node"></i> &nbsp;
                                <span className='icon_text' >MongoDB</span> &nbsp;
                                <span className='icon_text' >Express</span> &nbsp;

                            </div>
                            <div className="project_des">
                            Developed a comprehensive university website managing mentor-mentee interactions, document handling, and pair assignments. Soon to go live on the university's IP address.
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://odd-gold-basket-clam-cap.cyclic.app//"
                    target="_blank" rel="noopener noreferrer"
                >
                    <div className="project">
                        <div className="project_info">
                            <div className="project_title">Full Stack Fashion Ecom</div>
                            <div className="project_tech">
                                <i class="fa-brands fa-react"></i> &nbsp;
                                <i class="fa-brands fa-node"></i> &nbsp;
                                <span className='icon_text' >MongoDB</span> &nbsp;
                                <span className='icon_text' >Express</span> &nbsp;

                            </div>
                            <div className="project_des">
                            Fashion e-commerce with user/admin panels, CMS, login/signup, cart, payment, categories, responsive UI, recommendations, profile updates, and more.
                            </div>
                        </div>
                    </div>
                </a>
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
    

                <a href="https://64f41b82d2209b61d2574ac5--stellular-dieffenbachia-f6a716.netlify.app/" target="_blank" rel="noopener noreferrer" >
                    <div className="project"  >
                        <div className="project_info">
                            <div className="project_title">Crypto Tracker</div>
                            <div className="project_tech">
                                <i class="fa-brands fa-react"></i> &nbsp;
                            </div>
                            <div className="project_des">
                                A Website Implemented with APIs and React to keep you updated & Tracked with prices of your Favourite Crypto Currencies..
                            </div>
                        </div>
                    </div>
                </a>
               


            </div>



        </section>
    )
}

export default Projects
