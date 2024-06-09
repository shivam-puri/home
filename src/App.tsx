import Cohort from "./components/Cohort";
import Experience from "./components/Experience";
import Header from "./components/Header"
import IntroSection from "./components/IntroSection";
import Links from "./components/Links";
import Links2 from "./components/Links2";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import YouTube from "./components/YouTube";

function App() {

  return (
    <div className="max-[400px]:text-xs font-primary bg-background text-foreground min-h-screen justify-center flex w-full" >
      <Links />
      <div className="flex flex-1 justify-center" >
        <div className="w-2/5  max-[1160px]:w-3/5  max-[750px]:w-full max-[750px]:px-4  flex flex-col " >
          <div className="w-full z-10 sticky top-0 h-5 bg-background" ></div>
          <Header />
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
      {/* <div className="flex fixed flex-col h-screen z-20 w-2/3 top-0 right-0 pt-10 px-2 bg-background border-l border-border box-border" >hisd</div> */}

    </div>
  )
}

export default App
