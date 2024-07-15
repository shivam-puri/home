import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Links2 = () => {
    return (
        <section className='w-full  flex-col max-[750px]:flex hidden mt-10' >
            <h1 className="text-xl font-semibold" >Links to other <span className=" text-accent underline underline-offset-2 " >Platforms</span></h1>
            <div className='flex w-full justify-around text-xl mt-5' >
                <a href="https://github.com/shivam-puri" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="my-4 opacity-70 hover:opacity-100 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/shivam-puri-goswami/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="my-4 opacity-70 hover:opacity-100 cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/@whyyshivam" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="my-4 opacity-70 hover:opacity-100 cursor-pointer" />
                </a>
                <a href="https://x.com/shivm_dev" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="my-4 opacity-70 hover:opacity-100 cursor-pointer" />
                </a>

            </div>
        </section>
    )
}

export default Links2