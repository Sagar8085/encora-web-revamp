"use client";
import Link from "next/link";
import { ArrowRight, X, Phone, Mail } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { menuItems } from "./menu-items";

interface DesktopMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function DesktopMenu({ isOpen, setIsOpen }: DesktopMenuProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
    const getStartedRef = useRef<HTMLDivElement | null>(null);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    useEffect(() => {
        if (!isOpen) setIsGetStartedOpen(false);
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isGetStartedOpen &&
                getStartedRef.current &&
                !getStartedRef.current.contains(event.target as Node)
            ) {
                setIsGetStartedOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isGetStartedOpen]);

    if (!isOpen) return null;

    return (
        <div className="hidden md:block absolute top-full mt-3 right-0 w-80 bg-white/95 dark:bg-encora-green/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-encora-mint/20 dark:border-encora-mint/30 animate-in slide-in-from-top-5 z-50">
            {/* Menu Header */}
            <div className="flex items-center justify-between pb-4 border-b border-encora-mint/20 dark:border-white/20 mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-encora-green dark:bg-encora-mint rounded-full animate-pulse"></div>
                    <p className="text-encora-text dark:text-white font-semibold">
                        Navigation
                    </p>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 cursor-pointer text-encora-green dark:text-white hover:bg-encora-green/10 dark:hover:bg-encora-mint/10 rounded-full transition-colors"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Menu Links */}
            <ul className="space-y-2 mb-4">
                {menuItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <li
                            key={item.href}
                            className="group flex items-center gap-2 transition-all duration-300 ease-out hover:translate-x-1"
                        >
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-out ${active
                                        ? "max-w-3 opacity-100 ml-1"
                                        : "max-w-0 opacity-0 group-hover:max-w-3 group-hover:opacity-100 group-hover:ml-1"
                                    } flex-shrink-0`}
                            >
                                <div
                                    className={`w-3 h-3 rounded-full flex items-center justify-center ${active
                                            ? "bg-encora-green dark:bg-encora-mint scale-110"
                                            : "bg-encora-green dark:bg-encora-mint"
                                        }`}
                                >
                                    <ArrowRight
                                        size={8}
                                        className="text-white dark:text-encora-green"
                                    />
                                </div>
                            </div>
                            <Link
                                href={item.href}
                                className={`font-medium transition-all duration-300 py-2 flex-1 ${active
                                        ? "text-encora-green dark:text-encora-mint font-semibold"
                                        : "text-encora-text dark:text-white hover:text-encora-green dark:hover:text-encora-mint"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setIsGetStartedOpen(!isGetStartedOpen)}
                    className="flex-1 text-center text-encora-text dark:text-white text-sm font-semibold rounded-xl border border-encora-text/20 dark:border-white/20 py-2 px-3 hover:bg-encora-gray dark:hover:bg-encora-mint/10 transition-all duration-300"
                >
                    Get Started
                </button>

                <Link
                    href="/contact-us"
                    className="flex-1 text-center text-white dark:text-encora-green text-sm font-semibold rounded-xl bg-encora-green dark:bg-encora-mint py-2 px-3 hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    Contact Us
                </Link>
            </div>

            <div ref={getStartedRef} className="relative flex-1">
                {isGetStartedOpen && (
                    <div className="absolute bottom-full mb-3 left-0 right-0 rounded-2xl border border-encora-mint/20 dark:border-white/20 bg-white dark:bg-encora-green p-3 space-y-2 shadow-xl animate-in fade-in slide-in-from-bottom-2 z-50">
                        {[
                            { label: "Solutions", href: "/solutions" },
                            { label: "Encora Reuse", href: "/encora-reuse" },
                            { label: "Retail Returns (RetAI)", href: "/encora-access" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setIsGetStartedOpen(false);
                                    setIsOpen(false);
                                }}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-encora-text dark:text-white hover:bg-encora-green/10 dark:hover:bg-encora-mint/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Contact Info */}
            <div className="text-center border-t border-encora-mint/20 dark:border-white/20 pt-3">
                <div className="flex flex-col gap-1 text-xs">
                    <a
                        className="flex items-center justify-center gap-1 text-encora-text/70 dark:text-white/70 hover:text-encora-text dark:hover:text-white transition-all duration-300"
                        href="tel:206.367.4782"
                    >
                        <Phone size={12} />
                        206.367.4782
                    </a>
                    <a
                        className="flex items-center justify-center gap-1 text-encora-text/70 dark:text-white/70 hover:text-encora-text dark:hover:text-white transition-all duration-300"
                        href="mailto:info@encora.com"
                    >
                        <Mail size={12} />
                        info@encora.com
                    </a>
                </div>
            </div>
        </div>
    );
}
