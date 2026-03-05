"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";
export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // HLS background video
  useEffect(() => {
    const video = videoRef.current;
    const hlsSource =
      "https://video.squarespace-cdn.com/content/v1/5e1c37cf9b245f360f07ee55/97cbced0-4376-4191-9d87-74715c693274/playlist.m3u8";

    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegURL")) {
      // Safari native HLS
      video.src = hlsSource;
    } else if (Hls.isSupported()) {
      // HLS.js for Chrome/Firefox/Edge
      const hls = new Hls({ autoStartLoad: true });
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Video */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        />
      </div> */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/retai-after.jpeg')" }}
      />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -mint/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Extra small animated elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full animate-bounce-medium delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full animate-bounce-fast delay-500"></div>
      </div>

      {/* Content */}
      <div className="container-encora relative z-10 px-4 sm:px-8 text-center">
        {/* Announcement badge */}
        <div className="invisible md:visible md:inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white dark:bg-white/10 border border-encora-mint/30 dark:border-encora-mint/50 rounded-full shadow-sm backdrop-blur-sm animate-on-scroll hover:scale-105 transition-transform duration-300 cursor-pointer group">
          <span className="flex items-center justify-center w-2 h-2 rounded-full animate-ping-slow"></span>
          <span className="text-sm font-medium text-encora-green dark:text-white group-hover:text-encora-green-dark dark:group-hover:text-encora-mint transition-colors">
            Building a Greener Future, One Scan at a Time
          </span>
        </div>

        {/* Headline */}
        <div className="animate-on-scroll">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            {/* <span className="block text-encora-green dark:text-white leading-tight animate-text-focus">
              Encora
            </span> */}
            <span className="block bg-gradient-to-r from-encora-green via-encora-mint to-encora-green dark:from-encora-mint dark:via-white dark:to-encora-mint bg-clip-text text-transparent leading-tight animate-gradient-flow bg-[length:200%_auto] text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              Smart returns. Verified.
            </span>
          </h1>
        </div>

        {/* Value props */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm sm:text-base text-encora-green/70 dark:text-encora-mint">
          {[
            { icon: <BinIcon className="h-5 w-5" />, text: "Bins" },
            { icon: <TagsIcon className="h-5 w-5" />, text: "Tags" },
            { icon: <VerifyIcon className="h-5 w-5" />, text: "Verify" },
            { icon: <ConnectIcon className="h-5 w-5" />, text: "Connect" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 animate-on-scroll transition-transform duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-encora-mint dark:text-white">
                {item.icon}
              </span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/contact-us"
            className="rounded-2xl px-5 py-3 font-medium bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Talk to us
          </Link>

          <a
            href="/resources/spec-sheet.pdf"
            download
            className="inline-flex rounded-2xl px-5 py-3 font-medium items-center justify-center border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition"
          >
            Download spec sheet
          </a>
        </div>
      </div>
    </section>
  );
}
