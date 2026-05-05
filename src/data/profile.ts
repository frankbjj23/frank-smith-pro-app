export type Project = {
  name: string;
  type: string;
  image: string;
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
  headline: "Full Stack Web Developer",
  location: "Edgewater, NJ",
  email: "frankbjj23@gmail.com",
  phone: "551 245 3407",
  linkedin: "https://www.linkedin.com/in/franksmithiii23",
  github: "https://github.com/frankbjj23",
  website: "https://franksmithlll.com",
  resumeUrl: "/resume/Frank-Smith-III-software-resume-revised.docx",
  photoUrl: "/assets/frank-smith-office.png",
  resumeSummary:
    "Full stack web developer with hands on training from Fullstack Academy and practical experience building user focused applications in JavaScript, React, Node.js, Express, and PostgreSQL.",
  pitch:
    "I build polished web experiences with responsive interfaces, practical full stack fundamentals, and the discipline that comes from leading real operations and client work.",
  availability: "Open to junior developer, frontend, and full-stack opportunities",
  strengths: [
    "Responsive UI development across desktop and mobile",
    "REST API and authentication fundamentals",
    "React component architecture and React Router workflows",
    "PostgreSQL backed application planning",
    "Debugging, documentation, and Git based collaboration",
  ],
  metrics: [
    { label: "Featured Projects", value: "7" },
    { label: "Bootcamp", value: "Fullstack Academy" },
    { label: "Core Stack", value: "React + Node" },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Router",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "SQL",
    "HTML5",
    "CSS3",
    "Vite",
    "Git",
    "GitHub",
    "REST APIs",
    "Authentication",
    "Test Driven Development",
    "Responsive Design",
    "DOM Manipulation",
    "Data Structures",
    "Algorithms",
    "Figma",
    "Framer",
  ],
};

export const projects: Project[] = [
  {
    name: "Isaac Wright Jr. Advocacy and Attorney Website",
    type: "Static Client Site",
    image: "/assets/projects/isaac-wright-preview.png",
    summary:
      "Built a responsive public facing website for attorney and advocate Isaac Wright Jr. to showcase his work, advocacy, and media presence.",
    impact:
      "Demonstrates polished static site execution for a real public figure: clear storytelling, structured layout, mobile friendly viewing, and hand built frontend implementation.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live Site",
        href: "https://frankbjj23.github.io/isaac-wright-Jr/",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/isaac-wright-Jr",
      },
    ],
  },
  {
    name: "Cutz By Casper",
    type: "Barber Booking App",
    image: "/assets/projects/cutz-by-casper-preview.png",
    summary:
      "Developing a booking focused web application to streamline customer scheduling and communication for a working barber.",
    impact:
      "Shows full stack product thinking with database backed workflows, user interaction features, and a service business use case.",
    stack: ["TypeScript", "React", "Node.js", "Express.js", "PostgreSQL"],
    links: [
      {
        label: "Live Site",
        href: "https://frankbjj23.github.io/Cutz-By-Casper/",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/Cutz-By-Casper",
      },
    ],
  },
  {
    name: "Sturgis Options",
    type: "Group Trip Planning App",
    image: "/assets/projects/sturgis-options-preview.png",
    summary:
      "Built a trip planning tool to centralize housing options, links, and dates for group decision making.",
    impact:
      "Highlights practical collaboration features including comments, voting, shared options, and backend enabled workflow planning.",
    stack: ["JavaScript", "React", "Node.js", "Express.js", "PostgreSQL"],
    links: [
      {
        label: "Live Site",
        href: "https://frankbjj23.github.io/Sturgis-Options/",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/Sturgis-Options",
      },
    ],
  },
  {
    name: "Book Buddy",
    type: "React API Client",
    image: "/assets/projects/book-buddy-preview.png",
    summary:
      "Built a client for a book catalog API where users can browse books, view details, register, log in, reserve books, and manage returns.",
    impact:
      "Worth featuring because it shows API integration, React routing, account flows, conditional UI, and real application state management.",
    stack: ["JavaScript", "React", "Vite", "REST API", "CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/Book-Buddy",
      },
    ],
  },
  {
    name: "Fitness Trackr Pro",
    type: "Fitness Routine App",
    image: "/assets/projects/fitness-trackr-preview.svg",
    summary:
      "Built against a fitness API for browsing activities and routines, with account oriented workflows for creating and managing workout content.",
    impact:
      "Adds a stronger application example because it shows API driven UI, reusable React structure, routing, and authenticated user workflows.",
    stack: ["JavaScript", "React", "Vite", "REST API", "CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/fitness-tracker-block-30",
      },
    ],
  },
  {
    name: "BestBudz",
    type: "Local Business Website",
    image: "/assets/projects/bestbudz-preview.png",
    summary:
      "Created a responsive static site for a local business concept with branded visuals, service presentation, and lightweight JavaScript interactions.",
    impact:
      "Useful on the portfolio because it shows client style presentation work, brand layout, responsive CSS, and static site polish.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live Site",
        href: "https://frankbjj23.github.io/bestbudz/",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/bestbudz",
      },
    ],
  },
  {
    name: "Mariah and Jasien Wedding Page",
    type: "Event Website",
    image: "/assets/projects/wedding-page-preview.png",
    summary:
      "Created a photo forward event page showcasing highlights and images in a clean, mobile friendly presentation.",
    impact:
      "Shows content organization, responsive layout work, visual flow, and static site polish for a real event audience.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live Site",
        href: "https://frankbjj23.github.io/Mariah-JasiensWedpage/",
      },
      {
        label: "GitHub",
        href: "https://github.com/frankbjj23/Mariah-JasiensWedpage",
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Portfolio Web Applications",
    dates: "2025 - Present",
    bullets: [
      "Built public facing and application style projects with JavaScript, React, Node.js, Express.js, PostgreSQL, HTML, and CSS.",
      "Created responsive interfaces for portfolio, service booking, event, legal advocacy, and group planning use cases.",
      "Practiced debugging workflows across frontend structure, styling, browser behavior, API planning, and GitHub based project iteration.",
    ],
  },
  {
    role: "Independent Master Trainer",
    company: "Self Employed | New Jersey / New York",
    dates: "2019 - Present",
    bullets: [
      "Designed structured programs using data driven progress tracking and goal analysis.",
      "Managed scheduling, client communication, client tracking, and day to day operations independently.",
      "Built long term trust through consistency, accountability, and clear communication.",
    ],
  },
  {
    role: "Owner / Operator",
    company: "Eagle Holdings Corp | New York, NY",
    dates: "2018 - 2020",
    bullets: [
      "Founded and operated a financial services company serving small and mid sized businesses.",
      "Designed and managed internal workflows, operational processes, budgeting, compliance, and vendor coordination.",
      "Solved operational inefficiencies through structured problem solving and process improvement.",
    ],
  },
  {
    role: "Chief Operating Officer",
    company: "Premier Capital | Brooklyn, NY",
    dates: "2015 - 2018",
    bullets: [
      "Directed day to day operations for a high volume financial services organization.",
      "Managed and mentored teams while implementing performance tracking workflows.",
      "Led internal systems and reporting processes that improved accountability, tracking, and decision making.",
    ],
  },
  {
    role: "Software Engineering Bootcamp",
    company: "Fullstack Academy",
    dates: "Graduated March 2026",
    bullets: [
      "Completed immersive software engineering training focused on frontend development, React, backend fundamentals, SQL databases, authentication, testing, data structures, algorithms, and practical application development.",
    ],
  },
];
