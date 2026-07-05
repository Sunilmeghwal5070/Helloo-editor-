import { motion } from 'motion/react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
      <motion.a
        href="https://wa.me/916367512667"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20"
      >
        <MessageCircle fill="currentColor" />
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-accent text-black rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/20"
      >
        <Mail fill="currentColor" />
      </motion.a>
    </div>
  );
}
