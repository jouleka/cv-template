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

- Node.js 22.18 or newer (CI uses Node.js 24)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/jouleka/cv-template.git
   cd cv-template
   ```

2. Install dependencies:
   ```
   npm ci
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

The checked-in `src/config.template.ts` contains Jurgen Leka's public CV profile,
including the current Moveo, Helius, and Rayonit experience. `src/config.ts` is
ignored by git so local customizations stay local. Copy the checked-in profile
again when preparing a production release.

The profile photo is in `public/assets/linkedin_profile.jpeg`. The downloadable
CV is `public/resume.pdf`, also published at `jurgenleka.com/resume.pdf`.

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

### Production deployment

The resume app runs on Cloudflare Workers using the static assets configuration
in `wrangler.jsonc`. Prepare the committed public profile, verify the build, and
deploy with an authenticated Wrangler session:

```bash
cp src/config.template.ts src/config.ts
npx wrangler whoami
npm run lint
npm run deploy
```

Update `public/resume.pdf` together with the profile, and publish the same PDF to
the portfolio's `public/resume.pdf` so both download URLs stay consistent.

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

## Dependency security

Run `npm audit`, `npm run lint`, and `npm run build` after copying the sample
config as described above. CI repeats these checks from a clean install.
Dependabot checks npm packages and GitHub Actions weekly.
