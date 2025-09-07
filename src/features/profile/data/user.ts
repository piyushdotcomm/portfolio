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
  website: "piyush.com",
  jobTitle: "CSE Undergrad",
  jobs: [
    {
      title: "CSE Undergrad",
      company: "VIT Chennai",
      website: "https://chennai.vit.ac.in/",
    },
    
  ],
  about: `
Hello, World! I am Piyush Kumar — a Computer Science student at VIT Chennai (Batch 2028) specializing in Artificial Intelligence and Robotics.  
I am passionate about building innovative solutions that merge hardware, software, and intelligence to solve real-world problems.  

Currently, I am learning **Data Structures & Algorithms (DSA), MERN stack development, and embedded systems programming** while experimenting with projects that combine IoT, AI, and automation.  

Some of my key projects include:  
- 🖼️ **AI Image Generator** — MERN + Python powered project for creative AI image generation.  
- 🔐 **Electronic Password Lock** — Secure access system using 8051 microcontroller.  
- ✅ **To-Do List Application** — Full-stack app with authentication and task management.  
- 🌐 **Portfolio Website** — Personal website showcasing my skills, projects, and journey.  

Let’s connect and build something amazing together! 🚀
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
