import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { RiFirebaseLine } from "react-icons/ri";
import { SiDirectus } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import "../index.css"



const TechStack = () => {

    return (

        <section className="flex my-5 flex-col w-full" >
            <h1 className="text-xl font-semibold mb-10" >Languages & <span className=" text-accent underline underline-offset-2 " >Technologies</span> I Use</h1>

            <div className="flex flex-wrap w-full" >
                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><FaHtml5 className="text-lg" /> &nbsp; HTML</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><FaCss3Alt className="text-lg" /> &nbsp; CSS</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><IoLogoJavascript className="text-lg" /> &nbsp; JavaScript</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><SiTypescript className="text-lg" /> &nbsp; TypeScript</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><FaReact className="text-lg" /> &nbsp; Reactjs</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><RiNextjsFill className="text-lg" /> &nbsp; Nextjs</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><FaNodeJs className="text-lg" /> &nbsp; Nodejs</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><SiExpress className="text-lg" /> &nbsp; Expressjs</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><SiMongodb className="text-lg" /> &nbsp; MongoDB</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><FaGithub className="text-lg" /> &nbsp; Git/Github</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><PiFileCpp className="text-lg" /> &nbsp; C/C++</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><RiFirebaseLine className="text-lg" /> &nbsp; Firebase</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><SiDirectus className="text-lg" /> &nbsp; Directus</div>

                <div className="flex text-xs border rounded-md p-3 px-6 items-center border-border tracking-wide mr-2 mb-2 cursor-pointer hover:scale-95 transition duration-100 ease-in-out max-[750px]:p-2" ><RiTailwindCssFill className="text-lg" /> &nbsp; Tailwindcss</div>

            </div>
        </section>
    )
}

export default TechStack