import { motion } from 'motion/react';
import { SKILLS } from '../data';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass border border-white/10 group relative">
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
              <img
                src="https://i.pinimg.com/474x/82/36/29/8236290ddc913e1d6e70f86218b28e43.jpg"
                alt="Sunil - HELLOO EDITOR"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent/30 rounded-full blur-[64px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-6">About the Brand</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Crafting <span className="text-brand-accent">Cinematic</span> Stories with Sunil.
            </h3>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              With years of experience in the industry, <span className="text-white font-medium">Sunil</span> (known as HELLOO EDITOR) has mastered the art of visual storytelling. We don't just cut clips; we build emotions, rhythm, and unforgettable experiences.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-white font-bold mb-2">Creative Mindset</h4>
                <p className="text-white/40 text-sm">Pushing boundaries of visual art.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Fast Delivery</h4>
                <p className="text-white/40 text-sm">Professional workflow for quick turnarounds.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-widest text-white/30 font-bold">Core Mastery</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold uppercase text-center">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
