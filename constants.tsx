import { Project, Experience, SkillCategory } from './types';

const base = import.meta.env.BASE_URL;

export const PROJECTS: Project[] = [
  {
    id: 'opulanz',
    title: 'Opulanz Digital Banking',
    description: 'Production-ready digital banking platform for France & Luxembourg with KYC/KYB and SARL formation.',
    detailedOverview: 'Opulanz is a complete, production-ready digital banking platform UI built with Next.js 14. Features include Warm Referral flows, Whitelabel Account Opening with full KYC/KYB, Company Formation wizards for Luxembourg entities (SARL, SA), and integrated Investment Advisory with MiFID II compliance.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
    categories: ['Site']
  },
  {
    id: 'payroll',
    title: 'Payroll Management System',
    description: 'Enterprise-grade payroll platform with Luxembourg tax engine, RBAC, and Dockerized CI/CD pipelines.',
    tech: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'jsPDF', 'Docker'],
    image: 'https://picsum.photos/800/600?random=1',
    videoUrls: [`${base}videos/payslip.mp4`],
    github: 'https://github.com/TAJKING10/excelexcel',
    categories: ['Site']
  },
  {
    id: 'sleep-ai',
    title: 'Sleep Tracking AI App',
    description: 'AI-driven mobile app analyzing sleep stages (Deep/Light/REM) using motion data and server-side AI pipelines.',
    tech: ['React Expo', 'Supabase', 'AI Pipelines', 'Payment APIs'],
    image: 'https://picsum.photos/800/600?random=2',
    videoUrls: [`${base}videos/sleep-tracking-1.mp4`, `${base}videos/sleep-tracking-2.mp4`],
    github: 'https://github.com/TAJKING10/sleeptracker',
    categories: ['App', 'Python AI']
  },
  {
    id: 'taskflow',
    title: 'Kanban TaskFlow AI',
    description: 'AI assistant for task automation via GPT-4 and Web Speech API, supporting voice commands.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'Framer Motion'],
    image: 'https://picsum.photos/800/600?random=3',
    videoUrls: [`${base}videos/kanban-1.mp4`, `${base}videos/kanban-2.mp4`],
    github: 'https://github.com/TAJKING10/WEBSITETASKFLOW',
    categories: ['Site', 'Python AI']
  },
  {
    id: 'tugo',
    title: 'TUGO Platform',
    description: 'Location-based service platform with Google Maps API and secure OTP-based authentication.',
    tech: ['Node.js', 'Firebase', 'Google Maps API', 'Email.js'],
    image: 'https://picsum.photos/800/600?random=4',
    videoUrls: [`${base}videos/tugo-1.mp4`, `${base}videos/tugo-edited.mp4`, `${base}videos/tugo-3.mp4`],
    github: 'https://github.com/TAJKING10/TUGO',
    categories: ['App']
  },
  {
    id: 'advensys-finance',
    title: 'Advensys Finance',
    description: 'Financial trading dashboard with real-time data visualization and secure transaction handling.',
    tech: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    image: 'https://picsum.photos/800/600?random=5',
    videoUrls: [`${base}videos/advensys-finance.mp4`],
    github: 'https://github.com/TAJKING10/AdvensysInFinance',
    categories: ['Site']
  },
  {
    id: 'ai-vending',
    title: 'AI Vending Machine',
    description: 'Smart vending machine interface with AI-powered product recognition and recommendation engine.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'IoT'],
    image: 'https://picsum.photos/800/600?random=6',
    videoUrls: [`${base}videos/ai-vending.mp4`],
    github: 'https://github.com/TAJKING10/cloningk',
    categories: ['Site', 'Python AI']
  },
  {
    id: 'barbery',
    title: 'Barbery',
    description: 'Modern booking and management platform for barbershops with customer loyalty features.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://picsum.photos/800/600?random=7',
    videoUrls: [`${base}videos/barbery.mp4`],
    github: 'https://github.com/TAJKING10/barberyy',
    categories: ['Site']
  },
  {
    id: 'eventfull',
    title: 'EventFull',
    description: 'Comprehensive event management system for ticketing, scheduling, and attendee engagement.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    image: 'https://picsum.photos/800/600?random=8',
    videoUrls: [`${base}videos/eventfull.mp4`],
    github: 'https://github.com/TAJKING10/Event-full',
    categories: ['Site']
  },
  {
    id: 'sabourg',
    title: 'Sabourg',
    description: 'E-commerce platform specializing in luxury goods with immersive 3D product previews.',
    tech: ['Three.js', 'React', 'Shopify API'],
    image: 'https://picsum.photos/800/600?random=9',
    videoUrls: [`${base}videos/sabourg.mp4`],
    categories: ['Site']
  },
  {
    id: 'lactivity',
    title: 'Lactivity Dating App',
    description: 'Modern dating platform with real-time interactions, Meta/Google social authentication, and secure cloud infrastructure.',
    tech: ['Flutter', 'Node.js', 'Firebase Auth', 'Firebase Functions', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1518183275084-3866635905d5?q=80&w=1200',
    categories: ['App']
  },
  {
    id: 'petly',
    title: 'Petly Adoption App',
    description: 'Feature-rich pet adoption marketplace with Google Maps integration and secure payment processing.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200',
    categories: ['App']
  },
  {
    id: 'qr-scanner-uae',
    title: 'Enterprise QR Scanner',
    description: 'B2B networking tool used by UAE companies for meeting attendance and instant contact exchange.',
    tech: ['Flutter', 'Firebase', 'Cloud Functions'],
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200',
    categories: ['App']
  },
  {
    id: 'evently-web',
    title: 'Evently Management',
    description: 'Web-based event scheduling and attendee management system with real-time updates.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200',
    categories: ['Site']
  },
  {
    id: 'python-data-mining',
    title: 'Python AI & Data Mining',
    description: 'Advanced data processing and machine learning pipelines for predictive analytics.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=1200',
    videoUrls: [`${base}videos/bigdata.mp4`, `${base}videos/bigdata2.mp4`, `${base}videos/big-data-continue.mp4`, `${base}videos/3.mp4`],
    categories: ['Python AI']
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
      'Architecting digital banking platforms and enterprise trading systems.',
      'Designed scalable Next.js frontends with Node.js backends and MongoDB/Firebase.',
      'Developing payslip automation and payroll modules with secure API integrations.',
      'Managing SSH deployments, Docker containers, and CI/CD pipelines.',
      'Integrating predictive analytics and business intelligence dashboards.'
    ]
  },
  {
    company: '5oStudios',
    role: 'Product Developer',
    location: 'Kuwait (Remote)',
    period: 'Jun 2025 - Aug 2025',
    type: 'Remote',
    description: [
      'Led development of an AI-driven Sleep Tracking App for smart sleep analytics.',
      'Used React Expo to create a seamless, responsive mobile UI.',
      'Integrated Supabase backend for real-time data synchronization.',
      'Collaborated with AI teams to implement predictive sleep insights.'
    ]
  },
  {
    company: 'Codra Tech',
    role: 'Mobile Application Developer',
    location: 'Dubai, UAE (Remote)',
    period: 'Jan 2022 - Jul 2024',
    type: 'Remote',
    description: [
      'Built cross-platform apps using Flutter and Firebase with robust authentication.',
      'Integrated multiple APIs including Google Maps and payment gateways.',
      'Designed high-fidelity prototypes and optimized UI/UX architectures.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Flutter', 'React Expo', 'Tailwind CSS']
  },
  {
    title: 'Backend & Cloud',
    skills: ['Node.js', 'Python', 'Firebase', 'Supabase', 'Docker', 'Azure']
  }
];
