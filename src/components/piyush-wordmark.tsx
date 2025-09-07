import * as React from "react";

// Wordmark Component
export function PiyushWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 60"
      fill="currentColor"
      {...props}
    >
      <text
        x="0"
        y="45"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="40"
        fontWeight="bold"
      >
        Piyush Kumar
      </text>
    </svg>
  );
}

// Export SVG as string (for copy/download feature)
export function getWordmarkSVG(color: string) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" fill="${color}">
      <text x="0" y="45" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="bold">
        Piyush Kumar
      </text>
    </svg>
  `;
}
