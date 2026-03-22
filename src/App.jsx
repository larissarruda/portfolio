
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
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
/* verde: f15400  azul claro: #0b1925 azul escuro: #04045e meio preto: #242834*/
  return (
   <div className= {darkMode 
   ? 'bg-[#0b1925]/90 backdrop-blur-md min-h-screen' 
   : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'}>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Hero darkMode={darkMode} />
    <Skills darkMode={darkMode} />
    <About darkMode={darkMode} />

    <Projects darkMode={darkMode} />
    <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
