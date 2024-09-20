# Personal CV Template

This project is a personal, customizable CV (Curriculum Vitae) template built using React and TypeScript. It provides a clean, professional layout for showcasing your skills, experience, and achievements in a modern, web-based format.

## Features

- Responsive design for optimal viewing on various devices
- Customizable sections for personal information, professional summary, work experience, education, skills, and languages
- Component-based architecture for easy maintenance and extensibility
- Styling with CSS modules for scoped and maintainable styles

## Technologies Used

- React 18
- TypeScript
- Vite (for fast development and optimized builds)
- CSS Modules
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/cv-template.git
   cd cv-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server:

```
npm run dev
```

This will start the application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create a production build:

```
npm run build
```

This will generate optimized files in the `dist` directory, ready for deployment.

## Customization

To customize the CV with your personal information:

1. Open `src/premium-cv.tsx`
2. Update the personal details, work experience, education, and skills sections with your information
3. Modify the styling in `src/premium-cv.module.css` to match your preferences

## Project Structure

- `src/App.tsx`: Main application component
- `src/premium-cv.tsx`: Core CV component with all sections
- `src/components/`: Reusable components (e.g., ContactItem, ExperienceItem)
- `src/premium-cv.module.css`: Styles for the CV
- `src/assets/`: Static assets like images

## License

This project is open source and available under the [MIT License](LICENSE).
