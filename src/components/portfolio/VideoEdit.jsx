import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const VideoEdit = ({ darkMode }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    {
      id: 1,
      title: 'Adv - Pensão',
      file: '/Pensao.mp4',
      caption: 'Edição de vídeo, copywriting e pós-produção para o anúncio de pensão alimentícia do escritório de advocacia.'
    },
    {
      id: 2,
      title: 'Evento - Pokemon TCG',
      file: '/Cobertura.mp4',
      caption: `Cobertura de evento, edição, copywriting, narração e pós-produção para o evento do jogo Pokemon - Trade Card Game.`
    },
    {
      id: 3,
      title: 'Evento - One Piece TCG',
      file: '/OPTCG.mp4',
      caption: 'Edição de vídeo, copywriting e pós-produção para o jogo One Piece - Trade Card Game.'
    }
  ]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToVideo = (index) => {
    setCurrentVideoIndex(index)
  }

  return (
    <div className="w-full py-12 px-4 bg-[#242834] rounded-lg shadow-lg relative">
      <div className="max-w-5xl mx-auto relative">
        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black">
          <video
            key={currentVideoIndex}
            controls
            className="w-full h-[500px] border-none"
            title={videos[currentVideoIndex].title}
          >
            <source src={videos[currentVideoIndex].file} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>

          <div className="absolute top-1/2 left-0 flex items-center px-6 -translate-y-1/2">
            <button
              onClick={prevVideo}
              className="bg-white/80 hover:bg-white text-gray-900 h-12 w-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 flex items-center px-6 -translate-y-1/2">
            <button
              onClick={nextVideo}
              className="bg-white/80 hover:bg-white text-gray-900 h-12 w-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-4 p-4 bg-[#1f2230] rounded-lg text-white">
          <p className="text-lg leading-relaxed">{videos[currentVideoIndex].caption}</p>
        </div>

        <div className="flex justify-center mt-6">
          <div className="text-gray-300 text-sm bg-black/50 px-4 py-2 rounded-full">
            Vídeo {currentVideoIndex + 1} / {videos.length}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToVideo(index)}
              className={`relative h-24 w-32 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                index === currentVideoIndex ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={video.file.replace('.mp4', '.jpg')}
                alt={`Preview ${video.title}`}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
                {video.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoEdit