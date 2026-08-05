export type Project = {
  name: string;
  type: string;
  status: string;
  image: string;
  imageWebp?: string;
  imageAlt: string;
  summary: string;
  impact: string;
  stack: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export type Experience = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export const profile = {
  name: "Frank Smith III",
  headline: "Full-Stack Developer | Field Operations Specialist",
  location: "Bergen County, New Jersey",
  email: "frankbjj23@gmail.com",
  linkedin: "https://www.linkedin.com/in/franksmithiii23",
  github: "https://github.com/frankbjj23",
  website: "https://franksmithlll.com",
  projectsUrl: "https://franksmithlll.com/projects",
  writingUrl: "https://franksmithlll.com/blog",
  videoUrl:
    "https://franksmithlll.com/long-way-into-tech-frank-smith-iii-new-jersey",
  resumeUrl: "/resume/Frank_Smith_III_Developer_Resume.pdf",
  photoUrl: "/assets/projects-optimized/frank-smith-iii-professional-portrait.jpg",
  photoWebp: "/assets/projects-optimized/frank-smith-iii-professional-portrait.webp",
  resumeSummary:
    "Fullstack Academy graduate and full-stack developer with paid client delivery, community-service web development, and verified project work across responsive interfaces, APIs, authentication, relational data, custom domains, and deployment. My current field-operations work in water treatment adds practical experience with safety, documentation, troubleshooting, communication, and dependable systems.",
  pitch:
    "I build practical web applications with JavaScript, TypeScript, React, Node.js, and modern data tools. Il Veliero demonstrates paid client delivery, while Greater Expectation shows how I apply the same discipline to community service. My field-operations background strengthens how I troubleshoot, document work, communicate clearly, and think about reliability.",
  identityNote:
    "I publish professionally as Frank Smith III. Search results for Frank Smith III New Jersey and Frank Smith New Jersey refer to this same developer and field-operations profile.",
  availability:
    "Open to junior software, full-stack, front-end, web, and technical operations roles",
  strengths: [
    "Responsive interfaces built for clear desktop and mobile workflows",
    "REST APIs, authentication, and relational database fundamentals",
    "JavaScript, TypeScript, React, Node.js, and Git-based delivery",
    "Live website delivery for paid-client and community-service projects",
    "Troubleshooting informed by software projects and real field operations",
    "Safety, documentation, communication, and systems reliability",
  ],
  metrics: [
    { label: "Featured Projects", value: "5" },
    { label: "Education", value: "Fullstack Academy" },
    { label: "Professional Focus", value: "Software + Operations" },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Supabase",
    "SQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
    "Git",
    "GitHub",
    "REST APIs",
    "Authentication",
    "Vitest",
    "Supertest",
    "Responsive Design",
    "Technical Documentation",
    "Troubleshooting",
    "Systems Reliability",
  ],
};

export const projects: Project[] = [
  {
    name: "Il Veliero Porticello",
    type: "Paid Client Website",
    status: "Live",
    image:
      "/assets/projects-optimized/il-veliero-live-restaurant-bar-website.png",
    imageAlt:
      "Live Il Veliero restaurant website with its waterfront hero and navigation",
    summary:
      "I was contracted to transform photographs of the establishment's printed menu and waterfront venue into a responsive customer-facing website and digital menu.",
    impact:
      "I extracted and verified menu content, recreated the nautical identity, and delivered Google Maps, a direct review path, a downloadable QR code, GitHub source, and a custom domain.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Responsive Design",
      "GitHub",
      "Custom DNS",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://ilvelieroporticello.com/",
      },
      {
        label: "Case Study",
        href: "https://franksmithlll.com/paid-client-website-from-menu-photos-il-veliero-frank-smith-iii",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/il-veliero-porticello",
      },
    ],
  },
  {
    name: "Cutz By Casper",
    type: "Booking Platform",
    status: "Deployed",
    image: "/assets/projects-optimized/cutz-by-casper-booking-platform.jpg",
    imageWebp: "/assets/projects-optimized/cutz-by-casper-booking-platform.webp",
    imageAlt:
      "Cutz By Casper booking interface with AI-assisted scheduling options",
    summary:
      "I developed a mobile-first booking application for a single-barber studio, with scheduling, deposit checkout, messaging, and administrative workflows.",
    impact:
      "This is my strongest full-stack project because it connects a polished service-business interface to scheduling, database, payment, and communication systems.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Twilio",
    ],
    links: [
      {
        label: "Live App",
        href: "https://cutz-by-casper-umri.vercel.app",
      },
      {
        label: "Case Study",
        href: "https://franksmithlll.com/projects#cutz-by-casper",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/Cutz-By-Casper",
      },
    ],
  },
  {
    name: "Greater Expectation",
    type: "Community Service Website",
    status: "Live",
    image:
      "/assets/projects-optimized/greater-expectation-community-service-website.jpg",
    imageAlt:
      "Greater Expectation ministry identity used on the community service website",
    summary:
      "I created a responsive ministry website as community service for Pastor Troy, a good friend and my pastor, to give the congregation a clear digital foundation.",
    impact:
      "I organized visitor-focused paths for ministry information, messages, visits, and prayer resources while keeping unconfirmed operational details clearly marked as coming soon.",
    stack: ["Next.js", "React", "TypeScript", "Responsive Design", "Accessibility"],
    links: [
      {
        label: "Live Site",
        href: "https://www.greaterexpectation.org/",
      },
      {
        label: "Project Story",
        href: "https://franksmithlll.com/building-greater-expectation-faith-community-service-frank-smith-iii",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/pastor-troy-site",
      },
    ],
  },
  {
    name: "Jukebox Pro",
    type: "Authenticated API",
    status: "Coursework",
    image: "/assets/projects-optimized/jukebox-pro-api-schema.svg",
    imageAlt: "Jukebox Pro database schema for users, playlists, and tracks",
    summary:
      "I built an Express and PostgreSQL playlist API with account registration, login, password hashing, JSON Web Tokens, and protected user-owned routes.",
    impact:
      "The project demonstrates backend route design, relational data, authorization checks, seed data, and API testing without presenting a consumer interface that does not exist.",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Vitest",
      "Supertest",
    ],
    links: [
      {
        label: "Technical Notes",
        href: "https://franksmithlll.com/jukebox-pro-api-authentication-frank-smith-iii",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/jukebox-pro",
      },
    ],
  },
  {
    name: "Book Buddy",
    type: "React API Client",
    status: "Coursework",
    image: "/assets/projects-optimized/book-buddy-react-catalog.jpg",
    imageWebp: "/assets/projects-optimized/book-buddy-react-catalog.webp",
    imageAlt:
      "Book Buddy React catalog with search and book reservation states",
    summary:
      "I built a React client for browsing a book catalog, viewing details, creating an account, signing in, reserving books, and managing returns.",
    impact:
      "Book Buddy shows component-based UI work, routing, external API integration, conditional account states, and practical user workflows.",
    stack: ["JavaScript", "React", "React Router", "Vite", "REST API", "CSS"],
    links: [
      {
        label: "Workflow Notes",
        href: "https://franksmithlll.com/book-buddy-react-api-workflow-frank-smith-iii",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/Book-Buddy",
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Field Operations Specialist",
    company: "Water Treatment Operations | Bergen County, New Jersey",
    dates: "Current role",
    bullets: [
      "Support water-treatment field operations with attention to safety, monitoring, documentation, and dependable procedures.",
      "Troubleshoot real-world operational issues, communicate observations clearly, and stay calm when systems require immediate attention.",
      "Apply the same disciplined approach to software work: understand the system, document the problem, test the solution, and verify the result.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Independent Project Development",
    dates: "2025 - Present",
    bullets: [
      "Build responsive web projects using JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and Supabase.",
      "Delivered the live Il Veliero paid-client website and Greater Expectation community-service website with responsive interfaces, verified content, custom-domain publishing, and public project documentation.",
      "Develop application workflows involving APIs, authentication, relational data, booking, payments, notifications, and deployment where verified by each repository.",
      "Document project status, technical decisions, setup requirements, and current limitations through portfolio case studies and repository READMEs.",
    ],
  },
  {
    role: "Independent Master Trainer",
    company: "Self Employed | New Jersey / New York",
    dates: "2019 - Present",
    bullets: [
      "Design structured programs using goal analysis, progress tracking, and clear communication.",
      "Manage scheduling, client communication, digital tracking, and daily operations independently.",
    ],
  },
  {
    role: "Owner / Operator",
    company: "Eagle Holdings Corp | New York, New York",
    dates: "2018 - 2020",
    bullets: [
      "Managed business operations, workflow design, client onboarding, reporting, budgeting, and vendor coordination.",
      "Applied structured problem-solving to operational processes and day-to-day decisions.",
    ],
  },
  {
    role: "Chief Operating Officer",
    company: "Premier Capital | Brooklyn, New York",
    dates: "2015 - 2018",
    bullets: [
      "Directed daily operations and supported team accountability, communication, and performance tracking.",
      "Managed internal workflows and reporting processes for a high-volume financial-services organization.",
    ],
  },
  {
    role: "Software Engineering Bootcamp",
    company: "Fullstack Academy",
    dates: "Graduated March 2026",
    bullets: [
      "Completed immersive software engineering training in JavaScript, React, backend fundamentals, SQL databases, authentication, testing, data structures, algorithms, and application development.",
    ],
  },
];
