import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Download from './components/Download';
import LinksSection from './components/LinksSection';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection />
    <Download />
    <LinksSection />
    {/* <TechStack /> */}

    <AboutMe />
    <Projects />
    <Experience />
    <Contact />
    </div>
  );
}

export default App;
