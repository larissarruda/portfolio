import React from 'react'
import copywriting from '../assets/copywriting.png';
import socialmedia from '../assets/socialmedia.png';
import videoedit2 from '../assets/videoedit2.png';
import { useState } from "react"
import { motion } from "framer-motion"
import { X} from "lucide-react"

const Projects = ({ darkMode }) => {
    const [isSectionOpen, setSection] = useState(false)
    const [currentSection, setCurrentSection] = useState(null)

    const handleSectionChange = (secName) => {
      if (currentSection === secName) {
        setSection(false)
        setCurrentSection(null)
      } else if (secName === 'close') {
        setSection(false)
        setCurrentSection(null)
      } else {
        setSection(true)
        setCurrentSection(secName)
      }
    }


  return (
     <section id="projects" className={`relative overflow-hidden lg:h-fit lg:px-20 lg:pt-15 md:h-150 flex flex-col lg:justify-center
    ${darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-100 text-gray-900'}`}>
      <div className="card-group sm:flex lg:pb-30 lg:gap-9 sm:pb-20 pb-10 px-4 sm:px-8 lg:px-14 flex-col sm:flex-row items-center justify-center">
  <div className="card w-72 h-90 relative overflow-hidden rounded-lg group">
    <img src={socialmedia} alt="social-media" className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:opacity-60 transition-opacity" />
    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
      <h5 className="card-title mb-2 font-bold">Social Media</h5>
      <p className="text-sm h-20">Criação de arte para redes sociais, planejamento de campanhas e estratégias de marketing digital.</p>
      <button className="btn btn-secondary mt-4 w-30 h-8 cursor-pointer bg-[#007bff] rounded-lg font-bold" onClick={() => handleSectionChange('social-media')}>Exemplos</button>

    </div>
  </div>
  <div className="card w-72 h-90 relative overflow-hidden rounded-lg group">
    <img src={copywriting} alt="copywriting" className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:opacity-60 transition-opacity" />
    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
      <h5 className="card-title mb-2 font-bold">Copywriting</h5>
      <p className="text-sm h-20">Criação de textos persuasivos para anúncios, roteiros de vídeos, legendas de campanhas publicitárias e conteúdo digital.</p>
      <button className={`btn btn-secondary mt-4 w-30 h-8 cursor-pointer bg-[#007bff] rounded-lg font-bold ${currentSection === 'copywriting' ? 'bg-[#044081]' : ''}`} onClick={() => handleSectionChange('copywriting')}>Exemplos</button>
    </div>
  </div>
  <div className="card w-72 h-90 relative overflow-hidden rounded-lg group">
    <img src={videoedit2} alt="video-edit" className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:opacity-60 transition-opacity" />
    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
      <h5 className="card-title mb-2 font-bold">Edição de Vídeos</h5>
      <p className="text-sm h-20">Edição de vídeos curtos para redes sociais, como Reels e Tiktok.</p>
      <button className="btn btn-secondary mt-4 w-30 h-8 cursor-pointer bg-[#007bff] rounded-lg font-bold" onClick={() => handleSectionChange('video-edit')}>Exemplos</button>

    </div>
  </div>

</div>
{/* verde: b6ff00  azul claro: #013ff6 azul escuro: #04045e meio preto: #242834 */}
<div className="px-4 sm:px-8 lg:px-14 mb-10 mx-90">
<div className={`justify-end  ${currentSection ? 'flex justify-center mb-10' : 'hidden'}`}>
    <button className="btn btn-secondary w-10 h-8 cursor-pointer bg-[#b6ff00] rounded-lg font-bold text-black justify-center items-center flex" onClick={() => handleSectionChange('close')}>
      <X className="w-5 h-5" />
    </button>
  </div>
  <div className={`${currentSection === 'copywriting' ? 'block' : 'hidden'}`}>
    <iframe src="https://reinvented-aster-caf.notion.site/ebd//30364bcec435801795e4ea8731c2f753" width="100%" height="600" frameborder="0" allowfullscreen />
  </div>
  <div className={currentSection === 'social-media' ? 'block' : 'hidden'}>
  social media  
  </div>
  <div className={currentSection === 'video-edit' ? 'block' : 'hidden'}>
  video edit
  </div>
  </div>
    
    </section>
  )
}

export default Projects