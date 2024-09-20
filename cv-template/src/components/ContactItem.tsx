import React from 'react';
import styles from '../premium-cv.module.css';

type ContactItemProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, children }) => (
  <div className={styles.contactItem}>
    {icon}
    <span className={styles.contactItemText}>{children}</span>
  </div>
);

export default ContactItem;