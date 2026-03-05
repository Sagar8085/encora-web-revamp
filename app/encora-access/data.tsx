import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

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
