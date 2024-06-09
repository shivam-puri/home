import "../index.css"
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";


const Projects = () => {
    return (
        <section id="projects" className="flex flex-col  w-full my-5 mt-10" >
            <h1 className="text-xl font-semibold" >Some of my Favourite <span className=" text-accent underline underline-offset-2 " >Projects</span></h1>

            <div className="py-5 w-full " >
                <div className="mb-4 rounded-md flex flex-col w-full cursor-pointer p-4 hover:bg-hover-bg transition duration-150 ease-in-out fade-in">
                    <h1 className="flex w-full justify-between tracking-wide mb-2 italic">
                        <span>Mentor-Mentee Interaction for University</span>
                        <span className="text-xs" >(private)</span>
                    </h1>
                    <div className="flex w-full px-2 text-sm">
                        <FaReact className="mr-2" />
                        <SiMongodb className="mr-2" />
                        <SiExpress className="mr-3" />
                        <FaNodeJs className="mr-2" />
                    </div>
                    <ul className="text-xs mt-5 list-disc pl-5">
                        <li className="leading-5">Developed a full fledged website for my University from scratch, Benefiting 720+ IT students</li>
                        <li className="leading-5">The website facilitates various functions, including the management of records related to mentor-mentee interactions, document handling, and the assignment of mentor-mentee pairs, among other features.
                        </li>
                        <li className="leading-5">The website is soon going to be live on university’s IP Address.</li>

                    </ul>
                </div>

                {/* https://github.com/shivm29/ecommerce/ */}
                <a href="https://github.com/shivm29/ecommerce/" target="_blank" rel="noopener noreferrer" className="mb-4 rounded-md flex flex-col w-full cursor-pointer p-4 hover:bg-hover-bg transition duration-150 ease-in-out fade-in">
                    <h1 className="flex w-full justify-between tracking-wide mb-2 italic">
                        <span>Vesh Fashion</span>
                        <RiExternalLinkLine className="mr-2" />
                    </h1>
                    <div className="flex w-full px-2 text-sm">
                        <FaReact className="mr-2" />
                        <SiMongodb className="mr-2" />
                        <SiExpress className="mr-3" />
                        <FaNodeJs className="mr-2" />
                    </div>
                    <ul className="text-xs mt-5 list-disc pl-5">
                        <li className="leading-5">User and Admin Panels with Content Management System</li>
                        <li className="leading-5">Login and Signup Authentication</li>
                        <li className="leading-5">Cart and Checkout with Payment Gateway Integration (Braintree)</li>
                        <li className="leading-5">Product Categories, Filters and Recommendations</li>
                        <li className="leading-5">User Profile Management and forgot password functionalities</li>
                    </ul>
                </a>



                <a href="https://github.com/shivm29/VideoCall" target="_blank" rel="noopener noreferrer" className="mb-4 rounded-md flex flex-col w-full cursor-pointer p-4 hover:bg-hover-bg transition duration-150 ease-in-out fade-in">
                    <h1 className="flex w-full justify-between tracking-wide mb-2 italic">
                        <span>Video Calling Site</span>
                        <RiExternalLinkLine className="mr-2" />
                    </h1>
                    <div className="flex w-full px-2 text-sm">
                        <FaReact className="mr-3" />
                        <SiExpress className="mr-3" />
                        <FaNodeJs className="mr-3" />
                    </div>
                    <ul className="text-xs mt-5 list-disc pl-5">
                        <li className="leading-5">Developed a WebRTC-based Videocall website using React, Node, and Express</li>
                        <li className="leading-5">Created a premium and mobile-friendly interface for seamless access on all range of devices.
                        </li>
                    </ul>
                </a>


            </div>
        </section>
    )
}

export default Projects