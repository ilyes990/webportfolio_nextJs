export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']

  return (
    <section id="skills" className="my-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

