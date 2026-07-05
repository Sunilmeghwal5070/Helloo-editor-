import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { STATS } from '../data';

const Counter = ({ value, suffix }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetValue = parseInt(value);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();
      
      let frameId: number;
      
      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smoother count
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easedProgress * targetValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        }
      };
      
      frameId = requestAnimationFrame(update);
      
      return () => cancelAnimationFrame(frameId);
    }
  }, [isInView, targetValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="py-24 border-y border-white/5 bg-brand-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
