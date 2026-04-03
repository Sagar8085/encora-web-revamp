import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export const accessHeroData = {
    eyebrow: "Encora Access",
    headlineLine1: "Kill the returns line.",
    headlineLine2: "Keep the customer.",
    description: "RetAI by Encora turns your manual returns desk into a smart, self-serve drop point. Cut labor hours, shrink lines, and capture real-time data on every return.",
    primaryCtaText: "Book a 20-minute demo",
    primaryCtaLink: "/contact-us",
    secondaryCtaText: "See how it works",
    secondaryCtaLink: "#how-it-works",
};

export const HERO_STATS = [
    {
        title: "30–60% less staff time",
        subtitle: "spent on basic returns.",
    },
    {
        title: "Shorter lines",
        subtitle: "happier customers, more in-store spend.",
    },
    {
        title: "Verified, traceable returns",
        subtitle: "down to the item and package.",
    },
];

export const painSectionData = {
    title: "Returns lines are killing margins and patience.",
    paragraphs: [
        "Returns are up. Labor is tight. And every customer waiting in line for a basic return is one less customer shopping.",
        "Most stores still treat returns like it's 1999: a staffed counter, manual ID and receipt checks, and almost no data on why items come back. RetAI moves that work into an always-on, smart return point without adding headcount.",
    ],
    realityTitle: "Today's reality",
    realityPoints: [
        "High labor cost: associates spend hours daily keying in simple returns.",
        "Customer frustration: long lines for a 30-second drop-off.",
        "No visibility: no clear returns patterns until too late.",
    ]
};

export const meetRetaiData = {
    title: "Meet RetAI – your smart return assistant.",
    description: "RetAI combines a secure self-serve return bin with computer vision, ID checks, and transaction verification. Customers drop items in seconds. You get clean data and lower labor costs.",
    features: [
        { title: "Self-serve returns", desc: "No counter required. No app download needed." },
        { title: "Verified, traceable items", desc: "Every return tied to a real order and rules." },
        { title: "Actionable data", desc: "See what's coming back, why, and from where." },
    ]
};

export const howItWorksData = {
    title: "How RetAI works in your store.",
    description: "A simple flow that works alongside your existing POS—no rip-and-replace.",
};

export const HOW_STEPS = [
    {
        icon: <BinIcon />,
        title: "Customer starts return",
        body: "Scan retailer QR/RMA, enter a return code, or look up the order.",
    },
    {
        icon: <TagsIcon />,
        title: "RetAI verifies & captures",
        body: "Confirms eligibility, imports return details, captures a photo, verifies weight, and flags exceptions.",
    },
    {
        icon: <VerifyIcon />,
        title: "Item dropped off",
        body: "Guided intake to the right slot. Timestamp + location are logged and tied to the return.",
    },
    {
        icon: <ConnectIcon />,
        title: "Staff processes later",
        body: "Batch process using verified data (photo, weight, risk flags) to route to restock, resale, or RTV.",
    },
];

export const beforeAfterData = {
    title: "Before and after RetAI.",
    description: "Move from long manual lines to fast self-serve verification.",
    beforeText: "Manual returns line (today)",
    afterText: "Self-serve RetAI kiosk (after)",
};

export const upgradeData = {
    title: "Upgrade from manual to smart returns.",
    todayTitle: "Today: Manual counter returns",
    todayPoints: [
        "Associate looks up orders",
        "Checks receipts and policy rules",
        "Processes one return at a time",
        "Limited return data and visibility",
        "Lines slow the store"
    ],
    retaiTitle: "With RetAI by Encora",
    retaiPoints: [
        "Self-serve returns in under a minute",
        "Automatic order + policy verification",
        "Batch processing during quieter hours",
        "Each return tagged (reason, channel, packaging)",
        "Shorter lines; shoppers stay in-store"
    ]
};

export const builtForData = {
    title: "Built for Ops, CX, and Risk teams.",
    opsTitle: "For Operations",
    opsPoints: ["Reduce counter workload", "Smooth return volume across the day", "Extend return hours without added staffing"],
    cxTitle: "For Customer Experience",
    cxPoints: ["Fast, guided self-serve flow", "No app required", "Keep foot traffic in-store"],
    riskTitle: "For Risk & Loss Prevention",
    riskPoints: ["Verified returns (not anonymous drops)", "Flags repeat abuse patterns", "Full audit trail per item"]
};

export const whereFitsData = {
    title: "Where RetAI fits first.",
};

export const WHERE_FITS = [
    {
        title: "Grocery & big-box hubs",
        body: "Offload basic returns while keeping shoppers inside.",
    },
    {
        title: "Marketplace & 3rd-party returns",
        body: "One simple drop-off even for online orders.",
    },
    {
        title: "High-volume apparel / DTC",
        body: "Handle peak returns without seasonal staffing.",
    },
];

export const accessCtaData = {
    title: "Ready to streamline your returns?",
    description: "See how RetAI by Encora can remove friction from your stores and improve your bottom line.",
    primaryBtn: "Talk to our team",
    primaryLink: "/contact-us",
    secondaryBtn: "Get the 1-page overview",
    secondaryLink: "/resources/retai-overview.pdf",
};
