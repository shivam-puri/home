import { GoHome } from "react-icons/go";
import { FaRegFolder } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import ScrollIntoView from 'react-scroll-into-view'


const Header = () => {
    return (
        <div className="flex w-full z-10 sticky top-5 bg-background max-[1160px]:hidden " >
            <div className="flex w-full text-xs tracking-wider items-center py-4 justify-evenly border border-border rounded-lg  shadow-sm " >
                <ScrollIntoView selector="#home">
                    <button className="mx-5 flex items-center opacity-90 hover:text-accent " ><GoHome className="mr-1 text-lg" /> Home</button>
                </ScrollIntoView>
                <ScrollIntoView selector="#projects" >
                    <button className="mx-5 flex items-center  opacity-90  hover:text-accent" ><FaRegFolder className="mr-1 text-lg" /> Projects</button>
                </ScrollIntoView>
                <ScrollIntoView selector="#exp" >
                    <button className="mx-5 flex items-center opacity-90  hover:text-accent" ><IoDocumentTextOutline className="mr-1 text-lg" /> Experience</button>
                </ScrollIntoView>
                <ScrollIntoView selector="#yt" >
                    <button className="mx-5 flex items-center opacity-90  hover:text-accent" ><FiYoutube className="mr-1 text-lg" /> YouTube</button>
                </ScrollIntoView>
            </div>

            
        </div>
    )
}

export default Header