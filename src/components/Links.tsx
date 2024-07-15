import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Links = () => {
    return (
        <div className="max-[750px]:hidden top-0 sticky flex h-screen w-12 items-center justify-center flex-col border-r border-border text-md " >
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
    )
}

export default Links