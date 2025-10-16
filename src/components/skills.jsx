import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiFirebase, SiMongodb } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiFirebase className="text-amber-500" />, name: "Firebase" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-950 to-black text-gray-100 px-8 py-24"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-900/60 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:bg-gray-800/70 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-gray-300 text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
