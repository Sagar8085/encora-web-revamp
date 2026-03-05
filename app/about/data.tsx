export type FAQItem = {
    question: string;
    answer: string;
};

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
