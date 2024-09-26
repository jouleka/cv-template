import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, GraduationCap, Code, Globe, ExternalLink } from 'lucide-react';
import styles from './premium-cv.module.css';
import ContactItem from './components/ContactItem';
import ExperienceItem from './components/ExperienceItem';

const ProfessionalTechCV: React.FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img 
          src="/src/assets/1672485667112.jpeg" 
          alt="Jurgen Leka" 
          className={styles.profileImage} 
        />
        <div className={styles.headerContent}>
          <h1 className={styles.name}>Jurgen Leka</h1>
          <h2 className={styles.title}>Full Stack JavaScript Developer</h2>
          <div className={styles.contactInfo}>
            <ContactItem icon={<ExternalLink size={14} />}>www.jouleka.com</ContactItem>
            <ContactItem icon={<Mail size={14} />}>lekacoding@gmail.com</ContactItem>
            <ContactItem icon={<Phone size={14} />}>(+355) 0694456374</ContactItem>
            <ContactItem icon={<Linkedin size={14} />}>linkedin.com/in/jurgen-leka-31470119a</ContactItem>
            <ContactItem icon={<Github size={14} />}>github.com/jouleka</ContactItem>
            <ContactItem icon={<MapPin size={14} />}>Tirana, Albania</ContactItem>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={18} /> Professional Summary
        </h3>
        <p className={styles.summary}>
          Results-driven Full Stack JavaScript Developer with 4+ years of expertise in architecting and implementing scalable web applications. Specializes in Angular, TypeScript, and RxJS. Proven track record of improving application performance by 40%, reducing technical debt by 40%, and increasing team productivity by 25%.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={18} /> Work Experience
        </h3>
        <ExperienceItem
          company="Gutenberg Technology"
          title="Full Stack JavaScript Developer via Helius Systems"
          date="07/03/2022 – Present"
          location="Boston, Massachusetts, United States (Remote)"
          description={[
            "Led refactoring of legacy frontend to Angular 15, improving performance by 40%.",
            "Developed key features for e-learning platform, increasing user engagement by 35%.",
            "Implemented testing strategies, reducing post-release bugs by 50%.",
            "Tech: Angular 15, AngularJS, React, Node.js, HapiJS, TypeScript, RethinkDB, PostgreSQL"
          ]}
        />
        <ExperienceItem
          company="Helius Systems"
          title="Lead Frontend Developer"
          date="15/09/2021 – Present"
          location="Tirana, Albania"
          description={[
            "Designed architecture for internal company app, improving productivity by 20%.",
            "Developed reusable component library, reducing feature development time by 30%.",
            "Optimized front-end performance, achieving 50% reduction in load times.",
            "Tech: Angular 13, TypeScript, SpringBoot, PostgreSQL"
          ]}
        />
        <ExperienceItem
          company="Keendoo"
          title="Full Stack Developer via Helius Systems"
          date="13/09/2021 – 04/03/2022"
          location="Nantes, Pays de la Loire, France (Remote)"
          description={[
            "Developed features for product data repository, increasing data reliability by 40%.",
            "Implemented responsive design, increasing mobile traffic by 25%.",
            "Tech: PolymerJS, SpringBoot, Java, PostgreSQL"
          ]}
        />
        <ExperienceItem
          company="Rayonit"
          title="Full Stack Developer"
          date="01/06/2021 – 10/09/2021"
          location="Tirana, Albania"
          description={[
            "Developed software for Intelligent Transportation Systems, improving efficiency by 30%.",
            "Implemented IoT integrations for real-time data collection.",
            "Tech: Angular 11, TypeScript, SpringBoot, Java, MongoDB"
          ]}
        />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Code className={styles.sectionIcon} size={18} /> Technical Expertise
        </h3>
        <div className={styles.skillGrid}>
          <div>
            <h4 className={styles.skillCategory}>Front-End:</h4>
            <p>Angular (2+), React, TypeScript, JavaScript, RxJS, NgRx, HTML5, CSS3/SCSS, MD3, Tailwind CSS</p>
          </div>
          <div>
            <h4 className={styles.skillCategory}>Back-End:</h4>
            <p>Node.js, Java (Spring Boot), RESTful APIs, GraphQL</p>
          </div>
          <div>
            <h4 className={styles.skillCategory}>Database &amp; DevOps:</h4>
            <p>MongoDB, PostgreSQL, RethinkDB, Docker, CI/CD, Git</p>
          </div>
          <div>
            <h4 className={styles.skillCategory}>Other:</h4>
            <p>Agile/Scrum, Test-Driven Development (TDD), Microservices Architecture</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={18} /> Key Projects
        </h3>
        <p className={styles.projectsIntro}>
          View my portfolio on my personal website at {' '}
          <a href="https://www.jouleka.com/" target="_blank" rel="noopener noreferrer" className={styles.projectsLink}>
            www.jouleka.com <ExternalLink size={12} className={styles.externalLinkIcon} />
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <GraduationCap className={styles.sectionIcon} size={18} /> Education
        </h3>
        <ExperienceItem
          company="Canadian Institute of Technology (CIT)"
          title="Bachelor's Degree in Computer Engineering"
          date="10/2018 – 09/2021"
          location="Tirana, Albania"
          description={[
            "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Management Systems, Web Development",
            "Key Projects: Developed a full fledged web chatting application with whatsapp like features",
            "Skills: Strong foundation in data structures, algorithms, and full-stack web development.",
            "Extracurricular: Member of CIT's Coding Club, competed in several hackathons.",
            "GPA: 3.8/4.0"
          ]}
        />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Globe className={styles.sectionIcon} size={18} /> Languages
        </h3>
        <div className={styles.languageGrid}>
          <div>Albanian: Native</div>
          <div>English: Professional (C1/C2)</div>
          <div>Italian: Professional (B2/C1)</div>
          <div>German: Elementary (A2/B1)</div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTechCV;