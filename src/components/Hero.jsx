import { motion } from "framer-motion";
import FloatingOrbs from "./FloatingOrbs";


export default function Hero() {
  return (
    <section className=" relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <FloatingOrbs />

      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"
      />

      {/* Hero Text */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-center"
      >
        Hi, I’m <span className="text-cyan-400">Rokeeb Olamide</span>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl"
      >
        A <span className="text-cyan-400">Creative Tech Enthusiast</span> and
        Frontend Developer who blends art with technology to create stunning
        digital experiences.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="mt-10 inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full shadow-lg"
      >
        View My Work
      </motion.a>
    </section>
  );
}
