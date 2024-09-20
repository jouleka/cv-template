// types.ts

export interface ContactProps {
    name: string;
    title: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  }
  
  export interface ExperienceProps {
    experience: Array<{
      title: string;
      company: string;
      date: string;
      responsibilities: string[];
    }>;
  }
  
  export interface EducationProps {
    degree: string;
    school: string;
    year: string;
  }
  
  export interface SkillsProps {
    skills: string[];
  }
  
  export interface ProjectProps {
    projects: Array<{
      name: string;
      description: string;
      link: string;
    }>;
  }
  
  export interface ResumeProps {
    contactInfo: ContactProps;
    summary: string;
    experience: ExperienceProps['experience'];
    education: EducationProps;
    skills: SkillsProps['skills'];
    projects: ProjectProps['projects'];
  }