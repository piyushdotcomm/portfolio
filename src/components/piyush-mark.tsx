import * as React from "react";

// ✅ Main Piyush Logo Mark Component
export function PiyushMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="
          M64 0h128v64H64V0Z        /* top of P */
          M64 96h96c32 0 64-32 64-64s-32-64-64-64H64v192H0V0h64v96Z

          M256 0h64v96l64-96h64l-80 112 84 144h-72l-60-100v100h-64V0Z
        "
      />
    </svg>
  );
}

// ✅ Function to return SVG as a string (used for "Copy as SVG")
export function getPiyushMarkSVG(color: string = "#000") {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256">
      <path fill="${color}" d="
        M64 0h128v64H64V0Z
        M64 96h96c32 0 64-32 64-64s-32-64-64-64H64v192H0V0h64v96Z

        M256 0h64v96l64-96h64l-80 112 84 144h-72l-60-100v100h-64V0Z
      "/>
    </svg>
  `;
}
