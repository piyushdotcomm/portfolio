"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

// ✅ Import your custom mark + wordmark
import { PiyushMark, getPiyushMarkSVG } from "./piyush-mark";
import { PiyushWordmark, getWordmarkSVG } from "./piyush-wordmark";
// <-- replace with your wordmark file

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        {/* Copy Logo Mark */}
        <ContextMenuItem
          onClick={() => {
            const svg = getPiyushMarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            copyText(svg);
            toast.success("Copied Mark as SVG");
          }}
        >
          <PiyushMark className="h-5 w-5" />
          Copy Mark as SVG
        </ContextMenuItem>

        {/* Copy Wordmark */}
        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            copyText(svg);
            toast.success("Copied Logotype as SVG");
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        {/* Brand Guidelines */}
        <ContextMenuItem asChild>
          <Link href="/brand">
            <TriangleDashedIcon />
            Brand Guidelines
          </Link>
        </ContextMenuItem>

        {/* Download Assets */}
        <ContextMenuItem asChild>
          <a href="/assets/piyush-brand.zip" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
