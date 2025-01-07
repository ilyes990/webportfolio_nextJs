"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {  FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 mx-5"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image className="mb-8" src="/apple-icon.png" alt="logo" width={100} height={100} />
            <h1 className="text-4xl font-bold mb-6 font-poppins">Hey</h1>
            <p className="text-lg mb-6 font-poppins font-light">
              I&apos;m Ilyes, 25, a passionate {""}<span className="bg-blue-900 px-1 rounded">Mobile Developer</span>{""}. I studied Big Data analysis and Management at university, but I&apos;m more interested in mobile
              development. I fell in love with Flutter at the Ending of 2022
              and started learning it on my own. I worked on various projects
              and grew to love it even more. I&apos;ve built many side projects, and
              currently, I&apos;m working at a software development company as a
              Flutter Developer.
            </p>
            
            <p className="text-lg mb-6 font-poppins font-light">
              I speak {""} <span className="bg-blue-900 px-1 rounded">English</span> {""} <span className="bg-blue-900 px-1 rounded">French</span> {""} and {""} <span className="bg-blue-900 px-1 rounded">Arabic</span> {""} which
              helps me communicate effectively with a diverse range of people.
            </p>

            <p className="text-lg mb-6 font-poppins">Contact me</p>
            <div className="flex space-x-8 justify-center">
              <Link
                href="https://github.com/ilyes990"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-poppins"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/ilyes-sissaoui-77a964250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-poppins"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://x.com/ReachIlyes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-poppins"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=ilyes.sissaoui@gmail.com`}
                className="text-blue-400 hover:underline font-poppins"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MdEmail size={24} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 ml-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/myphoto.png"
              alt="John Doe"
              width={400}
              height={400}
              className="mx-auto hover:transform hover:scale-105 transition-transform duration-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
