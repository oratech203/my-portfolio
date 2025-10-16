import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0f19] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              About Me
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm{" "}
              <span className="font-semibold text-white">
                Akeem Rokeeb Olamide
              </span>
              , a frontend developer and creative technologist. I build visually
              compelling, high-performance interfaces using React, Tailwind, and
              animation libraries. I love turning complex ideas into delightful
              user experiences.
            </p>
          </Reveal>

          <div className="flex gap-4">
            <Reveal delay={0.4}>
              <div className="bg-[#141a2a] p-4 rounded-xl text-sm w-1/2">
                <p className="font-semibold text-cyan-400 mb-1">Experience</p>
                <p className="text-gray-300">Computer Operator & Analyst</p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="bg-[#141a2a] p-4 rounded-xl text-sm w-1/2">
                <p className="font-semibold text-cyan-400 mb-1">Education</p>
                <p className="text-gray-300">
                  B.Sc. Physics with Computer Science (FUTMINNA)
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-[1px] rounded-2xl">
            <div className="bg-[#0b0f19] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Creative Tech Studio
              </h3>
              <p className="text-gray-300">
                I design interfaces, UX flows, and frontend systems that merge
                art with technology.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
