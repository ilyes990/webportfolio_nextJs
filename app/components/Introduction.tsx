import Image from 'next/image'

export default function Introduction() {
  return (
    <section id="about" className="my-16 text-center">
      <div className="mb-8">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="John Doe"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">John Doe</h1>
      <p className="text-xl mb-8">Web Developer & Designer</p>
      <p className="max-w-2xl mx-auto">
        I'm a passionate web developer with a keen eye for design. I love creating 
        beautiful, functional websites that provide great user experiences.
      </p>
    </section>
  )
}

