// ============================================================================
//  portfolio.js  —  Single source of truth for all site content.
//  Edit the values here and the whole site updates. No need to touch JSX.
// ============================================================================

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
  loadedModules: ['REACT', 'FLASK', 'PYTHON', 'POSTGRESQL', 'GCP', 'DOCKER'],
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
    role: 'FULL_STACK_ENGINEER',
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
};

// --- Skills (grouped) -------------------------------------------------------
// `color` keys map to CSS accent variables: cyan | green | amber | magenta | red
export const skills = [
  { name: 'React', color: 'cyan' },
  { name: 'JavaScript', color: 'amber' },
  { name: 'TypeScript', color: 'cyan' },
  { name: 'Python', color: 'green' },
  { name: 'Flask', color: 'green' },
  { name: 'Node.js', color: 'green' },
  { name: 'PostgreSQL', color: 'cyan' },
  { name: 'GCP', color: 'cyan' },
  { name: 'Docker', color: 'cyan' },
  { name: 'REST APIs', color: 'amber' },
  { name: 'Microsoft Graph', color: 'cyan' },
  { name: 'CI/CD', color: 'green' },
  { name: 'Git', color: 'red' },
  { name: 'HTML5', color: 'amber' },
  { name: 'CSS3', color: 'cyan' },
];

// --- Experience (rendered as a git log) -------------------------------------
export const experience = [
  {
    hash: 'a1b2ca2',
    head: true,
    company: 'EdFoci',
    period: '2024 — Present',
    title: 'Full Stack Engineer @ EdFoci',
    description:
      'Building an education platform end to end — React frontend, Flask APIs, PostgreSQL, and Azure infrastructure with GitOps-style database migrations.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Azure'],
    insertions: 412,
    deletions: 89,
    files: 4,
  },
  {
    hash: 'a1b2ca1',
    head: false,
    company: 'Previous Role',
    period: '2022 — 2024',
    title: 'Software Engineer @ Previous Role',
    description:
      'Developed and maintained responsive web applications and internal tools across multiple client projects.',
    stack: ['React', 'Node.js', 'REST', 'Docker'],
    insertions: 245,
    deletions: 12,
    files: 4,
  },
];

// --- Projects (GitHub-repo styled cards) ------------------------------------
export const projects = [
  {
    name: 'EdFoci Platform',
    visibility: 'Private',
    description:
      'Education platform with student management, Microsoft Teams meeting creation via Graph API, and multi-environment Azure deployments.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Azure'],
    language: 'Python',
    languageColor: '#3572A5',
    stars: 24,
    forks: 6,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'DB Migration Pipeline',
    visibility: 'Public',
    description:
      'GitOps schema-migration workflow using Flyway on Azure PostgreSQL with Azure DevOps pipelines and Entra token auth — no stored passwords.',
    stack: ['Flyway', 'Azure DevOps', 'PostgreSQL', 'YAML'],
    language: 'Shell',
    languageColor: '#89e051',
    stars: 18,
    forks: 3,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Teams Integration Service',
    visibility: 'Public',
    description:
      'Flask blueprint for app-only Microsoft Graph auth (client credentials) to create Teams online meetings programmatically.',
    stack: ['Flask', 'MSAL', 'Graph API', 'Python'],
    language: 'Python',
    languageColor: '#3572A5',
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
  email: 'you@example.com',
  location: 'Remote',
  responseTime: 'within 24h',
};