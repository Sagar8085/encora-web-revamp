"use client";
import Link from "next/link";
import { ArrowRight, X, Phone, Mail } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { menuItems } from "./menu-items";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
    const [isChartOptionsOpen, setIsChartOptionsOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    if (!isOpen) return null;

    return (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 h-screen w-screen">
            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-500"
            />

            {/* Menu Container */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 left-0 right-0 bottom-0 h-full bg-white/95 dark:bg-encora-green/95 backdrop-blur-xl animate-in slide-in-from-top-5 duration-500 flex flex-col"
            >
                {/* Menu Header */}
                <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-encora-mint/20 dark:border-white/20">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-encora-green dark:bg-encora-mint rounded-full animate-pulse" />
                        <p className="text-encora-text dark:text-white font-semibold text-lg">
                            Navigation
                        </p>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 cursor-pointer text-encora-green dark:text-white hover:bg-encora-green/10 dark:hover:bg-encora-mint/10 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    <div className="max-w-md mx-auto">
                        {/* Menu Links */}
                        <ul className="flex flex-col gap-2 pb-6">
                            {menuItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <li
                                        key={item.href}
                                        className="group flex items-center gap-3 transition-all duration-300 ease-out hover:translate-x-1"
                                    >
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-out ${active
                                                    ? "max-w-4 opacity-100 ml-1"
                                                    : "max-w-0 opacity-0 group-hover:max-w-4 group-hover:opacity-100 group-hover:ml-1"
                                                } flex-shrink-0`}
                                        >
                                            <div
                                                className={`w-4 h-4 rounded-full flex items-center justify-center ${active
                                                        ? "bg-encora-green dark:bg-encora-mint scale-110"
                                                        : "bg-encora-green dark:bg-encora-mint"
                                                    }`}
                                            >
                                                <ArrowRight
                                                    size={10}
                                                    className="text-white dark:text-encora-green"
                                                />
                                            </div>
                                        </div>
                                        <Link
                                            href={item.href}
                                            className={`text-lg font-semibold transition-all duration-300 py-3 flex-1 border-b ${active
                                                    ? "text-encora-green dark:text-encora-mint border-encora-green/30 dark:border-encora-mint/30"
                                                    : "text-encora-text dark:text-white hover:text-encora-green dark:hover:text-encora-mint border-transparent hover:border-encora-green/20 dark:hover:border-encora-mint/20"
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="flex flex-col gap-3 mb-6">
                            {/* Chart Options Button (repurposed as Get Started expander) */}
                            <button
                                onClick={() => {
                                    setIsChartOptionsOpen((prev) => !prev);
                                    setIsGetStartedOpen(false);
                                }}
                                className="flex justify-between items-center w-full text-encora-text dark:text-white text-base font-semibold rounded-2xl border border-encora-text/20 dark:border-white/20 py-3 px-5 hover:bg-encora-gray dark:hover:bg-encora-mint/10 transition-all duration-300"
                            >
                                Get Started
                                <ArrowRight
                                    size={16}
                                    className={`transition-transform duration-300 ${isChartOptionsOpen ? "rotate-90" : ""
                                        }`}
                                />
                            </button>

                            {/* Submenu */}
                            {isChartOptionsOpen && (
                                <div className="ml-3 rounded-xl border border-encora-mint/20 dark:border-white/20 bg-white dark:bg-encora-green p-2 space-y-1 animate-in fade-in slide-in-from-top-2">
                                    {[
                                        { label: "Solutions", href: "/solutions" },
                                        { label: "Encora Reuse", href: "/encora-reuse" },
                                        { label: "Retail Returns (RetAI)", href: "/encora-access" },
                                    ].map((link) => (
                                        <button
                                            key={link.href}
                                            onClick={() => {
                                                router.push(link.href);
                                                setIsChartOptionsOpen(false);
                                                setIsOpen(false);
                                            }}
                                            className="w-full text-left rounded-lg px-3 py-2 text-sm font-medium text-encora-text dark:text-white hover:bg-encora-green/10 dark:hover:bg-encora-mint/10"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Contact Us */}
                            <button
                                onClick={() => {
                                    router.push("/contact-us");
                                    setIsOpen(false);
                                }}
                                className="flex justify-center items-center gap-2 w-full text-white dark:text-encora-green text-base font-semibold rounded-2xl bg-gradient-to-r from-encora-green to-encora-green-dark dark:from-encora-mint dark:to-encora-mint-light py-3 px-5 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                            >
                                Contact Us
                                <Mail
                                    size={16}
                                    className="group-hover:scale-110 transition-transform"
                                />
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center border-t border-encora-mint/20 dark:border-white/20 pt-5">
                            <div className="flex flex-col gap-2">
                                <a
                                    className="flex items-center justify-center gap-2 text-encora-text/70 dark:text-white/70 hover:text-encora-text dark:hover:text-white transition-all duration-300 group"
                                    href="tel: 206.367.4782"
                                >
                                    <Phone size={16} className="transform group-hover:scale-110" />
                                    206.367.4782
                                </a>
                                <a
                                    className="flex items-center justify-center gap-2 text-encora-text/70 dark:text-white/70 hover:text-encora-text dark:hover:text-white transition-all duration-300 group"
                                    href="mailto:info@encora.com"
                                >
                                    <Mail size={16} className="transform group-hover:scale-110" />
                                    info@encora.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
