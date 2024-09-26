import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, GraduationCap, Code, Globe, ExternalLink } from 'lucide-react';
import styles from './premium-cv.module.css';
import ContactItem from './components/ContactItem';
import ExperienceItem from './components/ExperienceItem';
import cvData from './config';

const ProfessionalTechCV: React.FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img 
          src={cvData.profileImage}
          alt={cvData.name}
          className={styles.profileImage} 
        />
        <div className={styles.headerContent}>
          <h1 className={styles.name}>{cvData.name}</h1>
          <h2 className={styles.title}>{cvData.title}</h2>
          <div className={styles.contactInfo}>
            <ContactItem icon={<ExternalLink size={14} />}>{cvData.contact.website}</ContactItem>
            <ContactItem icon={<Mail size={14} />}>{cvData.contact.email}</ContactItem>
            <ContactItem icon={<Phone size={14} />}>{cvData.contact.phone}</ContactItem>
            <ContactItem icon={<Linkedin size={14} />}>{cvData.contact.linkedin}</ContactItem>
            <ContactItem icon={<Github size={14} />}>{cvData.contact.github}</ContactItem>
            <ContactItem icon={<MapPin size={14} />}>{cvData.contact.location}</ContactItem>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={18} /> Professional Summary
        </h3>
        <p className={styles.summary}>{cvData.summary}</p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={18} /> Work Experience
        </h3>
        {cvData.experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            title={exp.title}
            date={exp.date}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Code className={styles.sectionIcon} size={18} /> Technical Expertise
        </h3>
        <div className={styles.skillGrid}>
          {Object.entries(cvData.skills).map(([category, skills]) => (
            <div key={category}>
              <h4 className={styles.skillCategory}>{category}:</h4>
              <p>{skills}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Briefcase className={styles.sectionIcon} size={18} /> Key Projects
        </h3>
        <p className={styles.projectsIntro}>
          View my portfolio on my personal website at {' '}
          <a href={`https://${cvData.contact.website}`} target="_blank" rel="noopener noreferrer" className={styles.projectsLink}>
            {cvData.contact.website} <ExternalLink size={12} className={styles.externalLinkIcon} />
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <GraduationCap className={styles.sectionIcon} size={18} /> Education
        </h3>
        {cvData.education.map((edu, index) => (
          <ExperienceItem
            key={index}
            company={edu.institution}
            title={edu.degree}
            date={edu.date}
            location={edu.location}
            description={edu.details}
          />
        ))}
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <Globe className={styles.sectionIcon} size={18} /> Languages
        </h3>
        <div className={styles.languageGrid}>
          {cvData.languages.map((lang, index) => (
            <div key={index}>{lang.language}: {lang.proficiency}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTechCV;