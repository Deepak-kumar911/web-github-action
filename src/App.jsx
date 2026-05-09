import About from './components/AboutSection';
import Contact from './components/contactSection';
import Footer from './components/Footer';
import Hero from './components/HeroSection';
import ProjectShowcase from './components/ProjectSection';
import Skills from './components/SkillSetSection';
import Experience from './components/WorkExperience';


function App() {

  return (
    <div className="bg-[#0f0f0f] text-white font-outfit">
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <ProjectShowcase/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App


