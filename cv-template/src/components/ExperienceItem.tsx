import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import styles from '../premium-cv.module.css';

type ExperienceItemProps = {
  company: string;
  title: string;
  date: string;
  location: string;
  description: string[];
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, title, date, location, description }) => (
  <div className={styles.experienceItem}>
    <div className={styles.companyName}>{company}</div>
    <div className={styles.jobTitle}>{title}</div>
    <div className={styles.dateLocation}>
      <Calendar size={12} className={styles.icon} />
      {date} | {location}
    </div>
    <ul className={styles.list}>
      {description.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <ChevronRight size={14} className={styles.listIcon} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceItem;