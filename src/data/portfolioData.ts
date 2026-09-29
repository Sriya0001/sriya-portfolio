import { Project, Experience, Education, Achievement, Certification } from '../types';

export const PERSONAL_INFO = {
  name: "Sriya Kunisetty",
  firstName: "Sriya",
  lastName: "Kunisetty",
  role: "Software Engineer & Backend / Distributed Systems Specialist",
  tagline: "Building high-performance distributed backends, resilient cloud systems, and intelligent AI-powered applications.",
  college: "Vasavi College of Engineering, Hyderabad",
  degree: "B.E. Information Technology",
  cgpa: "9.37",
  company: "DBS Technology Services India (DBS Tech)",
  companyRole: "Technology Apprentice",
  email: "kunisettysriya@gmail.com",
  phone: "+91 8074929808",
  location: "Hyderabad, India",
  links: {
    github: "https://github.com/Sriya0001",
    linkedin: "https://www.linkedin.com/in/sriya-kunisetty-60719a290",
    leetcode: "https://leetcode.com/u/sriya_kunisetty/",
    email: "mailto:kunisettysriya@gmail.com",
    phone: "tel:+918074929808"
  },
  bio: "An enthusiastic software engineer with strong foundations in data structures, distributed backends, performance engineering, and AI-powered applications. I'm driven by a simple motto: Keep learning, keep solving, keep building."
};

export const STATS = [
  { value: "9.37", suffix: "", label: "CGPA @ Vasavi IT", subtext: "Consistent Academic Honors" },
  { value: "18K+", suffix: " RPS", label: "Multiplayer Engine", subtext: "0.398ms P50 Latency" },
  { value: "3000", prefix: "Top ", suffix: "", label: "Amazon ML School", subtext: "Selected out of 1.3 Lakh applicants" },
  { value: "1.65", suffix: "L+", label: "Flipkart GRiD 8.0", subtext: "National Semifinalist" },
  { value: "1st", suffix: " Place", label: "XcelCrowd SprintOne", subtext: "Engineering Challenge Winner" }
];

export const SKILL_MARQUEE = [
  "C++", "Python", "Java", "React.js", "FastAPI", "Node.js", "Express.js", 
  "Spring Boot", "MySQL 8.0", "Redis", "MongoDB Atlas", "AWS (S3 & EC2)", 
  "Docker", "Linux CLI", "Prometheus & Grafana", "Terraform", "LLaMA-3.3-70B", 
  "LangChain", "Agentic AI", "Load & Stress Testing", "Data Structures & Algorithms", 
  "System Design", "OOP", "DBMS", "Operating Systems", "Computer Networks"
];

export const EXPERTISE_AREAS = [
  {
    number: "01",
    title: "High-Performance Distributed Systems & Backend Engineering",
    description: "Designing multi-threaded low-latency backends, custom binary wire protocols, and distributed caching pipelines. Proven capability handling 18,000+ RPS with sub-millisecond latencies, automated fault-injection testing, and telemetry instrumentation.",
    keyTech: ["C++", "Python", "Redis", "MySQL 8.0", "Prometheus", "Grafana", "Docker", "AWS", "Terraform"],
    icon: "Layers"
  },
  {
    number: "02",
    title: "Generative AI & Agentic LLM Architectures",
    description: "Building production-grade AI agents and multi-agent orchestration frameworks using LLaMA-3.3-70B via Groq SDK, LangChain, and FastAPI. Specializing in contextual planning, tool-calling pipelines, and automated real-time adaptation.",
    keyTech: ["FastAPI", "LLaMA-3.3-70B", "Groq SDK", "LangChain", "Generative AI", "Agentic AI", "Python", "PostgreSQL"],
    icon: "Brain"
  },
  {
    number: "03",
    title: "Cloud Infrastructure, High Concurrency & Security",
    description: "Architecting decoupled 3-tier platforms with Redis distributed rate limiting, AWS S3 pre-signed cryptographic hashing, PWA integration, stateless JWT authentication, and rigorous concurrency stress testing under heavy load.",
    keyTech: ["AWS S3", "Redis", "MongoDB Atlas", "React.js", "Node.js", "Express.js", "SHA-256 Hashing", "PWA"],
    icon: "Cloud"
  },
  {
    number: "04",
    title: "Algorithmic Problem Solving & System Foundations",
    description: "Deep problem-solving mastery in Data Structures & Algorithms, Binary Max-Heap scheduling, dynamic pathfinding (Dijkstra, A*, BFS, DFS), Object-Oriented Programming, Database Management, and Operating System internals.",
    keyTech: ["Data Structures & Algorithms", "Heap Schedulers", "Graph Algorithms", "OOP", "DBMS", "OS Internals", "Computer Networks"],
    icon: "Code"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smart-student-hub",
    title: "Smart Student Hub",
    tagline: "3-tier cloud platform with Redis rate limiting, AWS S3 SHA-256 verification & PWA support",
    description: "Built a centralized cloud platform and digital portfolio connecting students, faculty, and administrators to manage academic records, certificates, projects, and notices.",
    longDescription: "Engineered distributed Redis rate limiting and AWS S3 pre-signed URLs with SHA-256 cryptographic hashing to secure APIs and enable direct file transfers with tamper detection. Executed concurrency stress testing with 500 concurrent requests and enforced 3-tier RBAC with stateless JWT authentication, automated mentor assignment, and Progressive Web App (PWA) installation across devices.",
    architectureHighlights: [
      "3-tier decoupled cloud platform deployed across Vercel, Render, and AWS S3 with PWA cross-platform installation",
      "Distributed Redis rate limiting protecting API routes from brute-force spikes and Denial of Service attempts",
      "Direct-to-S3 file uploads using cryptographically signed pre-signed URLs with SHA-256 tamper-proof file hashing",
      "Stress-tested with 500 concurrent requests with role-based access control and automated mentor-student workflows"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Redis", "AWS S3", "PWA", "JWT"],
    image: "/project-hub.jpg",
    category: "Cloud & Systems",
    tag: "Cloud Architecture & PWA",
    github: "https://github.com/Sriya0001/Smart-Student-Hub",
    live: "https://github.com/Sriya0001/Smart-Student-Hub",
    metrics: [
      { label: "Concurrency Stress Test", value: "500 Concurrent Reqs" },
      { label: "Security Protocol", value: "SHA-256 Pre-Signed URLs" },
      { label: "Platform Type", value: "Progressive Web App" }
    ]
  },
  {
    id: "smart-medical-system",
    title: "Smart Medical Practice Management & Patient Engagement System",
    tagline: "Enterprise healthcare platform with 30-min scheduling, double-booking prevention & AI summaries",
    description: "Developed a full-stack medical practice platform with role-based Patient, Doctor, and Admin portals for appointment management, patient records, and personalized dashboards.",
    longDescription: "Engineered a 30-minute appointment scheduling system with provider availability validation and double-booking prevention, along with a physician workstation for SOAP clinical notes, e-prescriptions, and AI-assisted patient history summaries. Implemented secure REST APIs with JWT authentication, role-based access control (RBAC), and automated testing.",
    architectureHighlights: [
      "Role-based Patient, Doctor, and Admin portals with clinical dashboards and custom workflows",
      "30-minute slot appointment engine with provider availability verification and double-booking prevention locks",
      "Physician workstation for SOAP notes, digital prescriptions, and automated AI patient summary generation",
      "Secure REST APIs with Spring Security, JWT stateless tokens, RBAC, and automated unit test coverage"
    ],
    tech: ["Java", "Spring Boot", "Angular", "Spring Security", "JWT", "MySQL", "REST APIs"],
    image: "/project-medical.jpg",
    category: "Full-Stack",
    tag: "Enterprise Full-Stack / Spring Boot",
    github: "https://github.com/Sriya0001/Smart-Medical-Practice-Management-System",
    live: "https://github.com/Sriya0001/Smart-Medical-Practice-Management-System",
    metrics: [
      { label: "Scheduling Granularity", value: "30-Min Slots" },
      { label: "User Portals", value: "Patient / Doctor / Admin" },
      { label: "Security", value: "Spring Security + JWT" }
    ]
  },
  {
    id: "thrillsafari-planner",
    title: "ThrillSafari – Smart Theme Park Ride Planner",
    tagline: "Optimal ride scheduler minimizing wait times using Binary Max-Heap & Random Forest ML",
    description: "Built a smart full-stack web application that generates optimal ride plans for theme park visitors to maximize thrills while minimizing total wait times based on user constraints.",
    longDescription: "Developed a Random Forest queue-time predictor using historical attraction datasets and a binary max-heap scheduler to predict wait times and compute optimal ride sequences within available time budgets. Implemented cosine-similarity ride recommendations, safety constraints, and JWT-authenticated administrator APIs.",
    architectureHighlights: [
      "Machine learning wait-time predictor trained with Random Forest regression on attraction telemetry",
      "Binary Max-Heap greedy scheduler to prioritize highest-thrill attractions within dynamic time-budget limits",
      "Cosine-similarity recommendation engine matching personalized visitor thrill preferences and safety filters",
      "JWT-authenticated administrator portal for live attraction queue status and ride maintenance scheduling"
    ],
    tech: ["React.js", "Python Flask", "MySQL", "scikit-learn", "JWT", "Data Structures & Algorithms"],
    image: "/project-safari.jpg",
    category: "AI & ML",
    tag: "AI / ML & Algorithmic Optimization",
    github: "https://github.com/Sriya0001/ThrillSafari-Theme-Park-Planner",
    live: "https://github.com/Sriya0001/ThrillSafari-Theme-Park-Planner",
    metrics: [
      { label: "Predictor ML", value: "Random Forest Model" },
      { label: "Scheduler", value: "Binary Max-Heap" },
      { label: "Recommendation", value: "Cosine Similarity" }
    ]
  },
  {
    id: "next-in-line",
    title: "Next In Line",
    tagline: "Lightweight internal job application pipeline with automated waitlist queue buffer",
    description: "A lightweight internal tool that manages a job application pipeline without a spreadsheet. Companies define how many applicants they actively review at once. Everything beyond that waits. When someone exits the pipeline, the waitlist moves automatically, so no manual intervention. One focused system. Built to actually run inside a small team.",
    longDescription: "A lightweight internal tool that manages a job application pipeline without a spreadsheet. Companies define how many applicants they actively review at once. Everything beyond that waits. When someone exits the pipeline, the waitlist moves automatically, so no manual intervention. One focused system. Built to actually run inside a small team.",
    architectureHighlights: [
      "Fixed-capacity active applicant review pool preventing recruiter context switching and hiring fatigue",
      "Automated FIFO waitlist promotion buffer triggering whenever an active candidate exits or completes review",
      "Eliminates spreadsheet chaos with a unified, zero-manual-intervention internal team dashboard",
      "Focused lightweight state machine architected specifically for rapid operation inside small engineering teams"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "State Machine"],
    image: "/project-nextinline.svg",
    category: "Full-Stack",
    tag: "Internal Tool & Pipeline Automation",
    github: "https://github.com/Sriya0001/Next_In_Line",
    live: "https://github.com/Sriya0001/Next_In_Line",
    metrics: [
      { label: "Workflow", value: "Autonomous FIFO" },
      { label: "Intervention", value: "0 Manual Steps" },
      { label: "Target", value: "Small Team Pipeline" }
    ]
  },
  {
    id: "distributed-game-server",
    title: "Distributed Multiplayer Game Server & Load Testing Platform",
    tagline: "Multi-threaded C++ virtual player simulator handling 18,000+ RPS with 0.398ms P50 latency",
    description: "Engineered a multi-threaded C++ virtual player simulator modeling gameplay call patterns including movement, combat, and state queries using custom binary wire framing.",
    longDescription: "Built automated Python load testing across 50–500 concurrent players, achieving 18,000+ RPS with 0.398 ms P50 and 0.943 ms P99 latency. Implemented Redis caching and MySQL 8.0 persistence with automated fault-injection tests for malformed packets, Redis failures, and TCP RST storms. Integrated Prometheus/Grafana observability and automated cloud deployment using Docker, AWS, and Terraform.",
    architectureHighlights: [
      "Multi-threaded C++ virtual player simulator with custom binary wire framing for gameplay protocols",
      "Automated Python load testing across 50–500 concurrent players achieving 18,000+ RPS (0.398 ms P50, 0.943 ms P99)",
      "Redis caching layer & MySQL 8.0 persistence with fault-injection tests for malformed packets, cache dropouts, and TCP RST storms",
      "End-to-end telemetry with Prometheus and Grafana, containerized with Docker and deployed via Terraform on AWS"
    ],
    tech: ["C++", "Python", "Redis", "MySQL 8.0", "Prometheus", "Grafana", "Docker", "AWS", "Terraform"],
    image: "/project-gameserver.jpg",
    category: "Cloud & Systems",
    tag: "High-Performance Systems & Load Testing",
    github: "https://github.com/Sriya0001/Distributed-Multiplayer-Game-Server-Load-Tester",
    live: "https://github.com/Sriya0001/Distributed-Multiplayer-Game-Server-Load-Tester",
    metrics: [
      { label: "Throughput", value: "18,000+ RPS" },
      { label: "P50 Latency", value: "0.398 ms" },
      { label: "P99 Latency", value: "0.943 ms" }
    ]
  },
  {
    id: "aromi-fitness-coach",
    title: "AroMi – AI Fitness & Wellness Coach",
    tagline: "Multi-agent LLaMA-3.3-70B coach with 95.6% plan adaptation accuracy (GenAI Forge Hackathon 2026)",
    description: "Built an AI fitness platform providing custom workout routines and nutrition plans using user biometrics, health conditions, and dietary preferences.",
    longDescription: "Implemented a multi-agent engine using LLaMA-3.3-70B via Groq SDK with specialized workout, nutrition, and recovery agents, achieving 95.6% plan adaptation accuracy on 600+ test user profiles. Powered by a scalable FastAPI backend with JWT authentication, PostgreSQL, and integrations with YouTube Data API, Spoonacular, and Calendar APIs for automated guidance and scheduling.",
    architectureHighlights: [
      "Multi-agent architecture featuring specialized workout, nutrition, and recovery agents via LLaMA-3.3-70B on Groq SDK",
      "Achieved 95.6% plan adaptation accuracy validated across 600+ diverse test user biometric profiles",
      "Scalable FastAPI backend with secure JWT authentication and optimized PostgreSQL relational storage",
      "Integrated YouTube Data API for video workouts, Spoonacular for personalized meal recipes, and Calendar APIs"
    ],
    tech: ["FastAPI", "React.js", "PostgreSQL", "LLaMA-3.3-70B", "Groq SDK", "LangChain", "YouTube Data API", "REST APIs"],
    image: "/project-aromi.jpg",
    category: "AI & ML",
    tag: "GenAI Forge Hackathon 2026",
    github: "https://github.com/Sriya0001/AroMi-AI-Fitness-Wellness-Coach",
    live: "https://github.com/Sriya0001/AroMi-AI-Fitness-Wellness-Coach",
    metrics: [
      { label: "Adaptation Accuracy", value: "95.6%" },
      { label: "LLM Model", value: "LLaMA-3.3-70B (Groq)" },
      { label: "Test Profiles", value: "600+ Profiles" }
    ]
  },
  {
    id: "graph-visualizer",
    title: "Graph Algorithms Visualizer",
    tagline: "Dynamic interactive pathfinding visualizer with BFS, DFS, Dijkstra’s & A* on custom grids",
    description: "Developed a dynamic pathfinding visualizer to animate graph algorithms on a customizable interactive grid with custom wall obstacles and variable animation speeds.",
    longDescription: "Implemented BFS, DFS, Dijkstra’s, and A* search algorithms for interactive shortest-path and graph traversal visualization. Provides custom maze generation, interactive grid drawing, and real-time step counters comparing time complexities and nodes visited.",
    architectureHighlights: [
      "Interactive 2D grid canvas supporting obstacle drawing, start/end node repositioning, and dynamic weight assignment",
      "Implemented step-by-step animations for Breadth-First Search (BFS), Depth-First Search (DFS), Dijkstra's Algorithm, and A* Search",
      "Real-time comparative performance telemetry showing nodes visited, path length, and execution time",
      "Built with Python Flask backend and responsive JavaScript grid visualization frontend"
    ],
    tech: ["Python", "Flask", "JavaScript", "HTML5 Canvas", "Data Structures & Algorithms"],
    image: "/project-graph.jpg",
    category: "AI & ML",
    tag: "Data Structures & Algorithms",
    github: "https://github.com/Sriya0001/Graph-Algorithms-Visualizer",
    live: "https://github.com/Sriya0001/Graph-Algorithms-Visualizer",
    metrics: [
      { label: "Algorithms", value: "BFS, DFS, Dijkstra, A*" },
      { label: "Interaction", value: "Custom Grid & Mazes" },
      { label: "Telemetry", value: "Nodes Visited & Path Length" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Technology Apprentice",
    organization: "DBS Technology Services India (DBS Tech)",
    location: "Hyderabad, India",
    period: "June 2026 – Present",
    description: "Selected for a competitive apprenticeship at a global banking technology organization, currently building core technical foundations.",
    highlights: [],
    type: "experience"
  },
  {
    role: "Web Development Member",
    organization: "Data Structures & Algorithms Club, VCE",
    location: "Hyderabad, India",
    period: "2024 – Present",
    description: "Built club web platforms, conducted technical problem-solving sessions, and assisted peers in mastering algorithmic concepts.",
    highlights: [],
    type: "leadership"
  },
  {
    role: "Public Relations & Content Member",
    organization: "Swayam ED Cell, VCE",
    location: "Hyderabad, India",
    period: "2024 – Present",
    description: "Led content creation, brand communication, and managed outreach for entrepreneurship initiatives and workshops.",
    highlights: [],
    type: "leadership"
  },
  {
    role: "Library Committee Member",
    organization: "Vasavi College of Engineering (VCE)",
    location: "Hyderabad, India",
    period: "2023 – Present",
    description: "Collaborated with institutional faculty to coordinate digital learning resources, book allocations, and student access.",
    highlights: [],
    type: "leadership"
  }
];

export const POSITIONS_OF_RESPONSIBILITY = [
  {
    role: "Web Development Member",
    organization: "Data Structures & Algorithms Club, VCE",
    period: "2024 – Present",
    description: "Building club web platforms, conducting technical problem-solving sessions, and assisting peers in mastering algorithmic concepts."
  },
  {
    role: "Public Relations & Content Member",
    organization: "Swayam ED Cell, VCE",
    period: "2024 – Present",
    description: "Leading content creation, brand communication, and managing outreach for entrepreneurship initiatives and workshops."
  },
  {
    role: "Library Committee Member",
    organization: "Vasavi College of Engineering (VCE)",
    period: "2023 – Present",
    description: "Collaborating with institutional leadership to streamline digital learning resources, book allocations, and student access."
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.E, Information Technology",
    institution: "Vasavi College of Engineering, Hyderabad",
    location: "Hyderabad, Telangana",
    period: "2023 – 2027",
    score: "CGPA: 9.37 / 10",
    details: "Deep focus on Data Structures & Algorithms, Backend Engineering, Distributed Systems, Database Management, and Artificial Intelligence.",
    highlight: "Top Academic Ranker (9.37 CGPA)"
  },
  {
    degree: "Intermediate (12th)",
    institution: "Sri Chaitanya Junior College, Hyderabad",
    location: "Hyderabad, Telangana",
    period: "2021 – 2023",
    score: "97.7%",
    details: "Mathematics, Physics, and Chemistry (MPC) with stellar state-level academic honors.",
    highlight: "Distinction: 97.7%"
  },
  {
    degree: "CBSE (10th)",
    institution: "Sister Nivedita School",
    location: "Hyderabad, Telangana",
    period: "2021",
    score: "97.2%",
    details: "Graduated with top academic standing and competitive scholarship recognition.",
    highlight: "Distinction: 97.2%"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Amazon ML Summer School 2026",
    subtitle: "Top 3,000 nationwide out of 1.3 Lakh Applicants",
    description: "Selected into Amazon's prestigious Machine Learning mentorship program after competitive algorithmic screening rounds.",
    badge: "Top 2.3% Nationwide",
    iconName: "Zap",
    rank: "Ranked in Top 3K / 130,000+"
  },
  {
    title: "Flipkart GRiD 8.0 National Semifinalist",
    subtitle: "Among 1.65 Lakh+ Registrations Nationwide",
    description: "Advanced to national semifinal rounds in Flipkart's flagship engineering challenge, designing complex algorithmic solutions under scale.",
    badge: "National Semifinalist",
    iconName: "Award",
    rank: "Top Tier / 165,000+"
  },
  {
    title: "Amazon ML Challenge 2025",
    subtitle: "Top 6K Team Rank among 83K+ Registered Participants",
    description: "Achieved a Top 6K team rank in the Amazon ML Challenge 2025, competing among 83K+ registered participants nationwide.",
    badge: "Top 6K Team Rank",
    iconName: "Zap",
    rank: "Top 6K / 83,000+ Participants"
  },
  {
    title: "1st Place – XcelCrowd SprintOne",
    subtitle: "Engineering Challenge Winner",
    description: "Captured First Place for engineering a resilient, real-world full-stack engineering solution under strict time constraints.",
    badge: "Champion",
    iconName: "Trophy"
  },
  {
    title: "1st Runner-up – GreenTech Hackathon",
    subtitle: "Top 30 Teams from 200+ Registrations",
    description: "Secured 1st Runner-up honors for building an impactful sustainable technology solution during intense competitive hackathon sprints.",
    badge: "1st Runner-up",
    iconName: "Star"
  },
  {
    title: "Top Idea – All India MSME Hackathon 2025",
    subtitle: "Selected from 250+ Nationwide Registrations",
    description: "Recognized as one of the top innovative technology ideas at the national MSME innovation challenge.",
    badge: "Top Idea Honors",
    iconName: "Zap"
  },
  {
    title: "Top 10 Teams – Department Coding Contest",
    subtitle: "Competing among 180 participants",
    description: "Secured a place among the top 10 teams in department-level coding contest, solving competitive programming and algorithmic challenges.",
    badge: "Top 10 Finalist",
    iconName: "Trophy",
    rank: "Top 10 / 180 Participants"
  },
  {
    title: "Adobe India & Myntra WeForShe Round 2 Qualifier",
    subtitle: "National Engineering Competitions 2025",
    description: "Successfully qualified for Round 2 in Adobe India Hackathon 2025 and Myntra WeForShe Hackerramp 2025.",
    badge: "Round 2 Qualifier",
    iconName: "Award"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Computing Using Python",
    issuer: "NPTEL (IIT)",
    grade: "Elite + Gold",
    badgeType: "gold"
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL (IIT)",
    grade: "Elite + Silver",
    badgeType: "silver"
  },
  {
    name: "Database Management Systems",
    issuer: "NPTEL (IIT)",
    grade: "Certified",
    badgeType: "silver"
  },
  {
    name: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    grade: "Certified",
    badgeType: "silver"
  },
  {
    name: "Machine Learning Foundations",
    issuer: "AWS Academy Graduate",
    grade: "Certified Graduate",
    badgeType: "aws"
  },
  {
    name: "Cloud Foundations",
    issuer: "AWS Academy Graduate",
    grade: "Certified Graduate",
    badgeType: "aws"
  }
];

export const TECHNICAL_SKILLS_DETAILED = {
  languages: ["C++", "Python", "Java", "C", "JavaScript", "SQL", "TypeScript", "HTML/CSS"],
  webFrameworks: ["React.js", "FastAPI", "Node.js", "Express.js", "Spring Boot", "Angular", "Flask", "Spring Security", "Tailwind CSS"],
  testingPerformance: ["Load Testing (50-500 players, 18,000+ RPS)", "Stress Testing (500 concurrent reqs)", "Performance Analysis", "Fault Injection"],
  cloudInfrastructure: ["AWS (S3, EC2)", "Docker", "Linux CLI", "Terraform", "Render", "Vercel"],
  databasesMonitoring: ["MySQL 8.0", "Redis", "MongoDB Atlas", "PostgreSQL", "Prometheus", "Grafana"],
  aiMl: ["Generative AI & LLMs", "Agentic AI", "LLaMA-3.3-70B (Groq)", "LangChain", "Supervised Learning", "Deep Neural Networks", "Scikit-Learn", "Random Forest"],
  coreConcepts: ["Data Structures & Algorithms", "Object Oriented Programming (OOP)", "DBMS", "Operating Systems (OS)", "Computer Networks (CN)", "System Design"]
};
