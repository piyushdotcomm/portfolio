"use client";

import { RssIcon } from "lucide-react";

import { Icons } from "./icons";
import { PiyushMark } from "./piyush-mark";

type LucideProps = React.ComponentProps<typeof RssIcon>;

type CommandLinkItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<LucideProps>;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
};

const MENU_LINKS: CommandLinkItem[] = [
  {
    title: "Portfolio",
    href: "/",
    icon: PiyushMark,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: RssIcon,
  },
  {
    title: "Components",
    href: "/components",
    icon: Icons.react,
  },
];

export default function CommandMenu() {
  return (
    <div className="space-y-2">
      {MENU_LINKS.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
        >
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.title}</span>
        </a>
      ))}
    </div>
  );
}
