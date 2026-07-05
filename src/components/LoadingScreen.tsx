import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-brand-bg flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center"
      >
        <img src="https://i.pinimg.com/474x/82/36/29/8236290ddc913e1d6e70f86218b28e43.jpg" alt="HELLOO EDITOR" className="w-24 h-24 rounded-2xl mb-6 shadow-2xl object-cover" />
        <div className="text-4xl font-bold tracking-tighter mb-8">
          HELLOO <span className="text-brand-accent">EDITOR</span>
        </div>
      </motion.div>
      <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-brand-accent"
        />
      </div>
    </motion.div>
  );
}
