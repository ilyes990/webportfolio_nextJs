"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 font-poppins">Hey</h1>
            <p className="text-lg mb-6 font-poppins font-light">
              I'm Ilyes, 25, a passionate Mobile Developer, and i studied data
              science at the university, but i'm more interested in mobile
              development. i fell i love with Flutter in the beginning of 2023,
              and i started learning it by myself, and i started working on some
              projects, and i started to love it, i built to many side projects,
              and currently i'm working in Software Development company as a
              Flutter Developer.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/johndoe"
                className="text-blue-400 hover:underline font-poppins"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/johndoe"
                className="text-blue-400 hover:underline font-poppins"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/johndoe"
                className="text-blue-400 hover:underline font-poppins"
              >
                Twitter
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/myphoto.png"
              alt="John Doe"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
