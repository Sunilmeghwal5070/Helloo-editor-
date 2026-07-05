import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured <span className="text-brand-accent">Works</span></h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === cat 
                    ? 'bg-brand-accent text-black shadow-[0_0_20px_rgba(255,204,0,0.3)]' 
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-video rounded-3xl overflow-hidden bg-brand-card border border-white/5"
              >
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                    <p className="text-white/60 text-sm mb-6 max-w-md">
                      {project.description}
                    </p>
                    <button 
                      onClick={() => setSelectedVideo(project.videoUrl)}
                      className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-accent transition-all shadow-xl"
                    >
                      <Play className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            >
              <button 
                className="absolute top-10 right-10 text-white/50 hover:text-white"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-5xl aspect-video glass rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`${selectedVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
