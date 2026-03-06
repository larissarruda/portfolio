import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SocialMedia = ({ darkMode }) => {
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const portfolioPdfs = [
    { id: 1, file: '/hist.pdf', title: 'Histórico Escolar', totalPages: 3 },
    { id: 2, file: '/hist.pdf', title: 'Histórico Escolar 2', totalPages: 3 },
    { id: 3, file: '/hist.pdf', title: 'Histórico Escolar 3', totalPages: 3 }
  ]

  const nextPdf = () => {
    setCurrentPdfIndex((prev) => (prev + 1) % portfolioPdfs.length)
    setCurrentPage(1)
  }

  const prevPdf = () => {
    setCurrentPdfIndex((prev) => (prev - 1 + portfolioPdfs.length) % portfolioPdfs.length)
    setCurrentPage(1)
  }

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < portfolioPdfs[currentPdfIndex].totalPages ? prev + 1 : prev
    )
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const goToPdf = (index) => {
    setCurrentPdfIndex(index)
    setCurrentPage(1)
  }

  return (
    <div className="w-full py-12 px-4 bg-[#242834] rounded-lg shadow-lg relative">
      <div className="max-w-3xl mx-auto relative">
        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}
          >
            {Array.from({ length: portfolioPdfs[currentPdfIndex].totalPages }).map((_, index) => (
              <div key={index} className="w-full flex-shrink-0 h-[600px] relative overflow-hidden">
                <iframe
                  key={`${currentPdfIndex}-${index}`}
                  src={`${portfolioPdfs[currentPdfIndex].file}#page=${index + 1}&toolbar=0&navpanes=0`}
                  className="w-full h-full border-none overflow-hidden block"
                  title={`${portfolioPdfs[currentPdfIndex].title} - Página ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={prevPage}
              className="bg-gray-400 hover:bg-gray-700 text-white px-2 py-1 rounded-full transition-all hover:scale-105"
            >
              Página anterior
            </button>
            <button
              onClick={nextPage}
              className="bg-gray-400 hover:bg-gray-700 text-white px-2 py-1 rounded-full transition-all hover:scale-105"
            >
              Próxima página
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="text-gray-300 text-sm bg-black/50 px-4 py-2 rounded-full">
            PDF {currentPdfIndex + 1} / {portfolioPdfs.length} — Página {currentPage} / {portfolioPdfs[currentPdfIndex].totalPages}
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {portfolioPdfs.map((pdf, index) => (
            <button
              key={pdf.id}
              onClick={() => goToPdf(index)}
              className={`relative h-24 w-32 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                index === currentPdfIndex ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <iframe
                src={`${pdf.file}#page=1&toolbar=0&navpanes=0`}
                className="w-full h-full border-none overflow-hidden block"
                title={`Miniatura ${pdf.title}`}
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold">
                {pdf.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center px-6">
        <button
          onClick={prevPdf}
          className="bg-gray-400 hover:bg-gray-700 text-white p-4 rounded-full transition-all hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-6">
        <button
          onClick={nextPdf}
          className="bg-gray-400 hover:bg-gray-700 text-white p-4 rounded-full transition-all hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  )
}

export default SocialMedia