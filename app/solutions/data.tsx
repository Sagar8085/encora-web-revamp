import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export const MODULES = [
    {
        key: "bins",
        title: "Bins",
        subtitle: "Smart kiosks",
        bullets: [
            "Secure indoor/outdoor drop-off with guided flows",
            "Automated intake logging with timestamps and locations",
        ],
        Icon: BinIcon,
    },
    {
        key: "tags",
        title: "Tags",
        subtitle: "QR + RFID",
        bullets: [
            "Item-level traceability using QR and optional RFID",
            "Works with existing IDs, SKUs, and barcodes",
        ],

        Icon: TagsIcon,
    },
    {
        key: "verify",
        title: "Verify",
        subtitle: "Proof at drop-off",
        bullets: [
            "Photo + timestamp evidence for every drop",
            "Exceptions flagged automatically for audit review",
        ],
        Icon: VerifyIcon,
    },
    {
        key: "connect",
        title: "Connect",
        subtitle: "APIs & webhooks",
        bullets: [
            "Push events into POS, OMS, or campus card systems",
            "Exportable data for EPR, ESG, and internal reporting",
        ],
        Icon: ConnectIcon,
    },
];

export const ENVIRONMENTS = [
    {
        key: "campus",
        title: "Campuses & municipalities",
        bullets: [
            "Self-service returns instead of staffed counters",
            "Accurate usage data for zero-waste and climate reporting",
            "Simple 120V deployments with neutral infrastructure",
        ],
        cta: "Talk about a campus pilot",
        href: "/contact-us?context=solutions-campus",
        imageSrc:
            "/images/group-four-multiracial-students-spending-time-together.jpg",
        imageAlt: "Students using a returns kiosk on campus",
    },
    {
        key: "retail",
        title: "Retail & apparel",
        bullets: [
            "Shrink and fraud reduction with proof at drop",
            "Shorter lines with self-service returns kiosks",
            "Data that routes items to reuse, resale, or recycling",
        ],
        cta: "See how this works in stores",
        href: "/contact-us?context=solutions-retail",
        imageSrc:
            "/images/asian-woman-store-employee-arranging-new-designer-clothes-hangers.jpg",
        imageAlt: "Customer returning items in a retail store",
    },
    {
        key: "epr",
        title: "Packaging EPR",
        bullets: [
            "Evidence-grade data for EPR and stewardship reporting",
            "Granular insights across bins, locations, and materials",
            "Modular, neutral infrastructure usable by multiple brands",
        ],
        cta: "See EPR compliance workflow",
        href: "/contact-us?context=solutions-epr",
        imageSrc:
            "/images/warehouse-industrial-building-interior-with-people-forklifts-handling-goods-storage-area.jpg",
        imageAlt: "Warehouse and packaging environment",
    },
    {
        key: "events",
        title: "Events & catering",
        bullets: [
            "Fast, guided drop-off for cups, foodware, and packaging",
            "Live telemetry on fill levels and contamination",
            "Reusable infrastructure you can move between venues",
        ],
        cta: "Talk about an event pilot",
        href: "/contact-us?context=solutions-events",
        imageSrc: "/images/group-friends-looking-menu-together-restaurant (1).jpg",
        imageAlt: "Event catering with reuse containers",
    },
];
