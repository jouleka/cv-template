import { CVData } from './types';

const cvData: CVData = {
  name: "Your Name",
  title: "Your Professional Title",
  profileImage: "/path/to/your/profile/image.jpg",
  contact: {
    website: "your-website.com",
    email: "your.email@example.com",
    phone: "Your Phone Number",
    linkedin: "linkedin.com/in/your-profile",
    github: "github.com/your-username",
    location: "Your Location"
  },
  summary: "Your professional summary goes here. Highlight your key skills, experiences, and career objectives.",
  experience: [
    {
      company: "Company Name",
      title: "Your Job Title",
      date: "Start Date – End Date",
      location: "Job Location",
      description: [
        "Key responsibility or achievement",
      ]
    },
  ],
  skills: {
    "Category 1": "Skill 1, Skill 2, Skill 3",
    "Category 2": "Skill 4, Skill 5, Skill 6",
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
  ]
};

export default cvData;