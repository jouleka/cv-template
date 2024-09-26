export interface CVData {
  name: string;
  title: string;
  profileImage: string;
  contact: {
    website: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    title: string;
    date: string;
    location: string;
    description: string[];
  }>;
  skills: {
    [category: string]: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    date: string;
    location: string;
    details: string[];
  }>;
  languages: Array<{
    language: string;
    proficiency: string;
  }>;
}
