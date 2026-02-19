import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
    {
        id: "vit-chennai",
        companyName: "VIT Chennai",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Vellore_Institute_of_Technology_seal_2017.png",
        positions: [
            {
                id: "vit-btech",
                title: "B.Tech in Computer Science & Engineering (AI & Robotics)",
                employmentPeriod: {
                    start: "2024",
                },
                employmentType: "Full-time",
                description:
                    "Pursuing B.Tech in Computer Science & Engineering with specialization in Artificial Intelligence and Robotics. Building foundational knowledge in Data Structures & Algorithms and Web Development.",
                icon: "education",
                skills: [
                    "Data Structures & Algorithms",
                    "Web Development",
                    "Artificial Intelligence",
                    "Robotics",
                ],
                isExpanded: true,
            },
        ],
        isCurrentEmployer: true,
    },
    {
        id: "smart-india-hackathon",
        companyName: "Smart India Hackathon",
        positions: [
            {
                id: "sih-team-lead",
                title: "Team Lead",
                employmentPeriod: {
                    start: "2025",
                    end: "2025",
                },
                employmentType: "Hackathon",
                description:
                    "Led a team to develop SkillRoute, a personalized learning roadmap generator. Coordinated backend architecture and frontend integration under high-pressure deadlines. Demonstrated leadership and complex problem-solving skills in a competitive environment.",
                icon: "idea",
                skills: [
                    "Team Leadership",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Problem Solving",
                ],
                isExpanded: true,
            },
        ],
    },
    {
        id: "freelance-fullstack",
        companyName: "Full Stack Development",
        positions: [
            {
                id: "fullstack-dev",
                title: "Full Stack Developer",
                employmentPeriod: {
                    start: "2024",
                },
                employmentType: "Self-employed",
                description:
                    "Developing Full Stack applications using the MERN Stack. Exploring Cloudflare, AWS, and deployment strategies. Contributing to Open Source and building personal projects including Editron, SkillRoute, and Orbit CLI.",
                icon: "code",
                skills: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "TypeScript",
                    "TailwindCSS",
                    "AWS",
                    "Cloudflare",
                ],
                isExpanded: true,
            },
        ],
        isCurrentEmployer: true,
    },
];