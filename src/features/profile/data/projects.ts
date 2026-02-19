import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "editron",
    title: "Editron",
    period: {
      start: "01.2025",
    },
    link: "https://editron.in",
    skills: [
      "Next.js",
      "TypeScript",
      "WebContainers",
      "Monaco Editor",
      "AI (Gemini / Groq / Mistral)",
      "MongoDB",
      "NextAuth.js",
      "shadcn/ui",
      "Tailwind CSS",
      "Framer Motion",
    ],
    description: `A browser-based code editor with AI assistance, 40+ framework templates, and live preview — powered by WebContainers.
- Monaco Editor with IntelliSense and multi-file support
- Integrated terminal with full command execution
- AI assistant that can read, edit, and create files directly in your project
- Import from GitHub with monorepo sub-directory selection
- GitHub & Google OAuth with persistent playground storage`,
    isExpanded: true,
  },
  {
    id: "orbit-cli",
    title: "Orbit CLI",
    period: {
      start: "12.2024",
    },
    link: "https://orbit-cli.vercel.app",
    skills: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "AI Chat",
      "Device Auth Flow",
      "shadcn/ui",
    ],
    description: `A comprehensive AI-powered tool combining a CLI with a web interface for secure authentication, device management, and interactive AI chat.
- Multiple AI chat modes: Simple Chat, Tool Calling, and Agentic Mode
- Device flow authentication with approval workflow
- Persistent conversation history and user management
- Web dashboard built with Next.js and shadcn/ui`,
    isExpanded: true,
  },

  {
    id: "skillroute-2",
    title: "SkillRoute 2.0",
    period: {
      start: "08.2024",
    },
    link: "https://skill-route-2-0.vercel.app",
    skills: [
      "React",
      "Vite",
      "JavaScript",
      "Express.js",
      "Tailwind CSS",
      "AI Recommendations",
      "Chatbot",
    ],
    description: `A modern career guidance & learning companion platform built during Smart India Hackathon.
- 10-question aptitude quiz with animated step transitions
- AI-powered career path recommendation engine
- Government college directory with district filtering
- Timeline tracker with upcoming events sidebar
- Floating animated chatbot for live interaction`,
  },
  {
    id: "portfolio-1",
    title: "Portfolio V1",
    period: {
      start: "06.2024",
      end: "07.2024",
    },
    link: "https://piyushvatsal.vercel.app",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Neo-Brutalism",
      "GitHub API",
      "LeetCode Integration",
    ],
    description: `A neo-brutalist portfolio website — raw, high-contrast, and bold by design.
- Custom cursor with interactive hover states
- CSS-only glitch animations and marquee scroll
- Scroll-triggered reveal animations with IntersectionObserver
- Real-time GitHub stats and LeetCode heatmap integration`,
  },
];