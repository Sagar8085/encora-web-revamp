"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import DesktopMenu from "./header/DesktopMenu";
import MobileMenu from "./header/MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${scrolled
          ? "bg-white/95 dark:bg-encora-green/95 backdrop-blur-xl shadow-2xl shadow-encora-green/10 dark:shadow-black/20 border-b border-encora-green/10 dark:border-encora-mint/20"
          : "bg-transparent backdrop-blur-none shadow-none border-none"
        }`}
    >
      {/* Animated Border Bottom - Only shows when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-encora-green to-transparent dark:via-encora-mint opacity-60"></div>
      )}

      <div className="container mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between py-3 sm:py-4">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`group relative font-bold tracking-tight transition-all duration-500 text-lg sm:text-2xl ${scrolled
                  ? "text-encora-green dark:text-white"
                  : "text-white dark:text-encora-mint drop-shadow-lg"
                }`}
            >
              <Logo />
            </Link>
          </div>

          {/* Right side - Theme switch and menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Theme Switch */}
            <div className="flex items-center">
              <ThemeSwitch />
            </div>

            {/* Enhanced Menu Button */}
            <div className="relative flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 focus:outline-none transition-all duration-500 rounded-lg ${scrolled
                    ? "text-encora-green dark:text-white hover:bg-encora-green/10 dark:hover:bg-encora-mint/10"
                    : "text-white dark:text-encora-mint hover:bg-white/20 dark:hover:bg-encora-mint/20 backdrop-blur-sm"
                  }`}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  {isOpen ? (
                    <X
                      size={20}
                      className="sm:w-6 sm:h-6 transform rotate-0 scale-100 transition-all duration-300 text-encora-green dark:text-white"
                    />
                  ) : (
                    <Menu
                      size={20}
                      className="sm:w-6 sm:h-6 transform rotate-0 scale-100 transition-all duration-300 text-encora-green dark:text-white"
                    />
                  )}
                </div>

                {/* Menu Button Pulse Effect when not scrolled */}
                {!scrolled && !isOpen && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3">
                    <div className="absolute inset-0 bg-encora-mint rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0.5 bg-encora-mint rounded-full"></div>
                  </div>
                )}
              </button>

              <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Desktop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="hidden md:block fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-500"
        />
      )}
    </header>
  );
}
