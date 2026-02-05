import React from 'react'

const Projects = (darkMode) => {
  return (
     <section id="projects" className={`relative overflow-hidden lg:h-130 lg:px-65 lg:pt-30 md:h-150 flex flex-col lg:justify-center 
    ${darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-100 text-gray-900'}`}>
        Projects
    </section>
  )
}

export default Projects