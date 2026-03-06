import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Copywriting = ({ darkMode }) => {
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState('objetivo')
  const [currentPage, setCurrentPage] = useState(1)

  const portfolio = [
    {
      id: 1,
      file: '/hist.pdf',
      title: 'Portfolio Copy 1',
      totalPages: 3,
      objetivo: `Objetivo do PDF 1:
O intuito deste texto era realizar determinada ação e alcançar um público específico.
Utilize palavras que provoquem nas pessoas as emoções desejadas.`,
      roteiro: `Roteiro do PDF 1:
- Você se acha muito chato?
Olha para câmera
- Deve ser pq você é mesmo!
Texto escrito: “MAS E AGORA?”
-- Nós temos a solução, basta seguir o roteiro e aplicar as técnicas de copywriting.`
    },
    {
      id: 2,
      file: '/hist.pdf',
      title: 'Portfolio Copy 2',
      totalPages: 3,
      objetivo: `Objetivo do PDF 2:
Aqui você detalha outro objetivo para este material.`,
      roteiro: `Roteiro do PDF 2:
Aqui você descreve outro roteiro para este material.`
    },
    {
      id: 3,
      file: '/hist.pdf',
      title: 'Portfolio Copy 3',
      totalPages: 3,
      objetivo: `Objetivo do PDF 3:
Mais um exemplo de objetivo.`,
      roteiro: `Roteiro do PDF 3:
Mais um exemplo de roteiro.`
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < portfolio[currentPdfIndex].totalPages ? prev + 1 : prev
    )
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const goToPdf = (index) => {
    setCurrentPdfIndex(index)
    setCurrentPage(1)
    setCurrentSection('objetivo')
  }

  const toggleSection = (direction) => {
    if (direction === 'next') {
      setCurrentSection((prev) => (prev === 'objetivo' ? 'roteiro' : 'objetivo'))
    } else {
      setCurrentSection((prev) => (prev === 'roteiro' ? 'objetivo' : 'roteiro'))
    }
  }

  return (
    <div className="w-full py-12 px-4 bg-[#242834] rounded-lg shadow-lg relative">
      <div className="max-w-5xl mx-auto relative grid grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-2xl p-8 bg-[#1f2230] text-white">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => toggleSection('prev')}
              className="bg-white/70 hover:bg-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft size={16} />
            </button>
            <h2 className="text-2xl font-bold capitalize">{currentSection}</h2>
            <button
              onClick={() => toggleSection('next')}
              className="bg-white/70 hover:bg-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <p className="whitespace-pre-line text-lg leading-relaxed">
            {portfolio[currentPdfIndex][currentSection]}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <iframe
            key={`${currentPdfIndex}-${currentPage}`}
            src={`${portfolio[currentPdfIndex].file}#page=${currentPage}&toolbar=0&navpanes=0`}
            className="w-full h-[600px] border-none overflow-hidden block"
            title={`${portfolio[currentPdfIndex].title} - PDF`}
          />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={prevPage}
              className="bg-white/80 hover:bg-white text-gray-900 px-4 py-2 rounded-full transition-all hover:scale-105"
            >
              Página anterior
            </button>
            <button
              onClick={nextPage}
              className="bg-white/80 hover:bg-white text-gray-900 px-4 py-2 rounded-full transition-all hover:scale-105"
            >
              Próxima página
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="text-gray-300 text-sm bg-black/50 px-4 py-2 rounded-full">
          PDF {currentPdfIndex + 1} / {portfolio.length} — {currentSection} — Página {currentPage} / {portfolio[currentPdfIndex].totalPages}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {portfolio.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToPdf(index)}
            className={`relative h-24 w-32 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              index === currentPdfIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <iframe
              src={`${item.file}#page=1&toolbar=0&navpanes=0`}
              className="w-full h-full border-none overflow-hidden block pointer-events-none"
              title={`Miniatura ${item.title}`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
              {item.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Copywriting