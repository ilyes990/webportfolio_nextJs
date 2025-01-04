'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">Skills</a></li>
          <li><a href="#experience" className="hover:text-gray-600 dark:hover:text-gray-300">Experience</a></li>
          <li><a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a></li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  )
}

