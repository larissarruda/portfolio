import React from 'react';
import cutiepie from '../assets/cutiepie-green-torto.png';

const About = (darkMode) => {
    return (
        <section
            id="about"
            className={`relative overflow-hidden lg:h-130 lg:px-65 lg:pt-8 md:h-150 flex flex-col lg:justify-center 
        ${darkMode 
        ? 'bg-[#013ff6] text-white' 
        : 'bg-gray-100 text-gray-900'} `}
        >
            <div
                className="container mx-auto px-4 sm:px-8 lg:px-14 py-20 lg:py-30 flex flex-col lg:flex-row items-center lg:items-start "
                data-aos="fade-down"
                data-aos-delay="250"
            >
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
                    <img
                        src={cutiepie}
                        alt="Artur Schlichting"
                        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
                    />
                </div>
                
                <div className="lg:w-1/2 w-full lg:pl-10 mt-10 lg:mt-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:text-right">Sobre mim</h2>
                    <p className="mb-4 leading-relaxed text-justify">
                        Me chamo Artur, sou um Social Media e Copywriter apaixonado por criar conexões autênticas entre marcas e pessoas.
                    </p>
                    <p className="mb-4 leading-relaxed text-justify">
                        Com uma abordagem estratégica e criativa, ajudo empresas a contar suas histórias de maneira envolvente, impulsionando seu crescimento e engajamento nas redes sociais. Minha missão é transformar ideias em conteúdo impactante que ressoe com o público, elevando a presença digital das marcas a novos patamares.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;