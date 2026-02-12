import React from "react";
import copywriting from "../assets/copywriting.png";
import socialmedia from "../assets/socialmedia.png";
import videoedit2 from "../assets/videoedit2.png";
import { useState } from "react";
import { X } from "lucide-react";
import SocialMedia from "./portfolio/SocialMedia.jsx";

const Projects = ({ darkMode }) => {
  const [currentSection, setCurrentSection] = useState(null)

   const sectionItems =[
    {name: 'social-media', displayName: 'Social Media', legenda:'Criação de arte para redes sociais, planejamento de campanhas e estratégias de marketing digital.', image: socialmedia},
    {name: 'copywriting', displayName: 'Copywriting', legenda:'Criação de textos persuasivos para anúncios, roteiros de vídeos, legendas de campanhas publicitárias e conteúdo digital.', image: copywriting},
    {name: 'video-edit', displayName: 'Edição de Vídeos', legenda:'Edição de vídeos curtos para redes sociais, como Reels e Tiktok.', image: videoedit2}
  ]

    const handleSectionChange = (secName) => {
      if (currentSection === secName) {
        setCurrentSection(null)
      } else if (secName === 'close') {
        setCurrentSection(null)
      } else {
        setCurrentSection(secName)
      }
    }

  return (
    <section id="projects" className={`relative overflow-hidden lg:h-fit lg:px-20 lg:pt-15 md:h-150 flex flex-col lg:justify-center
    ${darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="card-group sm:flex lg:pb-30 lg:gap-9 sm:pb-20 pb-10 px-4 sm:px-8 lg:px-14 flex-col sm:flex-row items-center justify-center">
        {sectionItems.map((item) => (
          <div key={item.name} className="card w-72 h-90 relative overflow-hidden rounded-lg group">
          <img
            src={item.image}
            className="absolute inset-0 w-full h-full object-cover grayscale-100 group-hover:grayscale-0"
          />
            {/* verde: b6ff00  azul claro: #013ff6 azul escuro: #04045e meio preto: #242834*/}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-[#013ff6]/30 group-hover:opacity-60 transition-opacity" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <h5 className="card-title mb-2 font-bold">{item.displayName}</h5>
            <p className="text-sm h-20">
              {item.legenda}
            </p>
            <button
              className="btn btn-secondary mt-4 w-30 h-8 cursor-pointer bg-[#b6ff00] text-black rounded-lg font-bold"
              onClick={() => handleSectionChange(item.name)}
            >
              Exemplos
            </button>
          </div>
          
        </div>
        
        ))}
        
      </div>
      {/* verde: b6ff00  azul claro: #013ff6 azul escuro: #04045e meio preto: #242834*/}
      <section id="projects-body" className="px-4 sm:px-8 lg:px-14 mb-10 mx-30">
        <div className={`justify-end  ${currentSection ? 'flex justify-center mb-10' : 'hidden'}`}>
          <button className="btn btn-secondary w-10 h-8 cursor-pointer bg-[#b6ff00] text-black rounded-lg font-bold justify-center items-center flex" onClick={() => handleSectionChange('close')}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full h-auto p-4">
          {sectionItems.map((item) => (
            <div key={item.name} className={`${currentSection === item.name ? 'block' : 'hidden'}`}>
              {item.name === 'social-media' && (
                <SocialMedia />
              )}
              {item.name === 'copywriting' && (
                <div>
                  <iframe src="https://gy6oy75wr203eg6.embednotionpage.com/?v=30464bcec435805891c9000ce9deb857" width="100%" height="600" frameborder="0" allowfullscreen background-color="black"/>
                  artur-portfolio.notion.site/embed
                </div>
                )}
              {item.name === 'video-edit' && (
                <iframe src="https://www.youtube.com/embed/9bZkp7q19f0" width="100%" height="600" frameborder="0" allowfullscreen />
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
/*  */
export default Projects;
