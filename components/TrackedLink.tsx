"use client";
import React, { ComponentProps } from "react";
import Link from "next/link";
import { sendGTMEvent } from "@/utils/gtm";
import { LinkProps } from "next/link";

interface TrackedLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  eventName: string;
  href: any;
  eventData?: Record<string, any>;
  children?: React.ReactNode;
}

export default function TrackedLink({ eventName, eventData, onClick, children, ...props }: any) {
  const handleClick = (e: any) => {
    sendGTMEvent({ event: eventName, ...eventData });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
