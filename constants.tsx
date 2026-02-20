
import { Project, Experience, SkillCategory } from './types';

// Helper to get correct asset path for GitHub Pages
const base = import.meta.env.BASE_URL;

export const PROJECTS: Project[] = [
  {
    id: 'payroll',
    title: 'Payroll Management System',
    description: 'Enterprise-grade payroll platform with Luxembourg tax engine, RBAC, and Dockerized CI/CD pipelines.',
    tech: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'jsPDF', 'Docker'],
    image: 'https://picsum.photos/800/600?random=1',
    videoUrls: [`${base}videos/payslip.mp4`],
    github: 'https://github.com/TAJKING10/excelexcel',
    category: 'Fintech'
  },
  {
    id: 'sleep-ai',
    title: 'Sleep Tracking AI App',
    description: 'AI-driven mobile app analyzing sleep stages (Deep/Light/REM) using motion data and server-side AI pipelines.',
    tech: ['React Expo', 'Supabase', 'AI Pipelines', 'Payment APIs'],
    image: 'https://picsum.photos/800/600?random=2',
    videoUrls: [`${base}videos/sleep-tracking-1.mp4`, `${base}videos/sleep-tracking-2.mp4`],
    github: 'https://github.com/TAJKING10/sleeptracker',
    category: 'AI'
  },
  {
    id: 'taskflow',
    title: 'Kanban TaskFlow AI',
    description: 'AI assistant for task automation via GPT-4 and Web Speech API, supporting voice commands.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'Framer Motion'],
    image: 'https://picsum.photos/800/600?random=3',
    videoUrls: [`${base}videos/kanban-1.mp4`, `${base}videos/kanban-2.mp4`],
    github: 'https://github.com/TAJKING10/WEBSITETASKFLOW',
    category: 'Full-Stack'
  },
  {
    id: 'tugo',
    title: 'TUGO Platform',
    description: 'Location-based service platform with Google Maps API and secure OTP-based authentication.',
    tech: ['Node.js', 'Firebase', 'Google Maps API', 'Email.js'],
    image: 'https://picsum.photos/800/600?random=4',
    videoUrls: [`${base}videos/tugo-1.mp4`, `${base}videos/tugo-edited.mp4`, `${base}videos/tugo-3.mp4`],
    github: 'https://github.com/TAJKING10/TUGO',
    category: 'Mobile'
  },
  {
    id: 'advensys-finance',
    title: 'Advensys Finance',
    description: 'Financial trading dashboard with real-time data visualization and secure transaction handling.',
    tech: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    image: 'https://picsum.photos/800/600?random=5',
    videoUrls: [`${base}videos/advensys-finance.mp4`],
    github: 'https://github.com/TAJKING10/AdvensysInFinance',
    category: 'Fintech'
  },
  {
    id: 'ai-vending',
    title: 'AI Vending Machine',
    description: 'Smart vending machine interface with AI-powered product recognition and recommendation engine.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'IoT'],
    image: 'https://picsum.photos/800/600?random=6',
    videoUrls: [`${base}videos/ai-vending.mp4`],
    github: 'https://github.com/TAJKING10/cloningk',
    category: 'AI'
  },
  {
    id: 'barbery',
    title: 'Barbery',
    description: 'Modern booking and management platform for barbershops with customer loyalty features.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://picsum.photos/800/600?random=7',
    videoUrls: [`${base}videos/barbery.mp4`],
    github: 'https://github.com/TAJKING10/barberyy',
    category: 'Mobile'
  },
  {
    id: 'eventfull',
    title: 'EventFull',
    description: 'Comprehensive event management system for ticketing, scheduling, and attendee engagement.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    image: 'https://picsum.photos/800/600?random=8',
    videoUrls: [`${base}videos/eventfull.mp4`],
    github: 'https://github.com/TAJKING10/Event-full',
    category: 'Full-Stack'
  },
  {
    id: 'sabourg',
    title: 'Sabourg',
    description: 'E-commerce platform specializing in luxury goods with immersive 3D product previews.',
    tech: ['Three.js', 'React', 'Shopify API'],
    image: 'https://picsum.photos/800/600?random=9',
    videoUrls: [`${base}videos/sabourg.mp4`],
    category: 'Full-Stack'
  },
  {
    id: 'opulanz',
    title: 'Opulanz Digital Banking',
    description: 'Production-ready digital banking platform for France & Luxembourg with KYC/KYB, SARL formation, and MiFID II compliance.',
    detailedOverview: 'Opulanz is a complete, production-ready digital banking platform UI built with Next.js 14. Features include Warm Referral flows, Whitelabel Account Opening with full KYC/KYB, Company Formation wizards for Luxembourg entities (SARL, SA), and integrated Investment Advisory with MiFID II compliance. Engineered for high performance with WCAG 2.2 AA accessibility.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'next-intl'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
    category: 'Fintech'
  },
  {
    id: 'lactivity',
    title: 'Lactivity Dating App',
    description: 'Modern dating platform with real-time interactions, Meta/Google social authentication, and secure cloud infrastructure.',
    detailedOverview: 'Developed a high-performance cross-platform dating application using Flutter. Implemented complex social authentication flows (Meta, Google, Firebase), real-time messaging using Firebase Functions and Realtime Database, and secure media storage. Designed the entire UI/UX in Figma before implementation.',
    tech: ['Flutter', 'Node.js', 'Firebase Auth', 'Firebase Functions', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1518183275084-3866635905d5?q=80&w=1200',
    category: 'Mobile'
  },
  {
    id: 'petly',
    title: 'Petly Adoption App',
    description: 'Feature-rich pet adoption marketplace with Google Maps integration and secure payment processing.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200',
    category: 'Mobile'
  },
  {
    id: 'qr-scanner-uae',
    title: 'Enterprise QR Scanner',
    description: 'B2B networking tool used by UAE companies for meeting attendance and instant contact exchange.',
    tech: ['Flutter', 'Firebase', 'Cloud Functions'],
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200',
    category: 'Mobile'
  },
  {
    id: 'evently-web',
    title: 'Evently Management',
    description: 'Web-based event scheduling and attendee management system with real-time updates.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200',
    category: 'Full-Stack'
  },
  {
    id: 'python-data-mining',
    title: 'Python AI & Data Mining',
    description: 'Advanced data processing and machine learning pipelines for predictive analytics.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=1200',
    videoUrls: [`${base}videos/bigdata.mp4`, `${base}videos/bigdata2.mp4`, `${base}videos/big-data-continue.mp4`, `${base}videos/3.mp4`],
    category: 'AI'
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
      'Building and maintaining digital banking platforms and enterprise trading systems.',
      'Designed scalable Next.js + React frontends with Node.js/Express.js backends and MongoDB/Firebase databases.',
      'Developed payslip automation and payroll modules with secure API integrations.',
      'Managed SSH deployments, Docker containers, and CI/CD pipelines for seamless releases.',
      'Integrated predictive analytics and business intelligence dashboards using AI & data processing tools.',
      'Enhanced system performance, SEO, and user experience through architecture optimizations.'
    ]
  },
  {
    company: '5oStudios',
    role: 'Product Developer',
    location: 'Kuwait (Remote)',
    period: 'Jun 2025 - Aug 2025',
    type: 'Remote',
    description: [
      'Led development of an AI-driven Sleep Tracking App focused on improving users’ sleep quality via smart analytics.',
      'Used React expo to create a seamless, responsive mobile UI.',
      'Integrated Supabase backend for real-time data synchronization and authentication.',
      'Collaborated with AI teams to implement Claude, ChatGPT, and Vibe Coding AI for predictive sleep insights.',
      'Ensured full compliance with data privacy and encryption standards.',
      'Participated in agile development cycles and sprint reviews.'
    ]
  },
  {
    company: 'Codra Tech',
    role: 'Mobile Application Developer',
    location: 'Dubai, UAE (Remote)',
    period: 'Jan 2022 - Jul 2024',
    type: 'Remote',
    description: [
      'Built cross-platform apps using Flutter and Firebase, with robust authentication and database management.',
      'Integrated multiple APIs including Google Maps, Email.js, and payment gateways.',
      'Designed Figma prototypes, optimized UI/UX, and handled Azure cloud deployments.',
      'Developed real-time data sync, push notifications, and analytics tracking systems.',
      'Maintained Git-based version control and automated delivery pipelines.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['Flutter', 'React.js', 'Next.js', 'TypeScript', 'React Expo', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Firebase', 'Supabase', 'Python (FastAPI)']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase Firestore', 'SQL Server', 'Supabase']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'Google Cloud', 'Docker', 'CI/CD', 'Server Management (SSH)']
  },
  {
    title: 'Security',
    skills: ['JWT', 'OAuth2', 'SSL/TLS', 'Data Encryption', 'Access Control Rules']
  },
  {
    title: 'AI & Data',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Claude', 'ChatGPT', 'Vibe Coding (Trae/Cursor/Windsurf)']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'SourceTree', 'Postman', 'Framer Motion', 'Figma', 'Android Studio']
  }
];
