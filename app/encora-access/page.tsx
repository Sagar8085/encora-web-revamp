// app/encora-access/page.tsx
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";
import { HERO_STATS, HOW_STEPS, WHERE_FITS } from "./data";



export default function EncoraAccessPage() {
  const sectionRef = useRef(null);
  return (
    <main className="min-h-screen text-foreground">
      {/* HERO */}



      {/* Hero Section */}
      {/* <section
        ref={sectionRef}
        className="relative mt-16 lg:mt-0 min-h-[80vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden py-[25px] sm:py-0"
      >

        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/images/RetAI page hero photo. .png')",
          }}
        />


        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 100%)",
          }}
        />


        <div className="container-encora relative z-10 px-4 sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 text-center lg:text-left">
            Encora Access
          </p>


          <div className="grid grid-cols-12 gap-10 items-center mt-6">

            <div className="col-span-12 lg:col-span-8 space-y-6 max-w-3xl">

              <h1 className="text-white font-bold leading-tight text-center lg:text-left">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Kill the returns line.
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Keep the customer.
                </span>
              </h1>


              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl text-center lg:text-left">
                RetAI by Encora turns your manual returns desk into a smart,
                self-serve drop point. Cut labor hours, shrink lines, and capture
                real-time data on every return.
              </p>


              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-500 transition-colors"
                >
                  Book a 20-minute demo
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  See how it works
                </Link>
              </div>
            </div>


            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-3">
                <Image
                  src="/images/retai-logo-updated.png"
                  alt="RetAI by Encora logo"
                  width={200}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>


          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col justify-center rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-5 text-center min-h-[96px]"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  {stat.title}
                </p>
                <p className="mt-2 text-xs text-white/80 leading-snug">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      <section
        ref={sectionRef}
        className="relative mt-16 lg:mt-0 min-h-[80vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center overflow-hidden py-[25px] sm:py-0"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/RetAI page hero photo. .png"
            alt="Retail returns desk"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 lg:bg-black/60 z-0" />

        {/* Content Container */}
        <div className="container-encora relative z-10 px-5 sm:px-8 py-16 lg:py-0">

          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400 text-center lg:text-left">
            Encora Access
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-8 items-center mt-6">

            {/* LEFT SIDE CONTENT */}
            <div className="col-span-12 lg:col-span-8 space-y-6 text-center lg:text-left">

              {/* Headline */}
              <h1 className="text-white font-bold leading-tight">
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Kill the returns line.
                </span>
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Keep the customer.
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                RetAI by Encora turns your manual returns desk into a smart,
                self-serve drop point. Cut labor hours, shrink lines, and capture
                real-time data on every return.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-3">
                <Link
                  href="/contact-us"
                  aria-label="Book a 20-minute demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 transition"
                >
                  Book a 20-minute demo
                </Link>

                <Link
                  href="#how-it-works"
                  aria-label="See how it works"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-sm transition"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE LOGO */}
            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-4">
                <Image
                  src="/images/retai-logo-updated.png"
                  alt="RetAI by Encora logo"
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* HERO METRICS */}
          <div className="mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col justify-center rounded-2xl border border-white/20 
                     bg-black/50 backdrop-blur-md 
                     p-5 sm:p-6 
                     text-center 
                     min-h-[110px] sm:min-h-[120px]"
              >
                <p className="text-base sm:text-lg font-bold text-emerald-400">
                  {stat.title}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-snug">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RETURNS PAIN SECTION */}
      {/* <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Returns lines are killing margins and patience.
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            Returns are up. Labor is tight. And every customer waiting in line
            for a basic return is one less customer shopping.
          </p>
        </div>
        <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
          Most stores still treat returns like it&apos;s 1999: a staffed
          counter, manual ID and receipt checks, and almost no data on why items
          come back. RetAI moves that work into an always-on, smart return point
          without adding headcount.
        </p>

        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground">
            Today&apos;s reality
          </h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>
              • High labor cost: associates spend hours daily keying in simple
              returns.
            </li>
            <li>
              • Customer frustration: long lines for a 30-second drop-off.
            </li>
            <li>• No visibility: no clear returns patterns until too late.</li>
          </ul>
        </div>
      </section> */}

      {/* RETURNS PAIN SECTION */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Returns lines are killing margins and patience.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT BLOCK */}
          <div className="rounded-2xl border bg-card p-6 space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Returns are up. Labor is tight. And every customer waiting in line
              for a basic return is one less customer shopping.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Most stores still treat returns like it&apos;s 1999: a staffed
              counter, manual ID and receipt checks, and almost no data on why
              items come back. RetAI moves that work into an always-on, smart
              return point without adding headcount.
            </p>
          </div>

          {/* RIGHT BLOCK */}
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Today&apos;s reality
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • High labor cost: associates spend hours daily keying in simple
                returns.
              </li>
              <li>
                • Customer frustration: long lines for a 30-second drop-off.
              </li>
              <li>
                • No visibility: no clear returns patterns until too late.
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* MEET RETAI */}
      <section className="mx-auto space-y-3 max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Meet RetAI – your smart return assistant.
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            RetAI combines a secure self-serve return bin with computer vision,
            ID checks, and transaction verification. Customers drop items in
            seconds. You get clean data and lower labor costs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold">Self-serve returns</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No counter required. No app download needed.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold">Verified, traceable items</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every return tied to a real order and rules.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold">Actionable data</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              See what&apos;s coming back, why, and from where.
            </p>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl space-y-3 px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            How RetAI works in your store.
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            A simple flow that works alongside your existing POS—no
            rip-and-replace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {HOW_STEPS.map((step, i) => (
            <article
              key={i}
              className="flex flex-col gap-4 rounded-2xl border bg-card p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold leading-tight">{step.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
        {/* <p className="text-sm text-muted-foreground">
          Works with your POS — no rip-and-replace.
        </p> */}
      </section>

      {/* BEFORE & AFTER */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Before and after RetAI.
        </h2>
        <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
          Move from long manual lines to fast self-serve verification.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="relative h-56 border bg-card w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/retai-before.jpeg"
                alt="Manual returns line (today)"
                fill
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
            <p className="text-sm text-center font-semibold text-emerald-600 dark:text-emerald-400">
              Manual returns line (today)
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative h-56 border bg-card w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/reuse-return_updated.png"
                alt="Self-serve RetAI kiosk (after)"
                fill
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
            <p className="text-sm font-semibold text-center text-emerald-600 dark:text-emerald-400">
              Self-serve RetAI kiosk (after)
            </p>
          </div>
        </div>
      </section>

      {/* UPGRADE FROM MANUAL */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Upgrade from manual to smart returns.
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Today */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-foreground">Today: Manual counter returns</h3>
            <ul className="space-y-4">
              {[
                "Associate looks up orders",
                "Checks receipts and policy rules",
                "Processes one return at a time",
                "Limited return data and visibility",
                "Lines slow the store"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: With RetAI */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-900/10 p-8 shadow-md">
            <h3 className="text-lg font-bold mb-6 text-emerald-800 dark:text-emerald-400">With RetAI by Encora</h3>
            <ul className="space-y-4">
              {[
                "Self-serve returns in under a minute",
                "Automatic order + policy verification",
                "Batch processing during quieter hours",
                "Each return tagged (reason, channel, packaging)",
                "Shorter lines; shoppers stay in-store"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground dark:text-white">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BUILT FOR OPS / CX / RISK */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Built for Ops, CX, and Risk teams.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Ops */}
          <div className="rounded-2xl border bg-card p-6 h-full">
            <h4 className="text-lg font-bold mb-4 text-foreground">For Operations</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Reduce counter workload</li>
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Smooth return volume across the day</li>
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Extend return hours without added staffing</li>
            </ul>
          </div>

          {/* CX */}
          <div className="rounded-2xl border bg-card p-6 h-full">
            <h4 className="text-lg font-bold mb-4 text-foreground">For Customer Experience</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Fast, guided self-serve flow</li>
              <li className="flex gap-2"><span className="text-emerald-500">•</span> No app required</li>
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Keep foot traffic in-store</li>
            </ul>
          </div>

          {/* Risk */}
          <div className="rounded-2xl border bg-card p-6 h-full">
            <h4 className="text-lg font-bold mb-4 text-foreground">For Risk &amp; Loss Prevention</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Verified returns (not anonymous drops)</li>
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Flags repeat abuse patterns</li>
              <li className="flex gap-2"><span className="text-emerald-500">•</span> Full audit trail per item</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKS WITH SYSTEMS + WHERE FITS */}
      {/* <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Works with your existing systems.
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            RetAI plugs into POS, e-commerce, and returns workflows. Hardware +
            software + monitoring included.
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• API-friendly for POS, OMS, returns systems</li>
            <li>• Cloud-managed kiosks and bins</li>
            <li>• Configurable rules per brand/store</li>
          </ul>
          <p className="mt-2 text-xs text-slate-400">
            System diagram: Store → RetAI kiosk → POS/OMS → cloud dashboard.
          </p>
        </div>
      </section> */}
      {/* Where RetAI fits first.Let’s talk about your use case */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Where RetAI fits first.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {WHERE_FITS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border bg-card p-5"
              >
                <h3 className="text-sm font-semibold  text-emerald-600 dark:text-emerald-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ----------- */}

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 rounded-3xl border border-emerald-500/40  p-6 sm:p-8 mt-16 md:mt-24 lg:mt-[96px] mb-16">
        <h2 className="text-2xl text-center font-semibold sm:text-3xl">
          Ready to streamline your returns?
        </h2>
        <p className="max-w-6xl text-sm text-muted-foreground sm:text-base text-center">
          See how RetAI by Encora can remove friction from your stores and improve your bottom line.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all hover:-translate-y-0.5"
          >
            Talk to our team
          </Link>
          <Link
            href="/resources/retai-overview.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-base font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            Get the 1-page overview
          </Link>
        </div>
      </section>
    </main>
  );
}
