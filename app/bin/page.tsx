"use client";
import Link from "next/link";
import Image from "next/image";
import {
    CheckCircle,
    Smartphone,
    MapPin,
    Zap,
    Scan,
    ArrowDown,
} from "lucide-react";
import React from "react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

// Small client image component with fallback
function ImageWithFallback({
    src,
    alt = "",
    className = "",
    placeholder = "/images/placeholder-encora.png",
}: { src: string, alt?: string, className?: string, placeholder?: string }) {
    const [imgSrc, setImgSrc] = React.useState(src);
    return (
        // kept as <img> intentionally so fallback onError works in client
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={() => imgSrc !== placeholder && setImgSrc(placeholder)}
        />
    );
}

export default function BinPage() {
    return (
        <main className="flex flex-col w-full overflow-hidden text-foreground">

            {/* ================= HERO ================= */}
            <section className="relative flex min-h-[100vh] w-full items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Smart bin HERO Image.png"
                        alt="Smart Return Bin"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradient overlay to ensure text readability against the image */}
                    <div className="absolute inset-0 bg-black/20 "></div>
                </div>

                {/* Text Overlay */}
                <div className="relative z-10 w-full px-6 py-12 lg:px-12 xl:px-20 flex flex-col items-center justify-center">

                    <div className="w-full max-w-[45rem] flex flex-col items-center text-center">
                        <p className="w-full text-left text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
                            Smart Return Bin
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
                            The Smart Return Bin
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-xl mb-10">
                            Contactless, verified returns — with on-bin guidance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 transition-all hover:scale-105"
                            >
                                How it works
                            </Link>
                            <Link
                                href="/resources/spec-sheet.pdf"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-900/50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800/50 hover:border-emerald-400/50 transition-all hover:scale-105"
                            >
                                Download Spec Sheet
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS (CONSUMER) ================= */}
            <section id="how-it-works" className="mt-16 md:mt-24 lg:mt-[4rem]">
                <div className="container-encora px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="heading-lg dark:text-white">
                            How RetAI works in your store.
                        </h2>
                        <p className="mt-2 text-lg text-encora-green dark:text-encora-mint font-medium">
                            A simple flow that works alongside your existing POS—no rip-and-replace.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                icon: <BinIcon />,
                                title: "Identify your return",
                                body: "Scan or present your item to begin the return.",
                            },
                            {
                                icon: <div className="text-2xl font-bold font-mono">2</div>, // Placeholder or specific icon if available, using number/text for now or revert to existing icon
                                title: "Follow the screen",
                                body: "Clear, on-bin guidance at every step.",
                                iconComponent: <VerifyIcon />
                            },
                            {
                                icon: <ArrowDown />,
                                title: "Drop",
                                body: "Secure drop-off with instant confirmation.",
                                iconComponent: <ConnectIcon />
                            },
                        ].map((step, i) => (
                            <article
                                key={i}
                                className="flex flex-col gap-4 rounded-2xl border bg-card p-6 h-full"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    {step.iconComponent || step.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold leading-tight">{step.title}</h3>
                                    <p className="text-base text-foreground/90 leading-relaxed font-medium">
                                        {step.body}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= BIN FEATURES ================= */}
            <section className="mt-16 md:mt-24 lg:mt-32">
                <div className="container-encora px-4">
                    <h2 className="heading-lg text-center mb-16 dark:text-white">
                        Built for quick, everyday returns
                    </h2>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative aspect-[4/3] flex items-center justify-center">
                            <Image
                                src="/images/bin-cutout.png"
                                alt="Smart Return Bin"
                                fill
                                className="object-contain z-10"
                            />

                            {/* Desktop pointers */}
                            <div className="hidden md:block absolute inset-0 z-20">
                                {/* Pointer 1: Guided Instructions (Left, Top) -> Screen */}
                                <div className="absolute top-[28%] left-0 w-[30%] flex items-center justify-end group">
                                    <div className="text-right pr-4">
                                        <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-encora-green dark:text-encora-mint text-lg leading-tight">Guided instructions</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Scan or match order here</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="w-12 lg:w-20 h-px bg-encora-green"></div>
                                        <div className="w-1.5 h-1.5 bg-encora-green rounded-full"></div>
                                    </div>
                                </div>

                                {/* Pointer 2: Quick Drop (Right, Top) -> Induction */}
                                <div className="absolute top-[22%] right-0 w-[30%] flex items-center justify-start flex-row-reverse group">
                                    <div className="text-left pl-4">
                                        <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-encora-green dark:text-encora-mint text-lg leading-tight">Quick drop-off</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Induction slot opens automatically</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center flex-row-reverse">
                                        <div className="w-12 lg:w-20 h-px bg-encora-green"></div>
                                        <div className="w-1.5 h-1.5 bg-encora-green rounded-full"></div>
                                    </div>
                                </div>

                                {/* Pointer 3: Secure Locking Doors (Right, Bottom) -> Door Seam */}
                                <div className="absolute top-[60%] right-0 w-[30%] flex items-center justify-start flex-row-reverse group">
                                    <div className="text-left pl-4">
                                        <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-encora-green dark:text-encora-mint text-lg leading-tight">Secure locking doors</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Automatically locks between drops</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center flex-row-reverse">
                                        <div className="w-16 lg:w-24 h-px bg-encora-green"></div>
                                        <div className="w-1.5 h-1.5 bg-encora-green rounded-full"></div>
                                    </div>
                                </div>

                                {/* Pointer 4: Multiple Intake Slots (Left, Bottom) -> Slot area */}
                                <div className="absolute top-[65%] left-0 w-[30%] flex items-center justify-end group">
                                    <div className="text-right pr-4">
                                        <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-encora-green dark:text-encora-mint text-lg leading-tight">Multiple intake slots</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">For various item sizes</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="w-12 lg:w-20 h-px bg-encora-green"></div>
                                        <div className="w-1.5 h-1.5 bg-encora-green rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Fallback Bullets */}
                        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-white dark:bg-card p-4 rounded-lg shadow-sm border">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Guided instructions</h4>
                                <p className="text-xs text-muted-foreground">Scan or match order here</p>
                            </div>
                            <div className="bg-white dark:bg-card p-4 rounded-lg shadow-sm border">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Quick drop-off</h4>
                                <p className="text-xs text-muted-foreground">Induction slot opens automatically</p>
                            </div>
                            <div className="bg-white dark:bg-card p-4 rounded-lg shadow-sm border">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Secure locking doors</h4>
                                <p className="text-xs text-muted-foreground">Automatically locks between drops</p>
                            </div>
                            <div className="bg-white dark:bg-card p-4 rounded-lg shadow-sm border">
                                <h4 className="font-bold text-encora-green dark:text-encora-mint text-sm">Multiple intake slots</h4>
                                <p className="text-xs text-muted-foreground">For various item sizes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY SMARTER (CONSUMER) ================= */}
            <section className="mt-16 md:mt-24 lg:mt-32">
                <div className="container-encora px-4">
                    <h2 className="heading-lg text-center mb-16 dark:text-white">
                        Why it’s smarter
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: CheckCircle, title: "Clear confirmation", desc: "Know instantly your drop-off worked." },
                            { icon: Smartphone, title: "No staff required", desc: "No staff needed." },
                            { icon: MapPin, title: "Built for public spaces", desc: "Designed for high-traffic locations." },
                            { icon: Zap, title: "Faster customer flow", desc: "Helps items get to their next step sooner." },
                        ].map((c, i) => (
                            <article
                                key={i}
                                className="space-y-3 rounded-2xl border bg-card p-5 h-full"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                                    <c.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-semibold dark:text-white">{c.title}</h3>
                                <p className="text-sm text-muted-foreground dark:text-gray-300">{c.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= OPERATORS SECTION ================= */}
            <div id="operators" className="scroll-mt-24" />
            <div className="container-encora px-4">
                <hr className="border-t border-gray-200 dark:border-gray-700" />
            </div>

            <section className="mt-16 md:mt-24 lg:mt-[96px] ">
                <div className="container-encora px-4 ">
                    {/* Intro */}
                    <div className="mx-auto mb-16">
                        <span className="inline-block px-3 text-center py-1 bg-encora-mint/10 text-encora-green dark:text-encora-mint text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-encora-mint/20">
                            For Operators
                        </span>
                        <h2 className="heading-lg mb-8 text-center dark:text-white">
                            Active returns infrastructure
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <p className="font-medium text-xl leading-relaxed text-encora-green mb-6 dark:text-encora-mint">
                                More than just a drop-off point.
                            </p>
                            <p className="mb-4 text-muted-foreground dark:text-gray-300">
                                Traditional return lockers are passive, limited, and often disconnected from the broader supply chain. They store items until someone manually retrieves them.
                            </p>
                            <p className="mb-4 text-muted-foreground dark:text-gray-300">
                                The Encora Smart Return Bin is an <strong className="text-foreground dark:text-white">active participant</strong> in your reverse logistics network. It initiates verification and sorting the moment a return is made.
                            </p>
                            <p className="text-muted-foreground dark:text-gray-300">
                                By reading encoded tags and communicating with our Verification Cloud, the Smart Bin helps ensure every return is legitimate, tracked, and ready for its next life — resale, recycling, or restocking.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/resources/spec-sheet.pdf"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 dark:shadow-emerald-500/50 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
                            >
                                Download Spec Sheet
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Subsection 4A: Core capabilities (Operator) */}
                        <div className="space-y-8">
                            <h3 className="heading-md dark:text-white">Core capabilities</h3>
                            <ul className="space-y-6">
                                {[
                                    { title: "Real-time Verification", desc: "Instantly validates returned items against database records." },
                                    { title: "Contactless Drop-off", desc: "Seamless experience for customers, no staff intervention needed." },
                                    { title: "Secure Storage", desc: "Anti-theft design helps keep items safe until collection." },
                                    { title: "Data-Driven Insights", desc: "Captures granular data on return volume, timing, and item condition." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-encora-green/10 flex-shrink-0 flex items-center justify-center text-encora-green mt-1">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Subsection 4B: Key Capabilities */}
                        <div className="space-y-8">
                            <h3 className="heading-md dark:text-white">Key Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Capability
                                    icon={<BinIcon />}
                                    title="High Capacity"
                                    desc="Optimized spatial design to maximize storage within a compact footprint."
                                />
                                <Capability
                                    icon={<TagsIcon />}
                                    title="QR + UHF RFID + NFC compatible"
                                    desc="Compatible with various RFID and NFC standards for broad integration."
                                />
                                <Capability
                                    icon={<ConnectIcon />}
                                    title="Always Connected"
                                    desc="IoT-enabled for continuous status monitoring and alerts."
                                />
                                <Capability
                                    icon={<VerifyIcon />}
                                    title="Instant Feedback"
                                    desc="Provides immediate confirmation to users via integrated display."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-24 text-center">
                <div className="container-encora px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Ready to upgrade your return infrastructure?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        See the full technical specifications or talk to our team about a deployment.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/resources/spec-sheet.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 dark:shadow-emerald-500/50 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
                        >
                            Download Spec Sheet
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:border-foreground/50 hover:text-foreground transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </main >
    );
}

function Capability({ icon, title, desc }: { icon: React.ReactNode; title: string, desc: string }) {
    return (
        <div className="bg-card p-5 rounded-2xl border space-y-3 h-full">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <div className="w-5 h-5 flex items-center justify-center child-svg:w-full child-svg:h-full">
                    {icon}
                </div>
            </div>
            <h4 className="text-sm font-semibold dark:text-white">{title}</h4>
            <p className="text-sm text-muted-foreground dark:text-gray-300 leading-snug">{desc}</p>
        </div>
    );
}
