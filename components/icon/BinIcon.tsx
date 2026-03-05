import React from "react";

export const BinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    stroke="currentColor"
    // stroke="#194C4D"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="14" y="20" width="44" height="38" rx="4" />
    <rect x="22" y="12" width="28" height="10" rx="2" />
    <line x1="22" y1="30" x2="50" y2="30" />
  </svg>
);
