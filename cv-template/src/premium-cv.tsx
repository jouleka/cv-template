import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, GraduationCap, Code, Globe } from 'lucide-react';
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
        <div>
          <h1 className={styles.name}>Jurgen Leka</h1>
          <h2 className={styles.title}>Full Stack JavaScript Developer</h2>
          <div className={styles.contactInfo}>
            <ContactItem icon={<Mail size={16} color="#3498db" />}>
              lekacoding@gmail.com
            </ContactItem>
            <ContactItem icon={<Phone size={16} color="#3498db" />}>
              (+355) 0694456374
            </ContactItem>
            <ContactItem icon={<Linkedin size={16} color="#3498db" />}>
              linkedin.com/in/jurgen-leka-31470119a/
            </ContactItem>
            <ContactItem icon={<Github size={16} color="#3498db" />}>
              github.com/jouleka
            </ContactItem>
            <ContactItem icon={<MapPin size={16} color="#3498db" />}>
              Tirana, Albania
            </ContactItem>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={24} /> Professional Summary
        </h3>
        <p>
          Results-driven Full Stack JavaScript Developer with 4+ years of expertise in architecting and implementing scalable web applications. Specializes in Angular, TypeScript, and RxJS, with a proven track record of:
        </p>
        <ul>
          <li>Spearheading the development of enterprise-grade applications, resulting in 30% improved performance and user satisfaction.</li>
          <li>Successfully refactoring legacy systems, reducing technical debt by 40% and enhancing maintainability.</li>
          <li>Mentoring junior developers, leading to a 25% increase in team productivity and code quality.</li>
          <li>Implementing cutting-edge technologies to solve complex problems, driving innovation in e-learning and product data management platforms.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={24} /> Work Experience
        </h3>
        <ExperienceItem
          company="Gutenberg Technology"
          title="Full Stack JavaScript Developer via Helius Systems"
          date="07/03/2022 – Present"
          location="Boston, Massachusetts, United States (Remote)"
          description={[
            "Led the refactoring of legacy frontend from AngularJS/React to Angular 15, resulting in a 40% improvement in application performance.",
            "Architected and developed key features for an e-learning platform, increasing user engagement by 35%.",
            "Implemented robust testing strategies, reducing post-release bugs by 50%.",
            "Mentored interns and junior developers, improving team velocity by 25%.",
            "Tech Stack: Angular 15, AngularJS, React, Node.js, HapiJS, TypeScript, RethinkDB, PostgreSQL"
          ]}
        />
        <ExperienceItem
          company="Helius Systems"
          title="Lead Frontend Developer"
          date="15/09/2021 – Present"
          location="Tirana, Albania"
          description={[
            "Designed and implemented the architecture for an internal company app, improving employee productivity by 20%.",
            "Developed reusable component library, reducing development time for new features by 30%.",
            "Optimized front-end performance, achieving a 50% reduction in load times.",
            "Led a team of 5 developers, consistently delivering projects on time and within budget.",
            "Tech Stack: Angular 13, TypeScript, SpringBoot, PostgreSQL"
          ]}
        />
      </section>

      <div className={styles.pageBreak}></div>

      <ExperienceItem
        company="Keendoo"
        title="Full Stack Developer via Helius Systems"
        date="13/09/2021 – 04/03/2022"
        location="Nantes, Pays de la Loire, France (Remote)"
        description={[
          "Developed new features for a product data repository, increasing data reliability by 40% for agricultural companies.",
          "Implemented responsive design, improving mobile user experience and increasing mobile traffic by 25%.",
          "Optimized database queries, reducing response times by 35%.",
          "Tech Stack: PolymerJS, SpringBoot, Java, PostgreSQL"
        ]}
      />
      <ExperienceItem
        company="Rayonit"
        title="Full Stack Developer"
        date="01/06/2021 – 10/09/2021"
        location="Tirana, Albania"
        description={[
          "Developed custom software solutions for Intelligent Transportation Systems, improving operational efficiency by 30%.",
          "Implemented IoT integrations for real-time data collection, enhancing decision-making processes.",
          "Designed and implemented a scalable architecture capable of handling high-volume data processing.",
          "Tech Stack: Angular 11, TypeScript, SpringBoot, Java, MongoDB"
        ]}
      />

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Code className={styles.sectionIcon} size={24} /> Technical Expertise
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
          <Briefcase className={styles.sectionIcon} size={24} /> Key Projects
        </h3>
        <ExperienceItem
          company="Personal Project"
          title="Kraken Trading Bot"
          date="09/2024"
          location=""
          description={[
            "Developed an automated cryptocurrency trading bot for the Kraken exchange.",
            "Implemented multiple trading strategies with real-time market data analysis.",
            "Integrated secure API interactions for placing and managing trades.",
            "Incorporated risk management features and performance analytics.",
            "Tech Stack: Python, Flask, Javascript/HTML5/SCSS, Kraken API",
            "GitHub: https://github.com/jouleka/kraken-trading-bot"
          ]}
        />
        <ExperienceItem
          company="Personal Project"
          title="Real-Time Chat Room Application"
          date="08/2021"
          location=""
          description={[
            "Developed a full-stack chat application with real-time messaging capabilities.",
            "Implemented advanced features: group management, conversation favorites, and custom user profiles.",
            "Utilized WebSockets for real-time communication, enhancing user experience.",
            "Tech Stack: Angular 12, Spring Boot, MongoDB, WebSockets",
            "GitHub: https://github.com/jouleka/Chat-Application"
          ]}
        />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <GraduationCap className={styles.sectionIcon} size={24} /> Education
        </h3>
        <ExperienceItem
          company="Canadian Institute of Technology (CIT)"
          title="Bachelor's Degree in Computer Engineering"
          date="10/2018 – 09/2021"
          location="Tirana, Albania"
          description={[
            "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Management Systems, Web Development"
          ]}
        />
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Globe className={styles.sectionIcon} size={24} /> Languages
        </h3>
        <div className={styles.skillGrid}>
          <div>
            <h4 className={styles.skillCategory}>Albanian:</h4>
            <p>Native</p>
          </div>
          <div>
            <h4 className={styles.skillCategory}>English:</h4>
            <p>Professional working proficiency (C1/C2)</p>
          </div>
          <div>
            <h4 className={styles.skillCategory}>Italian:</h4>
            <p>Professional working proficiency (B2/C1)</p>
          </div>
          <div>
            <h4 className={styles.skillCategory}>German:</h4>
            <p>Elementary proficiency (A2/B1)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTechCV;