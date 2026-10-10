import type { DeveloperStatsData, EducationEntry, ProjectItem, SkillCategory, SocialLink, StatItem } from '../types';

export const developerInfo = {
  name: "Anmol Kumar Srivastava",
  shortName: "Anmol Srivastava",
  role: "Computer Science & Engineering Student | Java & Spring Boot Developer",
  college: "ABES Engineering College, Ghaziabad",
  degree: "B.Tech in Computer Science & Engineering",
  degreeDuration: "2024–2028",
  currentStatus: "3rd Year | 5th Semester",
  cumulativeCgpa: "8.44",
  heroHeading: "Hi, I'm Anmol Kumar Srivastava.",
  heroRole: "Computer Science & Engineering Student | Java & Spring Boot Developer",
  heroSupportingText: "I build practical full-stack applications and backend systems using Java, Spring Boot, React, and modern APIs.",
  aboutText: "I’m a Computer Science & Engineering student at ABES Engineering College with a strong interest in backend development, full-stack applications, and problem solving. I primarily work with Java and Spring Boot, while also building responsive interfaces with React. I enjoy turning practical ideas into real software and continuously improving my understanding of data structures, databases, APIs, and software engineering.",
  resumeUrl: "/Anmol_Kumar_Srivastava_Resume.pdf",
  resumeFilename: "Anmol_Kumar_Srivastava_Resume.pdf",
  contactSupportingText: "I'm always interested in building useful products, collaborating on interesting projects, and exploring new opportunities.",
  email: "srivastavaanmol977@gmail.com",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/anmolsri977",
    icon: "github",
    usernamePlaceholder: "github.com/anmolsri977"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anmolkumarsrivastava-javadeveloper-aimlengineer/",
    icon: "linkedin",
    usernamePlaceholder: "linkedin.com/in/anmolkumarsrivastava-javadeveloper-aimlengineer"
  },
  {
    name: "Email",
    url: "mailto:srivastavaanmol977@gmail.com",
    icon: "mail",
    usernamePlaceholder: "srivastavaanmol977@gmail.com"
  }
];

// Exact four statistics requested - no invented numbers
export const statsData: StatItem[] = [
  {
    value: "8.44",
    label: "Current CGPA",
    subtext: "Academic performance"
  },
  {
    value: "3",
    label: "Featured Projects",
    subtext: "Engineered applications"
  },
  {
    value: "2024–2028",
    label: "B.Tech CSE",
    subtext: "ABES Engineering College"
  },
  {
    value: "3rd Year",
    label: "Current Status",
    subtext: "5th Semester"
  }
];

// Actual skills categorized cleanly without fake percentages or progress bars
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    description: "Core programming and querying languages for software systems",
    skills: ["Java", "C++", "Python", "JavaScript", "SQL"]
  },
  {
    name: "Backend",
    description: "Server-side architectures, API design, and data persistence",
    skills: ["Spring Boot", "Spring Security", "JWT", "Hibernate", "REST APIs", "FastAPI"]
  },
  {
    name: "Frontend",
    description: "Responsive web interfaces and user experience engineering",
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },
  {
    name: "Database & Tools",
    description: "Database management, development environments, and version control",
    skills: ["MySQL", "Git", "GitHub", "Maven", "IntelliJ IDEA", "VS Code", "Vite", "NPM"]
  },
  {
    name: "AI / ML",
    description: "Applied generative AI APIs and foundational machine learning libraries",
    skills: ["Gemini API", "SentenceTransformers", "scikit-learn", "pandas", "matplotlib"]
  }
];

// Verified education timeline (ABES Engineering College + Schooling)
export const educationList: EducationEntry[] = [
  {
    institution: "ABES Engineering College, Ghaziabad",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2024–2028",
    score: "8.44",
    scoreType: "Current CGPA",
    status: "3rd Year | 5th Semester",
    level: "college",
    highlights: [
      "Core focus on Data Structures, Algorithms, Object-Oriented Programming, and System Design",
      "Database Management Systems, Operating Systems, and Computer Networks",
      "Software Engineering principles with hands-on Java & Spring Boot backend projects"
    ]
  },
  {
    institution: "Little Flower School, Raptinagar, Gorakhpur",
    degree: "ISC — Class 12",
    period: "2024",
    score: "91.75%",
    scoreType: "Board Examination",
    level: "school"
  },
  {
    institution: "Little Flower School, Raptinagar, Gorakhpur",
    degree: "ICSE — Class 10",
    period: "2022",
    score: "93.33%",
    scoreType: "Board Examination",
    level: "school"
  }
];

// Verified Developer Stats & DSA practice details
export const developerStats: DeveloperStatsData = {
  codeChefRating: "1271",
  contestsCount: "14+",
  description: "Alongside building applications, I regularly practice Data Structures & Algorithms and competitive programming.",
  dsaTopics: [
    "Arrays",
    "Hashing",
    "Sliding Window",
    "Sorting",
    "Trees",
    "Graphs",
    "BFS / DFS",
    "Dynamic Programming"
  ]
};

// Exactly three verified engineering projects
export const projectsData: ProjectItem[] = [
  {
    id: "smarthire",
    number: "01",
    title: "SmartHire",
    subtitle: "Job Application Tracker",
    description: "A full-stack web app that helps job seekers track applications, stay on top of follow-ups, and prepare for interviews with AI assistance.",
    isFeatured: true,
    features: [
      "Secure JWT-based authentication",
      "BCrypt password hashing with Spring Security",
      "Full CRUD for job applications",
      "Search and filtering",
      "Application statistics dashboard",
      "Analytics charts using Recharts",
      "PDF export using jsPDF",
      "Email follow-up reminders using JavaMailSender",
      "AI assistant powered by Gemini API",
      "AI-generated cover letters",
      "AI-powered interview preparation",
      "Live job browsing using the Remotive API",
      "Quick Add from a job URL"
    ],
    engineeringHighlights: [
      "JWT-based authentication and authorization",
      "RESTful Spring Boot backend",
      "React frontend",
      "MySQL persistence with Hibernate",
      "Third-party API integration",
      "Gemini AI integration",
      "Automated email reminders",
      "PDF generation",
      "Analytics dashboard"
    ],
    techStack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "MySQL",
      "React.js",
      "Gemini API",
      "Recharts",
      "jsPDF",
      "JavaMailSender",
      "Remotive API"
    ],
    deployment: {
      backend: "Railway",
      frontend: "Vercel"
    },
    liveUrl: "https://smarthire-backend-delta.vercel.app/",
    githubUrl: "https://github.com/anmolsri977/smarthire-backend",
    previewType: "smarthire"
  },
  {
    id: "codepulse",
    number: "02",
    title: "CodePulse",
    subtitle: "Collaborative Coding Classroom",
    description: "An interactive collaborative coding platform that enables teachers and students to work together in real time, with AI-assisted code review.",
    isFeatured: false,
    features: [
      "Teacher and Student roles",
      "JWT-based authentication",
      "Role-based authorization",
      "Coding rooms",
      "Real-time code synchronization",
      "WebSocket communication",
      "STOMP messaging",
      "Coding challenges",
      "AI-assisted code review using Gemini"
    ],
    engineeringHighlights: [
      "Real-time bidirectional communication",
      "WebSocket + STOMP architecture",
      "Role-based access control",
      "REST APIs",
      "Persistent data with JPA/Hibernate",
      "AI-assisted code analysis"
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "WebSockets",
      "STOMP",
      "Gemini API"
    ],
    previewType: "codepulse"
  },
  {
    id: "bankease",
    number: "03",
    title: "BankEase",
    subtitle: "Full-Stack Banking Platform",
    description: "A secure banking application designed around real-world backend concepts such as authentication, fund transfers, financial workflows, ownership validation, and audit logging.",
    isFeatured: false,
    features: [
      "JWT authentication",
      "Role-based authorization",
      "Account management",
      "Unique 12-digit account number generation",
      "Account status management",
      "Fund transfers",
      "Transaction management",
      "Beneficiary management",
      "Bill payments",
      "Loan management",
      "Investment management",
      "Audit log management"
    ],
    engineeringHighlights: [
      "Secure authentication and authorization",
      "DTO-based API architecture",
      "Jakarta Bean Validation",
      "Transaction management using @Transactional",
      "Ownership enforcement",
      "Modular service architecture",
      "Audit logging",
      "Database persistence with JPA/Hibernate"
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
      "Angular"
    ],
    previewType: "bankease"
  }
];
