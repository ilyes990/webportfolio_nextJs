'use client'

import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe integration.",
    image: "/project1.jpg"
  },
  {
    title: "Task Management App",
    description: "A React-based application for organizing and tracking personal and team tasks.",
    image: "/project2.jpg"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills.",
    image: "/project3.jpg"
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather information app using OpenWeatherMap API.",
    image: "/project4.jpg"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-poppins">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white font-poppins">{project.title}</h3>
                <p className="text-gray-300 font-poppins font-light">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

