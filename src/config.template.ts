import type { CVData } from './types';

const cvData: CVData = {
  "name": "Jurgen Leka",
  "title": "Full Stack JavaScript Developer",
  "profileImage": "/assets/linkedin_profile.jpeg",
  "contact": {
    "website": "www.jurgenleka.com",
    "email": "lekacoding@gmail.com",
    "phone": "(+355) 0694456374",
    "linkedin": "linkedin.com/in/jurgen-leka-31470119a",
    "github": "github.com/jouleka",
    "location": "Tirana, Albania"
  },
  "summary": "Full Stack JavaScript Developer with 6 years of experience building React.js, Next.js and Angular applications, Node.js services, and Ionic apps for iOS and Android. Technical ownership spans frontend architecture, legacy migrations, API integrations and mobile releases.",
  "experience": [
    {
      "company": "Moveo",
      "title": "Lead Frontend Developer",
      "date": "Jan 2024 - Present",
      "location": "Tirana, Albania (Remote)",
      "description": [
        "Led frontend architecture for a multi-tenant Angular monorepo, with shared application logic and configurable interfaces for brand-specific customization.",
        "Integrated REST APIs and introduced NgRx state management to keep frontend data and behavior consistent across tenants.",
        "Built an Ionic mobile app from scratch, delivering a shared codebase for iOS and Android.",
        "Owned platform-specific builds, release preparation, and App Store and Google Play submissions.",
        "Developed workforce-management features covering attendance, scheduling and employee self-service.",
        "Web & mobile: Angular, TypeScript, RxJS, NgRx, Ionic, UIkit",
        "Architecture & tools: Monorepos, multi-tenant applications, REST APIs, Webpack, Git"
      ]
    },
    {
      "company": "Helius",
      "title": "Full Stack Developer / Frontend Migration Lead",
      "date": "Sep 2021 - Mar 2024",
      "location": "Remote",
      "description": [
        "Led frontend modernization of an e-learning platform, migrating legacy AngularJS functionality to Angular 15 and maintaining React.js features.",
        "Delivered product features across Angular and React.js interfaces and Node.js / HapiJS services.",
        "Developed product data-management features with PolymerJS, Java / Spring Boot and PostgreSQL.",
        "Improved responsive layouts and mobile usability across the frontend.",
        "Expanded release testing to catch regressions during frontend migration and feature development.",
        "Web: Angular, AngularJS, React.js, PolymerJS, TypeScript, JavaScript",
        "Backend: Node.js, HapiJS, Java, Spring Boot",
        "Data: PostgreSQL, RethinkDB"
      ]
    },
    {
      "company": "Rayonit",
      "title": "Full Stack Developer",
      "date": "Jun 2021 - Aug 2021",
      "location": "Tirana, Albania",
      "description": [
        "Built intelligent transportation software using Angular, TypeScript, Java / Spring Boot and MongoDB.",
        "Integrated connected sensors for real-time traffic data collection.",
        "Stack: Angular, TypeScript, Java, Spring Boot, MongoDB"
      ]
    }
  ],
  "skills": {
    "Frontend": "React.js, Next.js, Angular, AngularJS, TypeScript, JavaScript, RxJS, NgRx, HTML5, CSS / SCSS, Tailwind CSS, UIkit",
    "Backend": "Node.js, HapiJS, Java / Spring Boot, REST APIs, GraphQL",
    "Mobile": "Ionic, iOS / Android releases",
    "Data & Delivery": "PostgreSQL, MongoDB, RethinkDB, Docker, CI/CD, Git, Webpack, monorepos, multi-tenant applications"
  },
  "education": [
    {
      "institution": "Canadian Institute of Technology (CIT)",
      "degree": "Bachelor's Degree in Computer Engineering",
      "date": "Oct 2018 - Sep 2021",
      "location": "Tirana, Albania",
      "details": [
        "Coursework: Data Structures, Algorithms, Software Engineering, Database Management Systems and Web Development.",
        "Built a full-stack web chat application with WhatsApp-style features. GPA: 3.8/4.0.",
        "Member of CIT's Coding Club; participated in hackathons."
      ]
    }
  ],
  "languages": [
    {
      "language": "Albanian",
      "proficiency": "Native"
    },
    {
      "language": "English",
      "proficiency": "Professional (C1/C2)"
    },
    {
      "language": "Italian",
      "proficiency": "Professional (B2/C1)"
    },
    {
      "language": "German",
      "proficiency": "Elementary (A2/B1)"
    }
  ],
  "projects": [
    {
      "name": "MySigner",
      "url": "mysigner.dev",
      "description": "Founded and built a SaaS that automates iOS and Android app signing and deployment to TestFlight, the App Store and Google Play. Handles provisioning profiles, certificates and keystores through a single CLI command.",
      "tech": "Ruby on Rails 8, Hotwire, PostgreSQL, Solid Queue, Tailwind CSS, App Store Connect API, Google Play Developer API, Docker, Kamal"
    }
  ]
};

export default cvData;
