import React from "react";

export const TagsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <rect x="16" y="16" width="40" height="40" rx="4" />
    <path d="M32 28h8v8h-8z" />
    <line x1="24" y1="24" x2="28" y2="24" />
    <line x1="44" y1="44" x2="48" y2="44" />
  </svg>
);
