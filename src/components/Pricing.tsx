import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../data';

export default function Pricing() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4"
          >
            Pricing
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Invest in <span className="text-brand-accent">Quality</span> Stories
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,204,0,0.15)] ${
                plan.isPopular 
                  ? 'bg-brand-accent/5 border-brand-accent shadow-[0_0_40px_rgba(255,204,0,0.1)]' 
                  : 'glass border-white/10 hover:border-brand-accent/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-white/40 text-sm">Starts from</span>
                  <span className="text-4xl font-bold text-brand-accent">₹{plan.price}</span>
                </div>
                <p className="text-white/40 text-xs mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                    <Check size={16} className="text-brand-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.isPopular 
                    ? 'bg-brand-accent text-black hover:scale-[1.02]' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
