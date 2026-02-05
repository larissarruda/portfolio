
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100});
    document.documentElement.classList.add('dark');
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }
/* verde: b6ff00  azul claro: #013ff6 azul escuro: #04045e meio preto: #242834*/
  return (
   <div className= {darkMode 
   ? 'bg-[#013ff6]/90 backdrop-blur-md min-h-screen' 
   : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'}>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Hero darkMode={darkMode} />
    <Skills darkMode={darkMode} />
    <About darkMode={darkMode} />

    <Projects darkMode={darkMode} />
    </div>
  )
}

export default App
