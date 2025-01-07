"use client";

import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    title: "Mobile Development",
    image: "/flutter.png",
  },
  {
    title: "Backend",
    image: "/supabase.png",
  },
  {
    title: "Landing pages",
    image: "/Landingpage.png",
  },
  {
    title: "App & Web Design",
    image: "/Webdesign.png",
  },
  {
    title: "Clean architecture",
    image: "/cleanarchitecture.png",
  },
  {
    title: "API integration",
    image: "/api.png",
  },
  {
    title: "AI integration",
    image: "/gemini.png",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="w-full bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white font-poppins">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 hover:transform hover:scale-125 transition-transform duration-200 w-[200px]"
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-poppins font-medium text-white text-center">
                  {skill.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/skills"
              className="px-8 py-3 border border-white text-white font-poppins font-medium rounded-md 
                hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
