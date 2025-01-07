"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-poppins font-light">
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#formation" 
              onClick={(e) => handleScroll(e, 'formation')}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#skills"
              onClick={(e) => handleScroll(e, 'skills')}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#how-i-work"
              onClick={(e) => handleScroll(e, 'how-i-work')}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              How I Work
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#experience"
              onClick={(e) => handleScroll(e, 'experience')}
              className="text-white hover:text-gray-400 cursor-pointer"
            >
              Experience
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col font-poppins font-light">
            <li>
              <a 
                href="#about"
                onClick={(e) => {
                  handleScroll(e, 'about');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#formation"
                onClick={(e) => {
                  handleScroll(e, 'formation');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#skills"
                onClick={(e) => {
                  handleScroll(e, 'skills');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#how-i-work"
                onClick={(e) => {
                  handleScroll(e, 'how-i-work');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                How I Work
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                onClick={(e) => {
                  handleScroll(e, 'projects');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience"
                onClick={(e) => {
                  handleScroll(e, 'experience');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700"
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
