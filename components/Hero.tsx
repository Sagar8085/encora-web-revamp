"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "url('/images/hero-revamp.png')",
          backgroundSize: "cover",
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 rounded-full blur-3xl bg-encora-mint/20 animate-float-slow"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full blur-3xl bg-encora-green/20 animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-primary/5 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <motion.div
        className="container-encora relative z-10 px-4 sm:px-8 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-encora-green dark:text-encora-mint">
              Smart returns. Verified.
            </span>
          </h1>
        </motion.div>

        {/* Value props */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm sm:text-base text-encora-green/70 dark:text-encora-mint"
          variants={itemVariants}
        >
          {[
            { icon: <BinIcon className="h-5 w-5" />, text: "Bins" },
            { icon: <TagsIcon className="h-5 w-5" />, text: "Tags" },
            { icon: <VerifyIcon className="h-5 w-5" />, text: "Verify" },
            { icon: <ConnectIcon className="h-5 w-5" />, text: "Connect" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-encora-green dark:text-encora-mint text-lg">
                {item.icon}
              </span>
              <span className="font-medium text-lg text-encora-green dark:text-encora-mint">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-3 justify-center mb-12"
          variants={itemVariants}
        >
          <Link
            href="/contact-us"
            className="rounded-2xl px-5 py-3 font-medium bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Talk to us
          </Link>

          <Link
            href="/bin"
            className="inline-flex rounded-2xl px-5 py-3 font-medium items-center justify-center border border-border text-sm hover:bg-accent hover:text-accent-foreground transition dark:text-white dark:border-white/20"
          >
            See the Bin
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
