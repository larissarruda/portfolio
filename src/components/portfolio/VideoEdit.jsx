import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const VideoEdit = ({ darkMode }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    {
      id: 1,
      title: 'Video Edit 1',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Video Edit 2',
      url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ'
    },
    {
      id: 3,
      title: 'Video Edit 3',
      url: 'https://www.youtube.com/embed/L_jWHffIx5E'
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
          <iframe
            key={currentVideoIndex}
            src={videos[currentVideoIndex].url}
            className="w-full h-[500px] border-none"
            title={videos[currentVideoIndex].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
              <iframe
                src={video.url}
                className="w-full h-full border-none pointer-events-none"
                title={`Miniatura ${video.title}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
                {video.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 flex items-center px-6">
        <button
          onClick={prevVideo}
          className="bg-white/80 hover:bg-white text-gray-900 h-12 w-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 flex items-center px-6">
        <button
          onClick={nextVideo}
          className="bg-white/80 hover:bg-white text-gray-900 h-12 w-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default VideoEdit