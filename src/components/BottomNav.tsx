import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Layout, CreditCard, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Briefcase },
  { label: 'Portfolio', href: '/portfolio', icon: Layout },
  { label: 'Pricing', href: '/pricing', icon: CreditCard },
  { label: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
      <div className="bg-brand-card/80 backdrop-blur-xl border border-white/5 rounded-full px-4 py-3 flex items-center justify-around shadow-2xl shadow-black/50">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              to={item.href}
              className="relative flex flex-col items-center gap-1 group"
            >
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'bg-brand-accent text-black scale-110' : 'text-white/40 hover:text-white'
              }`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-1 h-1 bg-brand-accent rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
