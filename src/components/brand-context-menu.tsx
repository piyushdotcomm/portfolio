"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyImageToClipboard } from "@/lib/utils";

import { getPiyushMarkSVG,PiyushMark } from "./piyush-mark";

export function BrandContextMenu() {
  const handleCopy = (copyFn: () => Promise<void>, successMessage: string) => {
    copyFn()
      .then(() => {
        toast.success(successMessage);
      })
      .catch(() => {
        toast.error("Failed to copy. Please try again.");
      });
  };

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
