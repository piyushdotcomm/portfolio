"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const GITHUB_USERNAME = "piyushdotcomm";

export function GitHubContributions() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Panel id="contributions">
                <PanelHeader>
                    <PanelTitle>Contributions</PanelTitle>
                </PanelHeader>
                <PanelContent>
                    <div className="h-32 w-full animate-pulse rounded-lg bg-muted" />
                </PanelContent>
            </Panel>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <Panel id="contributions">
            <PanelHeader className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <PanelTitle>Contributions</PanelTitle>
            </PanelHeader>

            <PanelContent>
                {/* Scroll container for mobile */}
                <div className="w-full overflow-x-auto pb-2">
                    <div className="flex min-w-[700px] justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`https://ghchart.rshah.org/${isDark ? "4ade80" : "216e39"}/${GITHUB_USERNAME}`}
                            alt="GitHub Contributions"
                            loading="lazy"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center text-xs text-muted-foreground">
                    <Link
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        @{GITHUB_USERNAME}
                    </Link>
                </div>
            </PanelContent>
        </Panel>
    );
}
