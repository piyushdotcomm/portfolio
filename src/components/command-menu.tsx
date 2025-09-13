"use client";

import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CircleUserIcon,
  CornerDownLeftIcon,
  DownloadIcon,
  LetterTextIcon,
  MoonStarIcon,
  RssIcon,
  SunIcon,
  TextIcon,
  TriangleDashedIcon,
  TypeIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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

import { PiyushMark, getPiyushMarkSVG } from "./piyush-mark";
import { getWordmarkSVG } from "./piyush-wordmark";
import { Icons } from "./icons";
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
