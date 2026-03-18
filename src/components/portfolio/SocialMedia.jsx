import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import * as pdfjsLib from 'pdfjs-dist'

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

const SocialMedia = () => {
  const portfolioPdfs = [
    { id: 1, file: '/Burnout.pdf', title: 'Burnout' },
    { id: 2, file: '/Pain.pdf', title: 'CBLOL' },
    { id: 3, file: '/KLG.pdf', title: 'KLG Catálogo' }
  ]

  const [pdfData, setPdfData] = useState([])
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0)
  const [thumbnails, setThumbnails] = useState({})
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    const loadAllPdfs = async () => {
      const data = []
      for (const pdfInfo of portfolioPdfs) {
        const loadingTask = pdfjsLib.getDocument(pdfInfo.file)
        const pdf = await loadingTask.promise
        const pagePromises = []
        for (let i = 1; i <= pdf.numPages; i++) {
          pagePromises.push(pdf.getPage(i))
        }
        const loadedPages = await Promise.all(pagePromises)
        data.push({ id: pdfInfo.id, title: pdfInfo.title, pages: loadedPages })
      }
      setPdfData(data)
    }
    loadAllPdfs()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const generateThumbnails = async () => {
      const thumbs = {}
      for (const pdf of portfolioPdfs) {
        try {
          const loadingTask = pdfjsLib.getDocument(pdf.file)
          const doc = await loadingTask.promise
          const firstPage = await doc.getPage(1)
          const viewport = firstPage.getViewport({ scale: 0.5, rotation: firstPage.rotate })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width
          await firstPage.render({ canvasContext: context, viewport }).promise
          thumbs[pdf.id] = canvas.toDataURL()
        } catch (error) {
          console.error('Error loading thumbnail for', pdf.title, error)
          thumbs[pdf.id] = null
        }
      }
      setThumbnails(thumbs)
    }
    generateThumbnails()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(currentPdfIndex)
    }
  }, [currentPdfIndex, swiper])

  const goToNextPdf = () => {
    setCurrentPdfIndex((prev) => (prev + 1) % portfolioPdfs.length)
  }

  const goToPrevPdf = () => {
    setCurrentPdfIndex((prev) => (prev - 1 + portfolioPdfs.length) % portfolioPdfs.length)
  }

  return (
    <div className="w-full py-8 sm:py-12 px-3 sm:px-4 bg-[#242834] rounded-lg shadow-lg flex flex-col items-center">
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={1}
        spaceBetween={30}
        modules={[]}
        className="pdf-swiper w-full"
        onSlideChange={(swiper) => setCurrentPdfIndex(swiper.activeIndex)}
      >
        {pdfData.map((pdf, pdfIndex) => (
          <SwiperSlide key={pdfIndex}>
            <div className="relative w-full max-w-[800px] h-[320px] sm:h-[600px] overflow-hidden rounded-lg shadow-xl bg-[#242834] flex items-center justify-center">
              <Swiper
                slidesPerView={1.1}
                centeredSlides={true}
                spaceBetween={12}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="page-swiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                  }
                }}
              >
                {pdf.pages.map((page, pageIndex) => (
                  <SwiperSlide key={pageIndex}>
                    <canvas
                      ref={async (canvasEl) => {
                        if (canvasEl && page) {
                          const viewport = page.getViewport({ scale: 1, rotation: page.rotate })
                          const containerWidth = 800
                          const containerHeight = 600
                          const scale = Math.min(containerWidth / viewport.width, containerHeight / viewport.height)
                          const scaledViewport = page.getViewport({ scale, rotation: page.rotate })
                          const context = canvasEl.getContext('2d')
                          canvasEl.width = scaledViewport.width
                          canvasEl.height = scaledViewport.height
                          await page.render({ canvasContext: context, viewport: scaledViewport }).promise
                        }
                      }}
                      className="max-w-full max-h-[300px] sm:max-h-[600px] mx-auto object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm text-center bg-black/50 px-2 sm:px-3 py-2 rounded-full">
          <button
            onClick={goToPrevPdf}
            className="bg-white/70 hover:bg-white text-gray-900 h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
            aria-label="PDF anterior"
          >
            <ChevronLeft size={14} />
          </button>

          {`PDF ${currentPdfIndex + 1} / ${portfolioPdfs.length} — ${portfolioPdfs[currentPdfIndex]?.title ?? ''}`}

          <button
            onClick={goToNextPdf}
            className="bg-white/70 hover:bg-white text-gray-900 h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full transition-all hover:scale-110"
            aria-label="Próximo PDF"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="hidden sm:flex justify-center gap-3 mt-8">
        {pdfData.map((pdf, index) => (
          <button
            key={pdf.id}
            onClick={() => setCurrentPdfIndex(index)}
            className={`relative h-20 w-28 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              index === currentPdfIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {thumbnails[pdf.id] ? (
              <img
                src={thumbnails[pdf.id]}
                alt={`Miniatura ${pdf.title}`}
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-xs">
                {pdf.title}
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
              {pdf.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia