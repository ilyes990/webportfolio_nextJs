'use client'

import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Flutter and Stripe integration (coming soon).",
    image: "/ecommerce.jfif"
  },
  {
    title: "AdvenHive",
    description: "A Flutter-based app for exploring and sharing adventures and planning trips",
    image: "/adventure app.jpg"
  },
  {
    title: "Movie API",
    description: "a movie api that allows you to search for movies and get details about them",
    image: "/movieApi.jfif"
  },
  {
    title: "NodeMVPs",
    description: "Agency website built with Next.js and Tailwind CSS",
    image: "/Frame 26.jpg"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-poppins">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden h-[500px] flex flex-col hover:transform hover:scale-105 transition-transform duration-200">
              <div className="h-[300px] relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1">
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

