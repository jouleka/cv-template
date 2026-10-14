import { CVData } from './types';

const cvData: CVData = {
  name: "Your Name",
  title: "Full Stack JavaScript Developer",
  profileImage: "/path/to/your/profile/image.jpg",
  contact: {
    website: "your-website.com",
    email: "your.email@example.com",
    phone: "Your Phone Number",
    linkedin: "linkedin.com/in/your-profile",
    github: "github.com/your-username",
    location: "Your Location"
  },
  summary: "Full Stack JavaScript Developer with 5+ years of experience building React.js, Next.js and Angular applications, Node.js services, and Ionic apps for iOS and Android. Experience includes legacy frontend migrations, browser call-state integrations and ownership of mobile releases.",
  experience: [
    {
      company: "Falcar (Communicator)",
      title: "Frontend & Mobile Developer (Contract)",
      date: "Mar 2025 - Present",
      location: "Remote",
      description: [
        "Built Communicator's Ionic mobile app from scratch, delivering a shared codebase for iOS and Android.",
        "Owned mobile delivery across both platforms, including platform-specific builds, release preparation and App Store / Google Play submissions.",
        "Developed the Angular frontend for a cloud workforce-management platform covering attendance, scheduling and employee self-service.",
      ]
    },
    {
      company: "myCicero",
      title: "Frontend Developer",
      date: "Jan 2024 - Oct 2026",
      location: "Tirana, Albania (Remote)",
      description: [
        "Built a multi-tenant Angular monorepo with shared application logic and content-driven interfaces for brand-specific customization.",
        "Integrated REST APIs and introduced NgRx state management to keep data and frontend behavior consistent across tenants.",
      ]
    },
    {
      company: "Callblitz",
      title: "JavaScript Developer (Part-time)",
      date: "Mar 2025 - May 2026",
      location: "Remote",
      description: [
        "Resolved call connectivity and integration issues in the JavaScript browser extension used alongside Callblitz's video platform.",
        "Implemented DOM-based call-state detection in third-party tools such as HubSpot, passing call events to the backend to keep Callblitz's presence display aligned with active calls.",
        "Developed Angular frontend and Node.js backend features, and contributed to native macOS and Windows applications in Swift and C#.",
      ]
    },
    {
      company: "Gutenberg Technology",
      title: "Full Stack JavaScript Developer",
      date: "Mar 2022 - May 2025",
      location: "Boston, Massachusetts, United States (Remote)",
      description: [
        "Modernized an e-learning frontend spanning AngularJS and React.js, migrating legacy functionality to Angular 15.",
        "Worked across React.js and Angular UI code and Node.js / HapiJS services to deliver and integrate product features.",
        "Expanded release testing to catch regressions during frontend migration and feature development.",
      ]
    },
    {
      company: "Keendoo",
      title: "Full Stack Developer",
      date: "Sep 2021 - Mar 2022",
      location: "Nantes, France (Remote)",
      description: [
        "Developed product data-management features with PolymerJS, Java / Spring Boot and PostgreSQL.",
        "Improved responsive layouts and mobile usability across the frontend.",
      ]
    },
    {
      company: "Rayonit",
      title: "Full Stack Developer",
      date: "Jun 2021 - Sep 2021",
      location: "Tirana, Albania",
      description: [
        "Built intelligent transportation software using Angular, TypeScript, Java / Spring Boot and MongoDB.",
        "Integrated connected sensors for real-time traffic data collection.",
      ]
    },
  ],
  skills: {
    "Frontend": "React.js, Next.js, Angular, AngularJS, TypeScript, JavaScript, RxJS, NgRx, HTML5, CSS / SCSS, Tailwind CSS, UIkit",
    "Backend": "Node.js, HapiJS, Java / Spring Boot, REST APIs, GraphQL",
    "Mobile & Desktop": "Ionic, iOS / Android releases, Swift, C#, browser extensions",
    "Data & Delivery": "PostgreSQL, MongoDB, RethinkDB, Docker, CI/CD, Git, Webpack, monorepos, multi-tenant applications",
  },
  education: [
    {
      institution: "University Name",
      degree: "Your Degree",
      date: "Start Year – End Year",
      location: "University Location",
      details: [
        "Relevant stuff"
      ]
    },
  ],
  languages: [
    { language: "Language 1", proficiency: "Proficiency Level" },
    { language: "Language 2", proficiency: "Proficiency Level" },
  ],
  projects: [
    {
      name: "Project Name",
      url: "project-url.com",
      description: "Short description of what the project does and why it matters.",
      tech: "Tech 1, Tech 2, Tech 3"
    }
  ]
};

export default cvData;
