
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'payroll',
    title: 'Payroll Management System',
    description: 'Enterprise-grade payroll platform with Luxembourg tax engine, RBAC, and Dockerized CI/CD pipelines.',
    tech: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'jsPDF', 'Docker'],
    image: 'https://picsum.photos/800/600?random=1',
    videoUrl: '/videos/payslip.mp4',
  },
  {
    id: 'sleep-ai',
    title: 'Sleep Tracking AI App',
    description: 'AI-driven mobile app analyzing sleep stages (Deep/Light/REM) using motion data and server-side AI pipelines.',
    tech: ['React Expo', 'Supabase', 'AI Pipelines', 'Payment APIs'],
    image: 'https://picsum.photos/800/600?random=2',
    videoUrl: '/videos/sleep-tracking-1.mp4',
  },
  {
    id: 'taskflow',
    title: 'Kanban TaskFlow AI',
    description: 'AI assistant for task automation via GPT-4 and Web Speech API, supporting voice commands.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'Framer Motion'],
    image: 'https://picsum.photos/800/600?random=3',
    videoUrl: '/videos/kanban-1.mp4',
  },
  {
    id: 'tugo',
    title: 'TUGO Platform',
    description: 'Location-based service platform with Google Maps API and secure OTP-based authentication.',
    tech: ['Node.js', 'Firebase', 'Google Maps API', 'Email.js'],
    image: 'https://picsum.photos/800/600?random=4',
    videoUrl: '/videos/tugo-edited.mp4',
  },
  {
    id: 'advensys-finance',
    title: 'Advensys Finance',
    description: 'Financial trading dashboard with real-time data visualization and secure transaction handling.',
    tech: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    image: 'https://picsum.photos/800/600?random=5',
    videoUrl: '/videos/advensys-finance.mp4',
  },
  {
    id: 'ai-vending',
    title: 'AI Vending Machine',
    description: 'Smart vending machine interface with AI-powered product recognition and recommendation engine.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'IoT'],
    image: 'https://picsum.photos/800/600?random=6',
    videoUrl: '/videos/ai-vending.mp4',
  },
  {
    id: 'barbery',
    title: 'Barbery',
    description: 'Modern booking and management platform for barbershops with customer loyalty features.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://picsum.photos/800/600?random=7',
    videoUrl: '/videos/barbery.mp4',
  },
  {
    id: 'eventfull',
    title: 'EventFull',
    description: 'Comprehensive event management system for ticketing, scheduling, and attendee engagement.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    image: 'https://picsum.photos/800/600?random=8',
    videoUrl: '/videos/eventfull.mp4',
  },
  {
    id: 'sabourg',
    title: 'Sabourg',
    description: 'E-commerce platform specializing in luxury goods with immersive 3D product previews.',
    tech: ['Three.js', 'React', 'Shopify API'],
    image: 'https://picsum.photos/800/600?random=9',
    videoUrl: '/videos/sabourg.mp4',
  },
  {
    id: 'advensys-conseil',
    title: 'Advensys Conseil',
    description: 'Corporate consulting portal featuring secure document sharing and client management tools.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    image: 'https://picsum.photos/800/600?random=10',
    videoUrl: '/videos/advensys-conseil.mp4',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Advensys International Trading',
    role: 'Full Stack Developer',
    location: 'Riga, Latvia (Hybrid)',
    period: 'Aug 2025 - Present',
    type: 'Hybrid',
    description: [
      'Building digital banking platforms and enterprise trading systems.',
      'Designed scalable Next.js + React frontends with Node.js backends.',
      'Developed secure payroll modules with automated calculations.',
      'Managed Docker containers and CI/CD pipelines for seamless releases.'
    ]
  },
  {
    company: '5oStudios',
    role: 'Product Developer',
    location: 'Kuwait (Remote)',
    period: 'Jun 2025 - Aug 2025',
    type: 'Remote',
    description: [
      'Led development of AI-driven sleep tracking application.',
      'Used React Expo for seamless cross-platform mobile UI.',
      'Collaborated with AI teams for predictive sleep insights.',
      'Implemented Supabase backend for real-time synchronization.'
    ]
  },
  {
    company: 'Codra Tech',
    role: 'Mobile Application Developer',
    location: 'Dubai, UAE (Remote)',
    period: 'Jan 2022 - Jul 2024',
    type: 'Remote',
    description: [
      'Built cross-platform apps using Flutter and Firebase.',
      'Integrated Google Maps, payment gateways, and push notifications.',
      'Designed Figma prototypes and optimized UI/UX components.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Supabase', 'Firebase', 'Python (FastAPI)']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'Google Cloud', 'Docker', 'CI/CD', 'Server Management']
  },
  {
    title: 'AI & Data',
    skills: ['Claude', 'Gemini API', 'GPT-4', 'TensorFlow', 'Pandas', 'NumPy']
  }
];
