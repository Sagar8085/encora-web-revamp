import React from "react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";
import { Camera, SearchCheck, Route, CircleDollarSign } from "lucide-react";

export const heroData = {
  headline: "Active return infrastructure for retailers",
  subheadline: "Encora helps retailers verify returns at drop-off, reduce handling cost, and route items more intelligently before they move into reverse logistics.",
  valueProps: [
    { icon: <BinIcon className="h-5 w-5" />, text: "Bins" },
    { icon: <TagsIcon className="h-5 w-5" />, text: "Tags" },
    { icon: <VerifyIcon className="h-5 w-5" />, text: "Verify" },
    { icon: <ConnectIcon className="h-5 w-5" />, text: "Connect" },
  ],
  primaryCta: {
    text: "Talk to us",
    link: "/contact-us",
  },
  secondaryCta: {
    text: "See the Bin",
    link: "/bin",
  }
};

export const productModulesData = {
  heading: "From drop-off to decision",
  description: "Encora combines physical return infrastructure with verification, evidence capture, and routing logic so teams are not just collecting returns, but making better return decisions from the start.",
  modules: [
    {
      title: "Bins",
      description: "Intelligent bin management and tracking for efficient returns processing.",
      icon: BinIcon,
    },
    {
      title: "Tags",
      description: "Smart labeling and identification system for product categorization.",
      icon: TagsIcon,
    },
    {
      title: "Verify",
      description: "Automated verification and compliance checking for all returns.",
      icon: VerifyIcon,
    },
    {
      title: "Connect",
      description: "Seamless integration with your existing retail and logistics systems.",
      icon: ConnectIcon,
    },
  ]
};

export const aiSectionData = {
  heading: "What makes Encora different",
  features: [
    {
      title: "Proof at drop",
      description: "Capture verified condition and item details right at the point of return.",
      icon: <Camera className="w-5 h-5 dark:text-encora-green-dark" />,
    },
    {
      title: "Decisioning at intake",
      description: "Make real-time routing and process decisions before items ever enter the network.",
      icon: <SearchCheck className="w-5 h-5 dark:text-encora-green-dark" />,
    },
    {
      title: "Smarter routing",
      description: "Direct returns to their optimal destination instantly, reducing unnecessary miles.",
      icon: <Route className="w-5 h-5 dark:text-encora-green-dark" />,
    },
    {
      title: "Lower processing cost",
      description: "Minimize handling time and touchpoints to dramatically reduce reverse logistics costs.",
      icon: <CircleDollarSign className="w-5 h-5 dark:text-encora-green-dark" />,
    },
  ]
};

export const solutionsData = {
  heading: "Solutions for Every Channel",
  description: "Whether you're managing reuse, retail returns, or recovery, Encora adapts to your needs.",
  solutions: [
    {
      title: "Reuse",
      description: "Maximize product lifecycle value through intelligent reuse and resale channels.",
      icon: "♻️",
    },
    {
      title: "Retail",
      description: "Streamline in-store and online returns with unified processing.",
      icon: "🛍️",
    },
    {
      title: "Recovery",
      description: "Recover maximum value from damaged or defective products.",
      icon: "💰",
    },
  ]
};

export const resultsBandData = {
  heading: "Proven Results",
  description: "Encora customers see measurable improvements across all key metrics",
  results: [
    { metric: "Return ↑", description: "Increase product recovery value" },
    { metric: "Labor ↓", description: "Reduce processing costs" },
    { metric: "Shrink ↓", description: "Minimize inventory loss" },
    { metric: "Compliance ✓", description: "Ready for regulations" },
  ]
};

export const comparisonSectionData = {
  heading: "Not another returns locker",
  description: "Most return networks focus on convenience and handoff. Encora adds verification, evidence, and decisioning at the point of return."
};

export const ctaSectionData = {
  heading: "Have a return workflow problem worth solving?",
  description: "Let’s talk through your current process and see whether Encora fits.",
  buttonText: "Talk to us",
  buttonLink: "/contact-us"
};

export const stickyCtaData = {
  questionText: "Have a question?",
  talkButtonText: "Talk to us",
  talkButtonLink: "/contact-us",
  specSheetText: "Spec sheet",
  specSheetLink: "/resources/spec-sheet.pdf"
};
