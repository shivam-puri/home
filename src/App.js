import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Download from './components/Download';
import LinksSection from './components/LinksSection';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


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
    <Contact />
    </div>
  );
}

export default App;
