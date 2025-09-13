"use client";

import {
  DownloadIcon,
  TriangleDashedIcon,
  TypeIcon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"; // ✅ make sure this path matches your shadcn/ui setup
import { copyText } from "@/utils/copy"; // ✅ adjust path if needed

import { getPiyushMarkSVG, PiyushMark } from "./piyush-mark";
import { getWordmarkSVG } from "./piyush-wordmark"; // ✅ adjust path if needed

type BrandContextMenuProps = {
  children: React.ReactNode;
};

export function BrandContextMenu({ children }: BrandContextMenuProps) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        {/* Copy Logo Mark */}
        <ContextMenuItem
          onClick={() => {
            const svg = getPiyushMarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
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
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
            copyText(svg);
            toast.success("Copied Logotype as SVG");
          }}
        >
          <TypeIcon className="h-5 w-5" />
          Copy Logotype as SVG
        </ContextMenuItem>

        {/* Brand Guidelines */}
        <ContextMenuItem asChild>
          <Link href="/brand">
            <TriangleDashedIcon className="h-5 w-5" />
            Brand Guidelines
          </Link>
        </ContextMenuItem>

        {/* Download Assets */}
        <ContextMenuItem asChild>
          <a href="/assets/piyush-brand.zip" download>
            <DownloadIcon className="h-5 w-5" />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
