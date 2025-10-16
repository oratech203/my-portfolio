import { motion } from "framer-motion";

const orbs = [
  { size: 180, color: "bg-cyan-500/20", top: "10%", left: "15%" },
  { size: 120, color: "bg-purple-500/20", top: "50%", left: "70%" },
  { size: 160, color: "bg-blue-400/20", top: "80%", left: "30%" },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{
            width: `${orb.size}px`, // Add px unit
            height: `${orb.size}px`, // Add px unit
            top: orb.top,
            left: orb.left,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
