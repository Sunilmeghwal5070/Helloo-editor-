import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-card/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4"
          >
            Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Comprehensive <span className="text-brand-accent">Editing</span> Solutions
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Video;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 glass border-white/5 hover:border-brand-accent/50 transition-all rounded-3xl"
              >
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-black transition-colors">
                  <IconComponent className="w-6 h-6 text-brand-accent group-hover:text-black" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.subServices.map((sub, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-white/40">
                      <div className="w-1 h-1 bg-brand-accent rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
