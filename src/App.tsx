import Cohort from "./components/Cohort";
import Experience from "./components/Experience";
import Header from "./components/Header"
import IntroSection from "./components/IntroSection";
import Links from "./components/Links";
import Links2 from "./components/Links2";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import YouTube from "./components/YouTube";
import ScrollIntoView from "react-scroll-into-view";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
import "./index.css"


function App() {

  const [opendrawer, setOpendrawer] = useState(false)

  const sidebarRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside the sidebar drawer
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpendrawer(false); // Close the drawer
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div className="max-[400px]:text-xs font-primary bg-background text-foreground min-h-screen justify-center flex w-full" >
      <Links />
      <div className="flex flex-1 justify-center" >
        <div className="w-2/5  max-[1160px]:w-3/5  max-[750px]:w-full max-[750px]:px-4  flex flex-col " >
          <div className="w-full z-10 sticky top-0 h-5 bg-background max-[750px]:bg-transparent" ></div>
          <Header />
          <div className="w-full top-0 sticky z-10 h-5 text-xl  bg-transparent min-[750px]:hidden flex justify-end" >
            <HiOutlineBars3BottomRight onClick={() => setOpendrawer(true)} />
          </div>
          <div className="px-1" >
            <IntroSection />
            <TechStack />
            <Links2 />
            <Projects />
            <Experience />
            <Cohort />
            <YouTube />
          </div>
        </div>
      </div>

      <div ref={sidebarRef} className={`flex fixed flex-col h-screen z-20 w-2/3 top-0 right-0 pt-10 px-2 bg-background border-l shadow-2xl border-border box-border sidebar ${opendrawer ? 'open' : 'hidden'}`} >
        <div>
          <ScrollIntoView selector="#home">
            <button onClick={() => setOpendrawer(false)} className="my-5 ml-2 flex items-center opacity-90 hover:text-accent " >Home</button>
          </ScrollIntoView>
          <ScrollIntoView selector="#projects" >
            <button onClick={() => setOpendrawer(false)} className="my-5 ml-2 flex items-center  opacity-90  hover:text-accent" >Projects</button>
          </ScrollIntoView>
          <ScrollIntoView selector="#exp" >
            <button onClick={() => setOpendrawer(false)} className="my-5 ml-2 flex items-center opacity-90  hover:text-accent" > Experience</button>
          </ScrollIntoView>
          <ScrollIntoView selector="#cohorts" >
            <button onClick={() => setOpendrawer(false)} className="my-5 ml-2 flex items-center opacity-90  hover:text-accent" > Cohorts</button>
          </ScrollIntoView>
          <ScrollIntoView selector="#yt" >
            <button onClick={() => setOpendrawer(false)} className="my-5 ml-2 flex items-center opacity-90  hover:text-accent" > YouTube</button>
          </ScrollIntoView>
        </div>
      </div>

    </div>
  )
}

export default App
