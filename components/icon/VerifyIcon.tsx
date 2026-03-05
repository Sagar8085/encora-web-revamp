import React from "react";

export const VerifyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="36" cy="36" r="20" />
    <path d="M28 36l6 6 10-12" />
  </svg>
);
