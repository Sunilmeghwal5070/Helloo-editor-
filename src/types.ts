export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  subServices: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Stats {
  label: string;
  value: string;
  suffix?: string;
}
