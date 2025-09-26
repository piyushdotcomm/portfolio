import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [

  {
    id: "piyushcom",
    title: "piyush.com",
    period: {
      start: "08.2025",
    },
    link: "https://github.com/piyushdotcomm/portfolio",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal portfolio, component registry, and blog.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA`,
    logo: "",
  },
  {
  id: "todo-list-app",
  title: "TO-DO List App",
  period: {
    start: "07.2024", // adjust to when you built it
  },
  link: "https://github.com/piyushdotcomm/TO-DO-LIST-APP",
  skills: [
    "Personal Project",
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Local Storage",
    "Responsive Design",
  ],
  description: `A simple and efficient task management web app.  
- Add, edit, and delete tasks  
- Mark tasks as completed or pending  
- Persistent storage using Local Storage  
- Responsive UI with modern design  
- Built with React.js and Tailwind CSS`,

  logo: "", // add an icon or screenshot if available
},

  {
  id: "skillroute-2.0",
  title: "SkillRoute 2.0",
  period: {
    start: "08.2024", // adjust to when you built it
  },
  link: "https://github.com/piyushdotcomm/SkillRoute-2.0-",
  skills: [
    "Personal Project",
    "React.js",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Express.js",
    "REST API",
    "Responsive Design",
    "Dark/Light Mode",
    "AI-based Quiz Recommendation",
    "Interactive Chatbot",
  ],
  description: `A modern career guidance & learning companion platform.  
- Light & Dark theme toggle  
- Quiz-driven AI-based recommendation engine  
- College directory & timeline tracker  
- Animated floating chatbot for live interaction  
- Built with React + Tailwind + Express backend`,

  logo: "", // add an icon or screenshot if available
},

]