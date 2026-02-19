import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "piyushdotcom",
    href: "https://www.linkedin.com/in/piyushdotcom",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "piyushdotcomm",
    href: "https://github.com/piyushdotcomm",
  },
  {
    icon: Twitter,
    title: "X (Formerly Twitter)",
    description: "@Piyushhere_",
    href: "https://x.com/Piyushhere_",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@piyush.here_",
    href: "https://www.instagram.com/piyush.here_/",
  },
];
