const Skills = (darkMode) => {
    const skills = ['Edição de Vídeo', 'Copywriting', 'Planejamento', 'Criação de Arte', 'Gestão de Redes Sociais', 'Análise de Métricas', 'SEO', 'Email Marketing', 'Storytelling'];

    return (
        <section id="skills" className={`relative overflow-hidden lg:h-20 lg:px-100 lg:pt-1 md:h-150 flex flex-col lg:justify-center 
        ${darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-100 text-gray-900'}`}>
            
            <div className="relative h-40 flex items-center justify-center overflow-hidden">
                <div className="flex gap-8 animate-scroll whitespace-nowrap">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className={`px-9 py-4 rounded-lg text-2 font-semibold shrink-0 transition-opacity
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