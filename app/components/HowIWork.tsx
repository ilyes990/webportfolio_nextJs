"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-white font-poppins">
              How I Work
            </h2>
            <p className="text-lg mb-6 text-gray-300 font-poppins font-light">
              here's a detailed description, i explain my process
              and how i build apps, and also i built a flutter template where you can see my own way of working even better, it's paid but you can check the documentation for free
            </p>
            <Link
              href="https://medium.com/@ilyes.sissaoui/a-dive-into-advanced-flutter-concepts-and-tools-701eba09ea3e"
              className="text-blue-400 hover:underline font-poppins"
              target="_blank"
              rel="noopener noreferrer"
            >
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
  );
}
