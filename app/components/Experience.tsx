"use client";

import Image from "next/image";

const experiences = [
  {
    link: "https://biginformatique.com/",
    company: "Big Informatique",
    logo: "/logoBigInformatique.png",
    description: [
      "• I Developed a Quality Management System (QMS) mobile app from scratch with flutter certified by ISO 9001, and the team uses it as an alternative to Jira",
      "• Took charge of Migration process",
      "• API integration",
      "• Code refactoring",
      "• Worked with : MVVM, Provider Scope, Riverpod, Clean architecture, GoRouter",
    ].join("\n"),
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-poppins">
          My Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-12"
          >
            <div className="md:w-1/3 mb-4 md:mb-0 flex flex-col items-center">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={250}
                height={250}
                className="mx-auto"
              />
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-center mt-2 text-white font-poppins"
              >
                {exp.company}
              </a>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-lg text-gray-300 font-poppins font-light whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
