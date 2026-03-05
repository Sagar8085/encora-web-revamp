import React from "react";

export const ConnectIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="18" cy="36" r="6" />
    <circle cx="36" cy="18" r="6" />
    <circle cx="36" cy="54" r="6" />
    <circle cx="54" cy="36" r="6" />
    <line x1="24" y1="36" x2="30" y2="36" />
    <line x1="36" y1="24" x2="36" y2="30" />
    <line x1="36" y1="42" x2="36" y2="48" />
    <line x1="42" y1="36" x2="48" y2="36" />
  </svg>
);
