import { motion } from 'motion/react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#101010,transparent)] opacity-40" />
      
      {/* Floating Shapes */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] will-change-transform"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 40}%`,
            top: `${20 + i * 30}%`,
          }}
        />
      ))}

      {/* Simple Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,204,0,0.02),transparent)]" />
    </div>
  );
}
