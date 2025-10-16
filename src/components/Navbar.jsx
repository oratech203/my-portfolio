// src/components/Navbar.jsx
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [burst, setBurst] = useState(false);

  const handleToggle = () => {
    setBurst(true);
    toggleTheme();
    setTimeout(() => setBurst(false), 600); // reset burst
  };

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Ora<span className="text-blue-600">Tech</span>
        </h1>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            Contact
          </a>

          {/* Toggle Button with Burst */}
          <motion.button
            onClick={handleToggle}
            className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition overflow-hidden"
            whileTap={{ scale: 0.9 }}
          >
            {/* Burst Animation */}
            <AnimatePresence>
              {burst && (
                <motion.span
                  key="burst"
                  initial={{ scale: 0, opacity: 0.6 }}
                  animate={{ scale: 3, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-radial from-yellow-400/40 to-transparent dark:from-blue-400/40 rounded-full"
                />
              )}
            </AnimatePresence>

            {/* Icon */}
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-yellow-400 relative z-10"
                >
                  <Sun className="w-5 h-5 drop-shadow-[0_0_6px_rgba(255,220,0,0.7)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-800 relative z-10"
                >
                  <Moon className="w-5 h-5 drop-shadow-[0_0_6px_rgba(100,100,255,0.6)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
