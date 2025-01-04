'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import Experience from './components/Experience'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <HowIWork />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}

