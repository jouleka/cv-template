# Personal CV Template

This project is a personal, customizable CV (Curriculum Vitae) template built using React and TypeScript. It provides a clean, professional layout for showcasing your skills, experience, and achievements in a modern, web-based format.

## Features

- Responsive design for optimal viewing on various devices
- Customizable sections for personal information, professional summary, work experience, education, skills, and languages
- Component-based architecture for easy maintenance and extensibility
- Styling with CSS modules for scoped and maintainable styles
- Configurable content using a separate config file for easy personalization

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

3. Set up your personal config file:
   ```
   cp src/config.template.ts src/config.ts
   ```

### Customization

To customize the CV with your personal information:

1. Open `src/config.ts` (created from `config.template.ts`)
2. Update the `cvData` object with your personal information, work experience, education, skills, and languages
3. If needed, modify the styling in `src/premium-cv.module.css` to match your preferences

Note: The `src/config.ts` file is ignored by git to keep your personal information private. If you need to reset to the template version, you can copy `src/config.template.ts` again.

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

## Project Structure

- `src/App.tsx`: Main application component
- `src/premium-cv.tsx`: Core CV component with all sections
- `src/config.ts`: Your personal CV data (ignored by git)
- `src/config.template.ts`: Template for CV data
- `src/components/`: Reusable components (e.g., ContactItem, ExperienceItem)
- `src/premium-cv.module.css`: Styles for the CV
- `src/assets/`: Static assets like images

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request. Issues and feature requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
