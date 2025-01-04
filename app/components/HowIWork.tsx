'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-white font-poppins">How I Work</h2>
            <p className="text-lg mb-6 text-gray-300 font-poppins font-light">
              I believe in a collaborative approach to web development. My process 
              involves understanding client needs, creating detailed wireframes, 
              and iterating based on feedback. I focus on clean, efficient code 
              and user-centric design to deliver outstanding results.
            </p>
            <Link href="/blog" className="text-blue-400 hover:underline font-poppins">
              Read more on my blog
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/mockup_website.png" 
              alt="Work process mockup" 
              width={500} 
              height={300} 
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

