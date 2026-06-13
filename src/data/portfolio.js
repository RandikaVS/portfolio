// ============================================================================
//  portfolio.js  —  Single source of truth for all site content.
//  Edit the values here and the whole site updates. No need to touch JSX.
// ============================================================================
import {
    FaReact,
    FaJsSquare,
    FaPython,
    FaFlask,
    FaNodeJs,
    FaDatabase,
    FaGoogle,
    FaDocker,
    FaServer,
    FaMicrosoft,
    FaCogs,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt
} from 'react-icons/fa';

export const profile = {
  name: 'Sahan Randika',
  role: 'Full Stack Software Engineer',
  tagline: 'Engineering Beyond Boundaries',
  blurb:
    'Specializing in scalable web platforms, real-time integrations, and clean cloud architecture.',
  profileVersion: 'v1.0.0',
  location: 'Sri Lanka · Remote',
  status: 'ONLINE',
  resumeUrl: '/resume.pdf', // drop a resume.pdf into /public, or change this link
  avatar: '/images/avatar.jpg', // drop your photo into /public/images/avatar.jpg
  // Modules shown scrolling under the hero
  loadedModules: ['REACT', 'FLASK', 'PYTHON', 'Node.js', 'POSTGRESQL', 'GCP', 'DOCKER', 'CI/CD'],
  resume: 'https://drive.google.com/file/d/13PFTNHWDo1tv2Exe3cjzQQkESbjxR3_N/view?usp=sharing',
  profileImg: './images/sahan.jpg',
};

export const social = {
  github: 'https://github.com/RandikaVS',
  githubUser: '@RandikaVS',
  linkedin: 'https://www.linkedin.com/in/sahan-randika-a920a0211/',
  linkedinUser: 'in/sahan-randika-a920a0211/',
  email: 'sahanrandika28@gmail.com',
};

// --- About terminal log lines -----------------------------------------------
export const about = {
  card: {
    operator: 'SAHAN RANDIKA',
    role: 'FULL STACK ENGINEER',
    location: 'Remote',
    status: 'ONLINE',
  },
  log: [
    {
      cmd: 'About-Me',
      out: 'I am a software engineer focused on building scalable, maintainable web platforms. My work is grounded in clean code, performance, and continuous learning.',
    },
    {
      cmd: 'Experience',
      out: 'Turning complex product requirements into robust technical solutions. Currently building education platforms with React, Flask, PostgreSQL and Azure.',
    },
  ],
  stats: [
    { label: 'EXPERIENCE', value: '3+', unit: 'YRS' },
    { label: 'PROJECTS', value: '15+', unit: 'DEP' },
    { label: 'CAFFEINE', value: '∞', unit: 'ml' },
  ],
  education: 'Bachelor Degree',
};

// --- Skills (grouped) -------------------------------------------------------
// `color` keys map to CSS accent variables: cyan | green | amber | magenta | red
export const skills = [
  { name: 'React', color: 'cyan', icon: FaReact },
  { name: 'JavaScript', color: 'amber', icon: FaJsSquare },
  { name: 'TypeScript', color: 'cyan', icon: FaJsSquare },
  { name: 'Python', color: 'green', icon: FaPython },
  { name: 'Flask', color: 'green', icon: FaFlask },
  { name: 'Node.js', color: 'green', icon: FaNodeJs },
  { name: 'PostgreSQL', color: 'cyan', icon: FaDatabase },
  { name: 'GCP', color: 'cyan', icon: FaGoogle },
  { name: 'Docker', color: 'cyan', icon: FaDocker },
  { name: 'REST APIs', color: 'amber', icon: FaServer },
  { name: 'Microsoft Graph', color: 'cyan', icon: FaMicrosoft },
  { name: 'CI/CD', color: 'green', icon: FaCogs },
  { name: 'Git', color: 'red', icon: FaGitAlt },
  { name: 'HTML5', color: 'amber', icon: FaHtml5 },
  { name: 'CSS3', color: 'cyan', icon: FaCss3Alt },
];

// --- Experience (rendered as a git log) -------------------------------------
export const experience = [
  {
    hash: 'a1b2ca2',
    head: true,
    company: 'Infinity Innovators (PVT) Ltd.',
    period: '2023-06-18 — 2023-12-18',
    title: 'Software Engineer (intern) @ Infinity Innovators',
    description:
      'Gained hands-on experience in full-stack development using React, Node.js, Python, and Flask. Contributed to the design and implementation of scalable web applications, enhancing my skills in both frontend and backend technologies.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python'],
    insertions: 412,
    deletions: 89,
    files: 4,
  },
  {
    hash: 'a1b2ca2',
    head: true,
    company: 'Infinity Innovators (PVT) Ltd.',
    period: '2023-12-18 — 2024-12-18',
    title: 'Software Engineer (trainee) @ Infinity Innovators',
    description:
      'Acquired experience with technologies: React, NodeJS, Python, Flask. Collaborated with a team of professionals in software development and maintenance Engaged indocumentation efforts to maintain clear and comprehensive project records.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python', 'Socket.IO'],
    insertions: 1700,
    deletions: 245,
    files: 15,
  },
  {
    hash: 'a1b2ca2',
    head: true,
    company: 'Infinity Innovators (PVT) Ltd.',
    period: '2024-12-18 — Present',
    title: 'Software Engineer (associate) @ Infinity Innovators',
    description:
      'Acquired experience with technologies: React, NodeJS, Python, Flask. Collaborated with a team of professionals in software development and maintenance Engaged indocumentation efforts to maintain clear and comprehensive project records.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python', 'Socket.IO', ' React Native'],
    insertions: 3207,
    deletions: 986,
    files: 21,
  },
];

// --- Projects (GitHub-repo styled cards) ------------------------------------
export const projects = [
  {
    name: ' ROS Multi-Robot Indoor Path Planning',
    visibility: 'Public',
    description:
      'Autonomous intelligent machines and systems (aims) category development. Fully automated multi-robot area coverage algorithms optimization using Linux-based Robotic Operating System (ROS). The technology used CMake, C++, Python, Gazebo, Rviz, etc. Spiral and Boustrophedon algorithm optimized for efficient coverage as well as multi-robot communication, area partitioning features in operation',
    stack: ['C++', 'Python', 'ROS', 'Gazebo', 'Rviz'],
    language: 'Python',
    languageColor: '#3572A5',
    stars: 24,
    forks: 6,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Edfoci Student Management System',
    visibility: 'Public',
    description:
      'Specialized in developing custom student management system using Azure devops, React, Python. Flask. The platform features student data management, studying meterial management, attendance, live-chat , lteachers management, and payment processing for a students semesters and teachers.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Python', 'Azure DevOps'],
    language: 'JavaScript',
    languageColor: '#89e051',
    stars: 18,
    forks: 3,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Real-Time Messaging Server',
    visibility: 'Public',
    description:
      'This project is server-side development for a real-time chatting system as a backend template for any application that can be used as a chat server. The Technology uses NodeJs, Socket.io, Express, MongoDB, and Socket.io serving real-time chat features for every user without delaying or refreshing the screen. I applied this server to my current workplace application as well',
    stack: ['Node.js', 'Socket.io', 'Express', 'MongoDB'],
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 31,
    forks: 9,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Tenant Management System',
    visibility: 'Public',
    description:
      'K-based tenant management system. it’s such a large application for a fully automated tenant management system for Tenants, Suppliers, and Admin. The technology used React, NodeJs, and MongoDB. GitLab pipeline automated live project',
    stack: ['React', 'Node.js', 'GitLab', 'Express', 'MongoDB'],
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 31,
    forks: 9,
    repo: '#',
    demo: '#',
    pinned: true,
  },
];

// --- Blogs (optional — leave empty for the empty-state) ---------------------
export const blogs = [
  // {
  //   title: 'Setting up GitOps migrations on Azure PostgreSQL',
  //   excerpt: 'A walk-through of Flyway + Azure DevOps with Entra token auth.',
  //   date: '2026-05-01',
  //   url: '#',
  //   tags: ['Azure', 'PostgreSQL', 'DevOps'],
  // },
];

// --- Contact ----------------------------------------------------------------
export const contact = {
  status: 'available',
  email: 'sahanrandika28@gmail.com',
  location: 'Remote',
  responseTime: 'within 24h',
};