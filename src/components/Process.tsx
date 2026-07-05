import { motion } from 'motion/react';
import { PROCESS } from '../data';

export default function Process() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The <span className="text-brand-accent">Cinematic</span> Process</h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block" />
          
          <div className="grid lg:grid-cols-6 gap-12 relative z-10">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="w-12 h-12 bg-brand-accent text-black rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
