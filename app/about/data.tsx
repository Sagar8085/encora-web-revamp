export type FAQItem = {
    question: string;
    answer: string;
};

export const aboutHeroData = {
    headlineLine1: "Neutral infrastructure",
    headlineLine2: "for returns",
    description: "Encora connects smart bins, tags, and AI verification so retailers, campuses, and public agencies can run better returns and reuse programs—without replacing the systems they already use.",
    primaryCtaText: "Talk to us",
    primaryCtaLink: "/contact-us",
    badgeText: "Powered by RetAI verification",
    imageSrc: "/images/retai-after.jpeg",
    imageAlt: "RetAI logo"
};

export const infrastructureData = {
    title: "Why returns need their own infrastructure",
    leftPoints: [
        "Most return and take-back programs were never designed as systems of record.",
        "They are usually bolted onto tools built for selling, not taking things back.",
    ],
    rightTitle: "That leads to:",
    rightBullets: [
        "Manual tracking, spreadsheets, and workarounds.",
        "Limited visibility into what came back, where, and when.",
        "No reliable proof that items were returned correctly.",
        "Growing compliance risk as EPR and reporting rules expand.",
        "Operators are now being asked to prove what happened at the exact moment of drop-off.",
        "Manual counts and one-off pilots can’t keep up.",
    ],
    conclusion: "Encora exists to give returns and reuse their own infrastructure layer—shared, neutral, and built for real operations."
};

export const providesData = {
    title: "What Encora provides",
    cards: [
        {
            icon: "⟲",
            title: "Smart intake",
            bullets: [
                "Secure kiosks and bins for stores, campuses, and public spaces.",
                "Guided return or deposit flows.",
                "Clear instructions at the point of drop-off.",
                "Live visibility into what’s coming back and where."
            ]
        },
        {
            icon: "✓",
            title: "Proof at drop",
            bullets: [
                "Every return is verified at the moment it happens.",
                "Photos and timestamps.",
                "Rules-based classification and validation.",
                "Automatic exception and contamination flags.",
                "Operators can see exactly what was dropped—without emails, paper forms, or follow-ups."
            ]
        },
        {
            icon: "⧉",
            title: "Neutral data layer",
            bullets: [
                "Encora is designed to sit alongside your existing systems, not replace them.",
                "Structured events captured at intake.",
                "APIs and webhooks for system-to-system sharing.",
                "Compatible with POS, OMS, campus cards, and EPR reporting tools.",
                "Multiple teams and partners can rely on the same source of truth."
            ]
        }
    ]
};

export const complianceData = {
    title: "Built for compliance",
    description: "Encora supports proof-grade data capture for EPR, reporting, and audit requirements—without custom integrations."
};

export const storyData = {
    title: "Our story",
    paragraphs: [
        "Encora started with a simple question: why is it so hard to run a good reuse or returns program?",
        "We saw campuses, restaurants, and operators trying to do the right thing—offering reusables and piloting new return flows—while getting buried in manual work and missing data.",
        "We began by building smart bins and traceability tools for reuse programs. Those early pilots showed the same problems everywhere returns happen: retail, campuses, events, and public spaces.",
        "Encora has evolved into a modular infrastructure layer for returns and reuse—focused on capturing what comes back, proving what happened, and connecting that data to the systems and people who need it."
    ]
};

export const TIMELINE_ITEMS = [
    {
        year: "2022",
        text: "Early pilots with smart return bins in campus and reuse environments."
    },
    {
        year: "2023",
        text: "Expanded hardware and software for intake telemetry and container tracking."
    },
    {
        year: "2024",
        text: "Introduced Encora Access / RetAI concepts for retail, campuses, and public agencies."
    },
    {
        year: "2025",
        text: "Focused on neutral, shared infrastructure for returns, reuse, and EPR."
    }
];

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "What is Encora?",
        answer:
            "Encora is a smart returns and reuse infrastructure platform. We combine kiosks and bins, tags, and AI verification so returns and reuse can be automated, monitored, and audited across locations.",
    },
    {
        question: "Do we have to replace our existing systems?",
        answer:
            "No. Encora is designed to sit alongside your existing POS, OMS, campus card, or ticketing systems. We send structured events via APIs and webhooks so you can keep using the tools you already have.",
    },
    {
        question: "What hardware is required?",
        answer:
            "Most deployments use Encora smart bins or kiosks with QR or RFID tags. In some cases, we retrofit existing fixtures instead of installing new hardware.",
    },
    {
        question: "How do pilots typically work?",
        answer:
            "Pilots usually run 3–6 months and start with a small number of locations, defined success metrics, and integration with existing systems.",
    },
];

export const aboutCtaData = {
    title: "Ready to see how Encora works?",
    description: "Talk with us about your returns or reuse challenges and explore a pilot.",
    buttonText: "Talk to us",
    buttonLink: "/contact-us"
};
