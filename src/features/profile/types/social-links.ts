import { LucideIcon } from "lucide-react";

export type SocialLink = {
  /** Icon image URL (string) or LucideIcon component */
  icon: string | LucideIcon;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};
