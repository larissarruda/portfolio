import React from 'react'

const About = (darkMode) => {
  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
      <div className="container mx-12 px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptates quaerat quo rerum facilis officia amet temporibus qui sequi vero, ratione ab ipsum, odio tempore perspiciatis? Minima quisquam esse vitae.
        </p>
      </div>
    </div>
  )
}

export default About