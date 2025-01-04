'use client'

import Image from 'next/image'

const experiences = [
  {
    company: "Tech Innovators Inc.",
    logo: "/company1-logo.png",
    description: "Led a team of developers in creating a cutting-edge SaaS platform. Implemented agile methodologies, resulting in a 30% increase in project delivery speed."
  },
  {
    company: "Web Solutions Co.",
    logo: "/company2-logo.png",
    description: "Developed and maintained multiple high-traffic websites. Optimized site performance, reducing load times by 40% and improving user engagement metrics."
  }
]

export default function Experience() {

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-neuton">My Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image 
                src={exp.logo} 
                alt={`${exp.company} logo`} 
                width={150} 
                height={150} 
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-2 text-white font-neuton">{exp.company}</h3>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-lg text-gray-300 font-neuton font-light">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

