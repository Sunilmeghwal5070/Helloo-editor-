import { motion } from 'motion/react';
import { Instagram, Youtube, Phone, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-8">
              <img src="https://i.pinimg.com/474x/82/36/29/8236290ddc913e1d6e70f86218b28e43.jpg" alt="HELLOO EDITOR" className="w-12 h-12 rounded-xl object-cover" />
              <span className="text-3xl font-bold tracking-tighter uppercase">
                HELLOO <span className="text-brand-accent">EDITOR</span>
              </span>
            </Link>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed">
              Crafting cinematic stories through high-end video editing and motion design.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/30 font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/60 hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-brand-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/30 font-bold mb-8">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <p className="text-xs text-white/20">
            © 2026 HELLOO EDITOR. Crafted with passion by Sunil.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
