import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase mb-8">
            Professional Motion Designer
          </span>
          <img 
            src="https://i.pinimg.com/474x/82/36/29/8236290ddc913e1d6e70f86218b28e43.jpg" 
            alt="Logo" 
            className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-2xl animate-pulse object-cover" 
          />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] uppercase">
            HELLOO <br />
            <span className="text-brand-accent">EDITOR</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12">
            I create cinematic edits that help creators, businesses, brands and families tell unforgettable stories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-3 transition-colors hover:bg-brand-accent"
              >
                View Portfolio
                <Play className="w-4 h-4 fill-current" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group px-8 py-4 border border-white/10 hover:border-white/30 rounded-full flex items-center gap-3 transition-all"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}
