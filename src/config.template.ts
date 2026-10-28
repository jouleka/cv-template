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
  "summary": "Full Stack JavaScript Developer with 6 years of experience building React.js, Next.js and Angular applications and Node.js services. Leads frontend architecture, state management, legacy migrations and release delivery, with hands-on work in CI/CD, production builds and deployment automation.",
  "experience": [
    {
      "company": "Moveo",
      "title": "Lead Frontend Developer",
      "date": "Jan 2024 - Present",
      "location": "Tirana, Albania (Remote)",
      "description": [
        "Led frontend architecture for a multi-tenant Angular monorepo, structuring shared application logic and configurable interfaces for multiple brands.",
        "Introduced NgRx state management and used RxJS with REST API integrations to keep application data and UI behavior consistent across tenants.",
        "Delivered attendance, scheduling and employee self-service workflows, connecting Angular screens to backend services.",
        "Built an Ionic app from scratch with a shared iOS/Android codebase and owned platform-specific builds, release preparation and store submissions.",
        "Frontend: Angular, TypeScript, RxJS, NgRx, Ionic, UIkit",
        "Architecture & tooling: Monorepos, multi-tenant applications, REST APIs, Webpack, Git"
      ]
    },
    {
      "company": "Helius",
      "title": "Full Stack Developer / Frontend Migration Lead",
      "date": "Sep 2021 - Mar 2024",
      "location": "Remote",
      "description": [
        "Led frontend modernization of an e-learning platform, migrating legacy AngularJS functionality to Angular 15 while maintaining React.js features.",
        "Delivered full-stack product features across Angular and React.js interfaces and Node.js / HapiJS services.",
        "Developed product data-management features with PolymerJS, Java / Spring Boot and PostgreSQL, improving responsive layouts and mobile usability.",
        "Expanded regression testing for frontend migrations and product changes to catch release issues before delivery.",
        "Mentored interns through onboarding, ticket breakdown and hands-on technical support.",
        "Frontend: Angular, AngularJS, React.js, PolymerJS, TypeScript, JavaScript",
        "Backend & data: Node.js, HapiJS, Java, Spring Boot, PostgreSQL, RethinkDB"
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
    "Frontend": "React.js, Next.js, Angular, AngularJS, TypeScript, JavaScript, HTML5, CSS / SCSS, Tailwind CSS, UIkit",
    "Architecture & State": "RxJS, NgRx, monorepos, multi-tenant applications, shared UI logic, REST API integration",
    "Backend & Data": "Node.js, HapiJS, Java / Spring Boot, REST APIs, GraphQL, PostgreSQL, MongoDB, RethinkDB",
    "Build & Quality": "TypeScript checks, ESLint, Vite, Webpack, regression testing, release validation",
    "Release & Deployment": "GitHub Actions, CI/CD, Git, Cloudflare Workers, Docker, Kamal, production verification",
    "Mobile Delivery": "Ionic, iOS / Android builds, code signing, TestFlight, App Store / Google Play releases"
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
      "description": "Built a Rails dashboard, API and Ruby CLI that automate code signing, build uploads and release submissions for iOS and Android. Integrated App Store Connect and Google Play APIs for TestFlight delivery, store metadata and scheduled/phased releases. Added GitHub Actions workflows and Docker/Kamal deployment automation.",
      "tech": "Ruby on Rails 8, Ruby CLI, Hotwire, PostgreSQL, Solid Queue, Tailwind CSS, App Store Connect API, Google Play Developer API, GitHub Actions, Docker, Kamal"
    }
  ]
};

export default cvData;
