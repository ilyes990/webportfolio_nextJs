"use client";

import Image from "next/image";
import Link from "next/link";

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Faculty of engineering sciences Bordj El Badji Mokhtar University",
    period: "2020 - 2022",
    description:
      "I studied Computer Science at the University of El Bordj El Badji Mokhtar, where I gained a solid foundation in programming, algorithms, and software development. I also learned about database management and system architecture.",
    image: "/computer-science.png",
  },
  {
    degree: "Master's Degree in Big Data anaylisis and Management",
    institution: "Faculty of engineering sciences Bordj El Badji Mokhtar University",
    period: "2017 - 2020",
    description:
      "Specialized in data analysis, machine learning, and statistical modeling. Developed strong analytical and problem-solving skills through various projects and research work.",
    image: "/BigData.png",
  },
];

export default function Formation() {
  return (
    <section id="formation" className="py-20">
      <div className="w-full bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-9 text-center text-white font-poppins">
            Education
          </h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-20  p-8 mb-8"
            >
              <div className=" relative h-[150px] w-[150px]">
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white font-poppins">
                  {edu.degree}
                </h3>
                <Link
                  href="https://www.univ-annaba.dz/"
                  target="_blank"
                  className="text-xl text-blue-400 font-poppins"
                >
                  {edu.institution}
                </Link>
                <p className="text-gray-300 font-poppins font-light">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
