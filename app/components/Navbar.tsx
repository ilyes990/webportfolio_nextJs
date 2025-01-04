'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Image 
          src="/Ilyes Sissaoui.png" 
          alt="Ilyes Sissaoui" 
          width={180} 
          height={150} 
          priority
        />
        <ul className="flex space-x-6 font-neuton font-light">
          <li><Link href="#about" className="text-white hover:text-gray-300">About Me</Link></li>
          <li><Link href="#contact" className="text-white hover:text-gray-300">Contact Me</Link></li>
          <li><Link href="#how-i-work" className="text-white hover:text-gray-300">How I Work</Link></li>
          <li><Link href="#projects" className="text-white hover:text-gray-300">Projects</Link></li>
          <li><Link href="#experience" className="text-white hover:text-gray-300">Experience</Link></li>
        </ul>
      </div>
    </nav>
  )
}

