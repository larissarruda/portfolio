const Skills = (darkMode) => {
    const skills = ['Edição de Vídeo', 'Copywriting', 'Planejamento', 'Criação de Arte', 'Gestão de Redes Sociais', 'Análise de Métricas', 'SEO', 'Email Marketing', 'Storytelling'];

    return (
        <section id="skills" className={`relative overflow-hidden py-2 sm:py-6 lg:py-0 lg:px-100 flex flex-col lg:justify-center 
        ${darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-100 text-gray-900'}`}>
            
            <div className="relative min-h-14 sm:min-h-24 lg:min-h-20 flex items-center justify-center overflow-hidden">
                <div className="flex gap-4 sm:gap-8 animate-scroll whitespace-nowrap">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className={`px-5 py-2 sm:px-9 sm:py-4 rounded-lg text-xs sm:text-sm font-semibold shrink-0 transition-opacity
                           `}
                        >
                            {skill.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills