import { useState } from "react"
import { MdOutlineCode } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";



const IntroSection = () => {

    const [e1, setE1] = useState(false)
    const [e2, setE2] = useState(false)
    const [e3, setE3] = useState(false)
    const [e4, setE4] = useState(false)
    const [e5, setE5] = useState(false)

    const [isCopied, setIsCopied] = useState(false);


    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("shivm.onweb@gmail.com");
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000); // Reset copied state after 3 seconds
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section id="home" className="max-[750px]:mt-5 flex w-full flex-col mb-12 mt-16" >
            <div className="flex items-center mb-6" >
                <img src="/DP.jpeg" className="h-20 rounded-full mr-4" alt="" />
                <div className="flex flex-col" >
                    <h1 className="text-lg" >Shivam Puri</h1>
                    <p className="text-sm opacity-70" >Full Stack Developer & Problem Solver </p>
                </div>
            </div>

            <div className="flex w-full justify-center text-sm tracking-wide items-center" >
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2" ></div> &nbsp;  <p className="opacity-70" >Open to new opportunities</p>
            </div>

            <div className="flex w-full items-center justify-center mt-5 mb-10" >
                <a href="mailto:shivm.onweb@gmail.com" className="rounded-md px-4 font-semibold py-1 bg-foreground text-background text-sm items-center flex transition duration-150 ease-in-out hover:scale-95" >Contact Me &nbsp; <IoMailOutline /></a>

                &nbsp; <span className="text-sm opacity-60 mx-3" >or</span> &nbsp;
                <button onClick={copyToClipboard} className="rounded-md px-4 font-semibold py-1 border border-border text-sm flex items-center  transition duration-150 ease-in-out hover:scale-95" > {isCopied ? "Copied!" : "Copy Email"} &nbsp; <RxCopy /></button>
            </div>

            <p className="text-sm tracking-wide text-fade-foreground" >Hey! I'm Shivam. Currently a final year Under Graduate &nbsp; {e1 ? <span className=" font-medium text-accent underline underline-offset-4 " >Pursuing Bachelor's of Technology from Information Technology in Indore</span> : <button onClick={() => setE1(true)} className="px-1 align-middle hover:bg-zinc-600 m-0 rounded-md h-fit bg-zinc-700" ><MdOutlineCode /></button>}. &nbsp;  I'm a full-stack developer who loves solving problems. &nbsp;  {e2 ? <span className="font-medium text-accent underline underline-offset-4" >I have solved over 300 problems on LeetCode and other competitive programming platforms.</span> : <button onClick={() => setE2(true)} className="px-1 align-middle hover:bg-zinc-600 m-0 rounded-md h-fit bg-zinc-700" ><MdOutlineCode /></button>} &nbsp;

                My passion for development has led me to work on numerous projects. Among them, three are full-fledged projects based on the MERN stack. &nbsp;  {e3 ? <span className="font-medium text-accent underline underline-offset-4" >One notable project was developed for my university at the request of our esteemed HOD, benefiting 720 students and 30+ professors in my department.</span> : <button onClick={() => setE3(true)} className="px-1 align-middle hover:bg-zinc-600 m-0 rounded-md h-fit bg-zinc-700" ><MdOutlineCode /></button>} &nbsp;

                <br />
                <br />

                I have also completed a software development internship at a startup, where I primarily worked as a frontend developer. &nbsp;  {e4 ? <span className="font-medium text-accent underline underline-offset-4" >During this internship, I contributed to a doctor consulting project, handling API integration, creating reusable components, and getting familiar with module federation.</span> : <button onClick={() => setE4(true)} className="px-1 align-middle hover:bg-zinc-600 m-0 rounded-md h-fit bg-zinc-700" ><MdOutlineCode /></button>} &nbsp;

                <span className="text-foreground" >Currently, I'm a software developer intern at Walkover.</span>

                Beyond development, I have a passion for teaching. During my second year, I conducted multiple offline cohorts, &nbsp;  {e5 ? <span className="font-medium text-accent underline underline-offset-4" >teaching DSA and C++ to nearly 100 students, including juniors, batchmates, and some seniors.</span> : <button onClick={() => setE5(true)} className="px-1 align-middle hover:bg-zinc-600 m-0 rounded-md h-fit bg-zinc-700" ><MdOutlineCode /></button>} &nbsp;

                <br />
                <br />

                Additionally, I find creating content valuable, which led me to start a YouTube channel where I share coding tutorials and hackathon experiences.

                <br />
                As for my hobbies, they tend to change frequently, but some constants are writing, watching anime, and deeply understanding my favorite characters.</p>
        </section>
    )
}

export default IntroSection