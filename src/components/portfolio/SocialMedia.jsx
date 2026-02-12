import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SocialMedia = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const portfolioImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      title: 'Design UI/UX',
      description: 'Interface moderna e responsiva'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1561537404-a2f29016b523?w=800&q=80',
      title: 'Web Development',
      description: 'Websites dinâmicos e performáticos'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'Branding',
      description: 'Identidade visual e marca'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      title: 'Photoshop',
      description: 'Edição e manipulação de imagens'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1561537404-a2f29016b523?w=800&q=80',
      title: 'Ilustração',
      description: 'Arte digital e criativa'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }
{/* verde: b6ff00  azul claro: #013ff6 azul escuro: #04045e meio preto: #242834*/}
  return (
    <div className={`w-full py-12 px-4 bg-[#242834] rounded-lg shadow-lg`}>
      <div className="max-w-5xl mx-auto">
        
        {/* Carrossel Principal */}
        <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-2xl">
          {/* Imagens */}
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay com informações */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                <p className="text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition-all z-10 hover:scale-110"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition-all z-10 hover:scale-110"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicador de posição */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-300 text-sm bg-black/50 px-4 py-2 rounded-full z-10">
            {currentIndex + 1} / {portfolioImages.length}
          </div>
        </div>

        {/* Thumbnails/Pontos de Navegação */}
        <div className="flex justify-center gap-3 mt-8">
          {portfolioImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-blue-500'
                  : `w-3 ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Grid de Thumbnails (opcional) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
          {portfolioImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialMedia