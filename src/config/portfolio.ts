import { PortfolioConfig } from '@/types';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Ryan",
    title: "Frontend Developer",
    bio: "Passionate frontend developer with expertise in React, TypeScript, Angular and modern web technologies. I love creating beautiful, responsive, and user-friendly web applications.",
    email: "kchongee@gmail.com",
    phone: "+6011-11715229",
    location: "Klang, Selangor",
    avatar: "/images/avatar.jpeg",
    resume: "/resume.pdf"
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/kchongee",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://my.linkedin.com/in/khoo-chong-ee-989b62195",
      icon: "linkedin"
    },
    // {
    //   name: "Github",
    //   url: "https://github.com/kchongee",
    //   icon: "github"
    // },
    {
      name: "Email",
      url: "mailto:kchongee@gmail.com",
      icon: "mail"
    }
  ],
  skills: [
    { name: "React", level: 85, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "Angular", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "HTML5", level: 98, category: "frontend" },
    { name: "CSS3", level: 95, category: "frontend" },
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },
    { name: "Firebase", level: 65, category: "backend" },
    { name: "Git", level: 90, category: "tools" },
    { name: "SourceTree", level: 90, category: "tools" },
    { name: "VS Code", level: 80, category: "tools" },
    // { name: "Webpack", level: 80, category: "tools" },
    // { name: "Vite", level: 85, category: "tools" },
    { name: "Figma", level: 75, category: "tools" }
  ],
  projects: [
    {
      id: "8",
      title: "TedxPS 2024 Event Site",
      description: "Contributed to the TEDxPetalingStreet 2024 event website with a focus on UI structure and code maintainability. Implemented the footer section and a supporting content block, and improved overall developer experience by refactoring redundant styles into a reusable component. Also introduced minor UX enhancements to existing UI elements for better clarity and consistency. Collaborated within a component-driven Next.js codebase to align with the team’s design and code standards.",
      image: "/images/project8.png",
      technologies: ["Next.js", "Tailwind CSS", "Typescript"],
      liveUrl: "https://forward.tedxpetalingstreet.com/",
      featured: true
    },
    {
      id: "7",
      title: "TedxPS Official Website",
      description: "Contributed to the official TEDxPetalingStreet bilingual website by implementing the header, footer, and the \"Core Values\" section on the About page. Focused on responsive layout, semantic HTML structure, and consistent styling using Tailwind CSS. Ensured a clean and accessible navigation experience across both desktop and mobile devices. Collaborated within a component-based Next.js architecture to align with the site's overall design system.",
      image: "/images/project7.png",
      technologies: ["Next.js", "Tailwind CSS", "Typescript"],
      liveUrl: "https://www.tedxpetalingstreet.com/en",
      featured: true
    },
    {
      id: "6",
      title: "TedxPS 2023 Event Site",
      description: "Contributed the animated header section for the TEDxPetalingStreet 2023 event website. Designed and implemented smooth entrance animations using Framer Motion, with a responsive layout styled via Tailwind CSS. Focused on creating an engaging first impression through motion design while ensuring compatibility across devices. This component is part of a live production site and reflects attention to visual polish and frontend interaction.",
      image: "/images/project6.png",
      technologies: ["Next.js", "Tailwind CSS", "Typescript", "Framer Motion"],
      liveUrl: "https://balance.tedxpetalingstreet.com/",
      featured: true
    },
    {
      id: "5",
      title: "Burger Builder App",
      description: "A dynamic burger builder web app developed with React, Redux, and Firebase. Users can customize their burger by adding or removing ingredients, view real-time price updates, and proceed to an order summary. The app includes user authentication, allowing users to sign up, log in, and view past orders. Firebase handles data storage and hosting, while React Router is used for navigation and protected routes. Application state is managed globally using Redux. This project highlights skills in state management, component-based architecture, and full authentication flow in a real-world frontend application.",
      image: "/images/project5.png",
      technologies: ["React", "Redux", "React Router", "Firebase"],
      liveUrl: "https://my-react-burger-app-283011.web.app/burger-builder",
      featured: true
    },
    {
      id: "4",
      title: "Amazon Clone",
      description: "A full-stack e-commerce solution built with React, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.",
      image: "/images/project4.png",
      technologies: ["React", "Firebase", "Stripe"],
      liveUrl: "https://clone-f0944.web.app/",
      featured: true
    },
    {
      id: "3",
      title: "Covid-19 Tracker",
      description: "A static COVID-19 tracker web app built with React and deployed via Firebase Hosting. It integrates the disease.sh API to display real-time global and country-specific COVID-19 data, including confirmed cases, recoveries, and deaths. The UI features an interactive country selector, data summary cards, and a responsive line chart built with Chart.js. Styled with Material UI, this project demonstrates proficiency in API integration, React Hooks, and modern component-based front-end development.",
      image: "/images/project3.png",
      technologies: ["React", "Chart.js", "Material UI"],
      liveUrl: "https://covid-19-tracker-f3864.web.app/",
      featured: false
    },
    {
      id: "2",
      title: "Netflix Clone",
      description: "A static Netflix-inspired web app built with React and deployed via Firebase Hosting. The interface mimics Netflix's layout, featuring a dynamic banner, scrollable movie rows by category, and responsive design. Integrated with the TMDB API to fetch real-time movie data, this project showcases skills in React component architecture, API handling, and UI styling in a static frontend context.",
      image: "/images/project2.png",
      technologies: ["React"],
      liveUrl: "https://netflix-clone-fc43f.web.app/",
      featured: false
    },
    {
      id: "1",
      title: "Simple Static Website (Online Dating for Dog)",
      description: "A simple static website themed around online dating for dogs, built using HTML and CSS. This project was created to practice core layout techniques, especially mastering CSS positioning (relative, absolute, fixed). It serves as a fun and creative way to learn front-end fundamentals without any interactivity or backend.",
      image: "/images/project1.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/kchongee/tindog",
      liveUrl: "https://kchongee.github.io/tindog/",
      featured: false
    },
  ],
  experience: [
    {
      company: "Simplr Logic Sdn Bhd",
      position: "Associate Software Engineer",
      duration: "March 2024 - June 2025",
      description: "Worked on both backend and frontend development. Initially focused on implementing CRUD functionalities and collaborating with senior developers in a backend role. After three months, transitioned to frontend development, mentored junior developers, refactored repetitive logic into Angular services, and developed reusable components to improve maintainability across modules.",
      technologies: ["Angular", "TypeScript", "Git", "Java", "Spring"]
    }
  ],
  theme: {
    primaryColor: "#3b82f6",
    accentColor: "#8b5cf6"
  }
};