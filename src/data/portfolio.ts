import type { Achievement, Experience, FocusItem, Project, SkillGroup } from '../types/portfolio'

export const socialLinks = {
  github: 'https://github.com/Murari182',
  linkedin: 'https://www.linkedin.com/in/smrc182/',
  email: 'mailto:mukundaramachary.123@gmail.com',
}

export const skillGroups: SkillGroup[] = [
  { id: 'languages', label: 'Languages', icon: 'terminal', items: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'MATLAB'] },
  { id: 'ai-data', label: 'AI / Data', icon: 'database', items: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Generative AI'] },
  { id: 'development', label: 'Development', icon: 'layers', items: ['React', 'Node.js', ] },
  { id: 'cloud', label: 'Cloud / DevOps', icon: 'cloud', items: ['AWS', 'EC2', 'S3', 'IAM', 'CloudWatch', 'Vercel', 'Render'] },
  { id: 'tools', label: 'Tools', icon: 'code', items: ['Git', 'GitHub',  'Linux', 'WSL'] },
]

export const projects: Project[] = [
  {
    id: 'college-connects',
    eyebrow: 'FLAGSHIP / 01',
    title: 'College Connects',
    tagline: 'Platform connecting students and JEE counselling aspirants.',
    summary: 'An ecosystem for JEE counselling and college discovery that combines rank prediction, JoSAA cutoff data, college exploration and mentorship into a focused decision-support platform.',
    problem: 'JEE aspirants are forced to combine fragmented cutoff data, uncertain rank estimates and disconnected counselling advice.',
    solution: 'A full-stack product that turns counselling inputs into explainable college pathways, supported by mentorship and real-time collaboration.',
    architecture: ['React interface', 'Firebase logic and auth', 'AWS S3 assets'],
    technologies: ['React', 'JavaScript', 'Firebase', 'AWS S3', 'Razorpay'],
    features: ['Rank Predictor', 'JoSAA Cutoff Data', 'College Predictor', 'Premium Mentorship', 'Google Meet integration', 'Razorpay integration', 'Authentication and profiles'],
    challenges: 'Balancing predictive outputs with transparent assumptions while keeping the counselling workflow approachable for first-time users.',
    outcome: 'A product direction that combines intelligent algorithms, mentor workflows and polished product surfaces in one coherent experience.',
    githubUrl: socialLinks.github,
    liveDemoUrl: undefined,
    accent: 'violet',
  },
  {
    id: 'cinereserve',
    eyebrow: 'FULL-STACK / 02',
    title: 'CineReserve',
    tagline: 'Movie ticket booking portal with seat-aware workflows.',
    summary: 'A movie browsing and reservation portal built around seat booking, ticket management and database-backed user flows.',
    problem: 'Movie booking experiences need a clear path from discovery to seat selection without losing reservation state.',
    solution: 'A PHP and MySQL-backed portal with a simple browsing model, seat booking, ticket management and persistent records.',
    architecture: ['HTML / CSS UI', 'JavaScript interactions', 'PHP application layer', 'MySQL database', 'XAMPP development environment'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
    features: ['Movie browsing', 'Seat booking', 'Ticket management', 'Database integration'],
    challenges: 'Keeping booking state understandable while modelling seats and tickets with a lightweight backend.',
    outcome: 'A complete systems exercise across interface design, server logic and relational data.',
    githubUrl: socialLinks.github,
    liveDemoUrl: undefined,
    accent: 'mauve',
  },
  {
    id: 'aws-cloud',
    eyebrow: 'CLOUD COMPUTING / 03',
    title: 'AWS Cloud Projects',
    tagline: 'Cloud engineering experiments across storage, compute and observability.',
    summary: 'A collection of AWS work involving secure storage, EC2 compute, IAM, VPC boundaries, CloudWatch, SNS, API Gateway and Lambda.',
    problem: 'Small products still need clean boundaries for compute, storage, permissions and operational visibility.',
    solution: 'Composable cloud experiments that separate responsibilities and make deployment behaviour easier to reason about.',
    architecture: ['S3 storage', 'EC2 compute', 'IAM policy boundaries', 'VPC networking', 'CloudWatch telemetry', 'SNS events'],
    technologies: ['AWS S3', 'EC2', 'IAM', 'VPC', 'CloudWatch', 'SNS', 'API Gateway', 'Lambda'],
    features: ['Cloud architecture mapping', 'Secure access patterns', 'Monitoring and alerts', 'Serverless API experiments'],
    challenges: 'Understanding how infrastructure choices affect security posture, cost and developer feedback loops.',
    outcome: 'A growing cloud foundation for deploying intelligent products with more confidence.',
    githubUrl: socialLinks.github,
    liveDemoUrl: undefined,
    accent: 'violet',
  },
  {
    id: 'product-feedback',
    eyebrow: 'SERVERLESS / 04',
    title: 'Product Feedback Portal',
    tagline: 'API-driven feedback architecture using managed cloud primitives.',
    summary: 'A compact portal demonstrating how a focused frontend can connect to API Gateway and AWS Lambda for a cost-aware feedback loop.',
    problem: 'Teams need a low-friction way to capture product signals without maintaining a heavy service surface.',
    solution: 'A serverless request path that keeps the interface responsive and the backend elastic.',
    architecture: ['JavaScript client', 'API Gateway route', 'AWS Lambda handler', 'Managed persistence boundary'],
    technologies: ['API Gateway', 'AWS Lambda', 'JavaScript'],
    features: ['API-driven submission', 'Elastic request handling', 'Simple feedback flow', 'Cloud-native deployment model'],
    challenges: 'Making the serverless boundary feel immediate and understandable to the person submitting feedback.',
    outcome: 'A small but useful reference architecture for product-minded cloud engineering.',
    githubUrl: socialLinks.github,
    liveDemoUrl: undefined,
    accent: 'mauve',
  },
]

export const experiences: Experience[] = [
  {
    id: 'ecell',
    label: 'ENTREPRENEURSHIP / TECHNICAL TEAM',
    title: 'E-Cell RGIPT',
    organisation: 'Technical Executive',
    description:
      'Working as a Technical Executive at E-Cell RGIPT, contributing to technology-driven initiatives, entrepreneurship programs and student engagement while exploring the intersection of innovation and technology.',
    tags: ['Technical Team', 'Entrepreneurship', 'Innovation'],
    side: 'left',
  },

  {
    id: 'AWS SBGL',
    label: 'PROFESSIONAL / COMMUNITY',
    title: 'AWS SBGL',
    organisation: 'Professional Development',
    description:
      'Building professional and technical skills through community engagement, collaboration and exposure to emerging technologies and professional environments.',
    tags: ['Professional Development', 'Collaboration'],
    side: 'right',
  },

  {
    id: 'aws',
    label: 'CLOUD / INFRASTRUCTURE',
    title: 'AWS Cloud Internship — ThinkChamp',
    organisation: 'Cloud Infrastructure',
    description:
      'Hands-on experience with AWS cloud services including S3, EC2, IAM and CloudWatch, with practical exposure to cloud resources, deployment workflows and infrastructure management.',
    tags: ['S3', 'EC2', 'IAM', 'CloudWatch'],
    side: 'left',
  },

  {
    id: 'gemini',
    label: 'PRESENT',
    title: 'Google Gemini Student Ambassador',
    organisation: 'Google / RGIPT',
    description:
      'Selected as a Google Gemini Student Ambassador, contributing to AI awareness through technical events, community engagement and conversations around emerging AI technologies.',
    tags: ['AI Awareness', 'Technical Events'],
    side: 'right',
  },
];

export const achievements: Achievement[] = [
  { id: 'ambassador', title: 'Google Gemini Student Ambassador', description: 'Selected as a Google Gemini Student Ambassador, contributing to AI awareness, technical events and student community engagement.', icon: 'award' },
  { id: 'cgpa', title: '9.21 First Year CGPA', description: 'Strong academic performance in Mathematics & Computing at RGIPT.', icon: 'medal' },
  { id: 'ecell', title: 'E-Cell RGIPT', description: 'Contributing to entrepreneurship and innovation-focused student initiatives.', icon: 'users' },
  { id: 'sbgl', title: 'SBGL', description: 'Professional and technical community involvement focused on learning, collaboration and growth.', icon: 'graduation' },
  { id: 'cloud', title: 'AWS Cloud Internship', description: 'Hands-on exposure to cloud infrastructure, deployment workflows and AWS services.', icon: 'cloud' },
  { id: 'projects', title: 'Multiple Software Projects', description: 'Built practical systems across web development, cloud engineering and intelligent applications.', icon: 'layers' },
]

export const focusItems: FocusItem[] = [
  { id: 'ai', title: 'Artificial Intelligence', description: 'Building intelligent systems that make complex workflows easier to navigate.', accent: 'violet', side: 'left' },
  { id: 'ml', title: 'Machine Learning', description: 'Understanding models, algorithms and the mathematics behind useful predictions.', accent: 'mauve', side: 'right' },
  { id: 'gen-ai', title: 'Generative AI', description: 'Exploring LLMs, agents and RAG systems for thoughtful product experiences.', accent: 'violet', side: 'left' },
  { id: 'cloud-focus', title: 'Cloud Engineering', description: 'Deploying scalable applications with clean infrastructure boundaries.', accent: 'mauve', side: 'right' },
  { id: 'full-stack', title: 'Full-Stack Systems', description: 'Building complete products from frontend intent to backend reality.', accent: 'violet', side: 'left' },
]
