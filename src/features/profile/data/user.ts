import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Piyush",
  lastName: "Kumar",
  displayName: "Piyush Kumar",
  username: "piyushdotcomm",
  gender: "male",
  pronouns: "he/him",
  bio: "Computer Science student | AI & Robotics Enthusiast | Exploring DSA & Projects",
  flipSentences: [
    "Building with AI and Robotics",
    "Computer Science Student at VIT Chennai",
    "Aspiring Innovator",
  ],
  address: "Chennai, Tamil Nadu, India",
  phoneNumber: "NzA3OTY1MDk3NQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "MTM3MjVzaHBpeXVzaEBnbWFpbC5jb20=", // base64 encoded
  website: "https://piyushvatsal.vercel.app",
  jobTitle: "CSE Undergrad",
  jobs: [
    {
      title: "CSE Undergrad",
      company: "VIT Chennai",
      website: "https://chennai.vit.ac.in/",
    },

  ],
  about: `
I'm **Piyush Kumar**, a Computer Science undergraduate at **VIT Chennai** specializing in **Artificial Intelligence & Robotics**.

I build high-performance web applications and developer tools. My recent work includes **[Editron](https://editron.in)**, a browser-based AI code editor, and **[Orbit CLI](https://orbit-cli.vercel.app)**, an AI-powered terminal assistant. I also led the team that built **SkillRoute 2.0**, a career guidance platform.

Currently, I'm focused on **Next.js 15**, **AI integration**, and **system design**, while also mastering Data Structures & Algorithms. I love open source and building things that help other developers.
  `,
  avatar: "/images/piyush.jpg",
  namePronunciationUrl: "/audio/piyush.mp3",
  flag: "https://flagcdn.com/in.svg",

  keywords: [
    "Piyush Kumar",
    "piyush123",
    "VIT Chennai",
    "piyushdotcomm",
    "portfolio",
    "AI",
    "robotics",
    "to-do list app",
    "8051 projects",
    "MERN stack",
    "Piyush Vatsal",
    "Piyush Kumar Vatsal"
  ],
  dateCreated: "2025-09-05", // YYYY-MM-DD
};
