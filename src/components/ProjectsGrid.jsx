import React from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Cyber Cafe Management System",
    description:
      "A web app to manage customers, payments, and computer usage in a cyber cafe efficiently.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    live: "#",
  },
  {
    title: "Online Resume Builder",
    description:
      "A tool to easily build professional resumes online and download them in multiple formats.",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
    live: "#",
  },
  {
    title: "Online Resume Builder",
    description:
      "A tool to easily build professional resumes online and download them in multiple formats.",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
    live: "#",
  },
  {
    title: "Online Resume Builder",
    description:
      "A tool to easily build professional resumes online and download them in multiple formats.",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
    live: "#",
  },
  {
    title: "Online Resume Builder",
    description:
      "A tool to easily build professional resumes online and download them in multiple formats.",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
    live: "#",
  },
  {
    title: "Online Resume Builder",
    description:
      "A tool to easily build professional resumes online and download them in multiple formats.",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
    live: "#",
  },
  {
    title: "Online Resume Builder",
    description:
      "A tool to easily build professional resumes online and download them in multiple formats.",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
    demo: "#",
    live: "#",
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-[#0b0f19] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.2}>
              <div className="bg-[#141a2a] p-6 rounded-2xl text-left hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-[#1c2438] text-cyan-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-cyan-400">
                  <a href={project.github}>GitHub</a>
                  <a href={project.live}>Live Demo</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
