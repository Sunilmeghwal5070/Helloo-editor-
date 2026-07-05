import { Skill, Service, Project, Testimonial, ProcessStep, Stats, PricingPlan } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', level: 95, category: 'Editing' },
  { name: 'After Effects', level: 90, category: 'Motion Graphics' },
  { name: 'DaVinci Resolve', level: 85, category: 'Color Grading' },
  { name: 'CapCut Pro', level: 95, category: 'Mobile' },
  { name: 'Photoshop', level: 80, category: 'Design' },
  { name: 'AI Editing', level: 85, category: 'Future' },
  { name: 'Sound Design', level: 88, category: 'Audio' },
  { name: 'VFX', level: 75, category: 'Effects' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Short-Form Edit',
    price: '650',
    description: 'Perfect for Instagram Reels, YouTube Shorts, and TikToks.',
    features: [
      'Up to 60 Seconds',
      'Dynamic Subtitles',
      'Trending Transitions',
      'Sound Effects',
      'Color Grading',
      '24-48h Delivery'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Edit',
    price: '1,500',
    description: 'Great for Vlogs, Business Promos, and Travel Videos.',
    features: [
      'Up to 5 Minutes',
      'Advanced Storytelling',
      'Text Animations',
      'B-Roll Integration',
      'Music Syncing',
      '2 Revisions'
    ],
    isPopular: true
  },
  {
    id: 'cinematic',
    name: 'Cinematic Edit',
    price: '5,000',
    description: 'High-end editing for Weddings, Events, and Commercials.',
    features: [
      'Premium Cinematic Look',
      'Professional Color Grading',
      'Sound Design & Mixing',
      'Full Storyboard Edit',
      '4K Export',
      'Unlimited Revisions'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding Editing',
    description: 'Transforming your special day into a cinematic masterpiece.',
    subServices: [
      'Cinematic Wedding Films', 'Pre-Wedding', 'Haldi/Mehendi/Sangeet',
      'Wedding Highlights', 'Traditional Edit', 'Save The Date'
    ],
    icon: 'Heart',
  },
  {
    id: 'birthday',
    title: 'Birthday Editing',
    description: 'Capturing the joy of aging with creative storytelling.',
    subServices: [
      'Birthday Highlights', 'Kids Birthday', 'Memory Videos',
      'Photo Montage', 'Cinematic Reel'
    ],
    icon: 'Cake',
  },
  {
    id: 'business',
    title: 'Shop & Business',
    description: 'Elevate your brand with professional commercial videos.',
    subServices: [
      'Grand Opening', 'Promotion Videos', 'Product Commercial',
      'Real Estate', 'Business Branding', 'Corporate Presentation'
    ],
    icon: 'Briefcase',
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'High-energy content optimized for vertical viewing.',
    subServices: [
      'Instagram Reels', 'YouTube Shorts', 'TikTok Style',
      'Travel Vlogs', 'Fashion Reels', 'Motivational Videos'
    ],
    icon: 'Smartphone',
  },
  {
    id: 'events',
    title: 'Events & Shows',
    description: 'Full coverage of any event with dynamic editing.',
    subServices: [
      'Concerts', 'College Events', 'Political Events',
      'Award Ceremonies', 'Sports Events'
    ],
    icon: 'Music',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethereal Wedding Highlight',
    category: 'Wedding',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    description: 'A cinematic journey through a luxury destination wedding.',
  },
  {
    id: '2',
    title: 'Urban Streetwear Promo',
    category: 'Commercial',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80',
    description: 'High-octane commercial edit for a modern clothing brand.',
  },
  {
    id: '3',
    title: 'The Solo Traveler Vlogs',
    category: 'Travel',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
    description: 'Stunning travel montages with color grading and sound design.',
  },
  {
    id: '4',
    title: 'Tech Review Shorts',
    category: 'Social Media',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    description: 'Fast-paced, engaging short-form content for tech creators.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Event Planner',
    content: 'Sunil transformed our raw footage into something magical. The attention to detail is unmatched.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO, TechFlow',
    content: 'HELLOO EDITOR is our go-to for all corporate branding. Fast delivery and premium quality every time.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/150?u=michael',
  },
];

export const PROCESS: ProcessStep[] = [
  { title: 'Inquiry', description: 'Share your vision and project details with us.' },
  { title: 'Discussion', description: 'We brainstorm the best cinematic approach for your story.' },
  { title: 'File Upload', description: 'Securely send your raw footage via your preferred method.' },
  { title: 'Editing', description: 'The magic happens—storyboarding, cutting, and grading.' },
  { title: 'Review', description: 'We fine-tune the edit based on your feedback.' },
  { title: 'Final Delivery', description: 'Receive your high-resolution masterpiece ready to share.' },
];

export const STATS: Stats[] = [
  { label: 'Projects Completed', value: '89', suffix: '+' },
  { label: 'Happy Clients', value: '75', suffix: '+' },
  { label: 'Years Experience', value: '4', suffix: '' },
  { label: 'Positive Reviews', value: '98', suffix: '%' },
];
