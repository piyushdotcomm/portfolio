"use client";

import { Command as CommandPrimitive } from "cmdk";
import {
  BookUserIcon,
  HomeIcon,
  MailIcon,
  MessageSquareIcon,
  PencilIcon,
  RssIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";
import type React from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import type { Post } from "@/features/blog/types/post";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { cn } from "@/lib/utils";
import { copyText } from "@/utils/copy";

import { Icons } from "./icons";
import { getPiyushMarkSVG,PiyushMark } from "./piyush-mark";
import { getWordmarkSVG } from "./piyush-wordmark";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

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
