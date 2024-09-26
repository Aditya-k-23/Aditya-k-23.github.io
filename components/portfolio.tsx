"use client";

import {
  Briefcase,
  Mail,
  Linkedin,
  ChevronDown,
  Database,
  BarChart,
  GitBranch,
  FileText,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "My-bnb",
      description:
        "An application like Airbnb. • Designed and implemented database schema and major backend business requirements for a mock Airbnb platform accessed via APIs. Includes reports for insights, and a host toolkit to suggest how they can gain more customers. • Implemented aggregation, filtering, and data-adding/updating queries to enhance the system's capabilities.",
      role: "Backend Developer",
      technologies: ["Java", "Springboot", "MySQL"],
    },
    {
      title: "FinLearn",
      description:
        "Developed a full-stack financial literacy platform using React, Node.js, Express.js, and MongoDB.",
      role: "Full Stack Developer",
      technologies: ["react", "node", "mongodb"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <header className="bg-white bg-opacity-80 backdrop-blur-lg sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Aditya Kulkarni</h1>
          <nav>
            <ul className="flex space-x-6">
              {["About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section
          id="about"
          className="mb-24 flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-primary/30 rounded-full transform -rotate-6"></div>
              <div className="absolute inset-0 bg-secondary/30 rounded-full transform rotate-6"></div>
              <Image
                src="/adi.jpeg"
                alt="Jane Doe"
                className="relative rounded-full w-full h-full object-cover"
                height={256}
                width={256}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Hello, I am Adi
            </h2>
            <p className="text-lg text-text mb-6">
              A passionate product manager and software developer. I bridge the
              gap between business needs and technical solutions, creating
              products that users love and drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/aditya-s-kulkarni/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] text-white px-4 py-2 rounded-full hover:bg-[#0077B5]/80 transition-colors flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Aditya-k-23"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white px-4 py-2 rounded-full hover:bg-[#333]/80 transition-colors flex items-center"
              >
                <GitBranch className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1Yv9kS-6fqCKvLljJa_9MTBMWihW-SB6a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/80 transition-colors flex items-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-lg aspect-video flex items-center justify-center text-white text-4xl font-bold">
                    {index === 0 ? (
                      <Briefcase className="w-24 h-24" />
                    ) : index === 1 ? (
                      <Database className="w-24 h-24" />
                    ) : (
                      <BarChart className="w-24 h-24" />
                    )}
                  </div>
                </div>
                <div className="md:w-1/2 md:px-8">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-secondary mb-2">{project.role}</p>
                  <p className="text-text mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h2>
          <p className="text-lg text-text mb-8">
            I am always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <a
            href="mailto:adityaskulkarni23@gmail.com"
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:from-primary/80 hover:to-secondary/80 transition-colors text-lg font-medium"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>
        </section>
      </main>

      <footer className="bg-white bg-opacity-80 backdrop-blur-lg mt-24 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-textLight">
          <p>&copy; 2024 Aditya Kulkarni. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8">
        <a
          href="#"
          className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </a>
      </div>
    </div>
  );
}
