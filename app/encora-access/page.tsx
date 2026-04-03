"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@/utils/gtm";
import { 
  accessHeroData, 
  HERO_STATS, 
  painSectionData, 
  meetRetaiData, 
  howItWorksData, 
  HOW_STEPS, 
  beforeAfterData, 
  upgradeData, 
  builtForData, 
  whereFitsData, 
  WHERE_FITS, 
  accessCtaData 
} from "./data";
import { pushToDataLayer } from "lib/gtm";

export default function EncoraAccessPage() {
  const sectionRef = useRef(null);

  return (
    <main className="min-h-screen text-foreground">
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
            {accessHeroData.eyebrow}
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-8 items-center mt-6">

            {/* LEFT SIDE CONTENT */}
            <div className="col-span-12 lg:col-span-8 space-y-6 text-center lg:text-left">

              {/* Headline */}
              <h1 className="text-white font-bold leading-tight">
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {accessHeroData.headlineLine1}
                </span>
                <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {accessHeroData.headlineLine2}
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {accessHeroData.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-3">
                <Link
                  href={accessHeroData.primaryCtaLink}
                  aria-label={accessHeroData.primaryCtaText}
                  onClick={(e) => {
                    e.stopPropagation();
                    sendGTMEvent({ event: "demo_book_click" });
                    pushToDataLayer({ event: "book_demo_click", button_text: accessHeroData.primaryCtaText, page_path: window.location.pathname });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 transition"
                >
                  {accessHeroData.primaryCtaText}
                </Link>

                <Link
                  href={accessHeroData.secondaryCtaLink}
                  aria-label={accessHeroData.secondaryCtaText}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-sm transition"
                >
                  {accessHeroData.secondaryCtaText}
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
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          {painSectionData.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT BLOCK */}
          <div className="rounded-2xl border bg-card p-6 space-y-4">
            {painSectionData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* RIGHT BLOCK */}
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              {painSectionData.realityTitle}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {painSectionData.realityPoints.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* MEET RETAI */}
      <section className="mx-auto space-y-3 max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            {meetRetaiData.title}
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            {meetRetaiData.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {meetRetaiData.features.map((feature, idx) => (
            <article key={idx} className="rounded-2xl border bg-card p-5">
              <h3 className="text-sm font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl space-y-3 px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-3">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            {howItWorksData.title}
          </h2>
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            {howItWorksData.description}
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
      </section>

      {/* BEFORE & AFTER */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          {beforeAfterData.title}
        </h2>
        <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
          {beforeAfterData.description}
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
              {beforeAfterData.beforeText}
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
              {beforeAfterData.afterText}
            </p>
          </div>
        </div>
      </section>

      {/* UPGRADE FROM MANUAL */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          {upgradeData.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Today */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-6 text-foreground">{upgradeData.todayTitle}</h3>
            <ul className="space-y-4">
              {upgradeData.todayPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: With RetAI */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-900/10 p-8 shadow-md">
            <h3 className="text-lg font-bold mb-6 text-emerald-800 dark:text-emerald-400">{upgradeData.retaiTitle}</h3>
            <ul className="space-y-4">
              {upgradeData.retaiPoints.map((item, i) => (
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
          {builtForData.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Ops */}
          <div className="rounded-2xl border bg-card p-6 h-full">
            <h4 className="text-lg font-bold mb-4 text-foreground">{builtForData.opsTitle}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {builtForData.opsPoints.map((item, idx) => (
                <li key={idx} className="flex gap-2"><span className="text-emerald-500">•</span> {item}</li>
              ))}
            </ul>
          </div>

          {/* CX */}
          <div className="rounded-2xl border bg-card p-6 h-full">
            <h4 className="text-lg font-bold mb-4 text-foreground">{builtForData.cxTitle}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {builtForData.cxPoints.map((item, idx) => (
                <li key={idx} className="flex gap-2"><span className="text-emerald-500">•</span> {item}</li>
              ))}
            </ul>
          </div>

          {/* Risk */}
          <div className="rounded-2xl border bg-card p-6 h-full">
            <h4 className="text-lg font-bold mb-4 text-foreground">{builtForData.riskTitle}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {builtForData.riskPoints.map((item, idx) => (
                <li key={idx} className="flex gap-2"><span className="text-emerald-500">•</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHERE FITS */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            {whereFitsData.title}
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
          {accessCtaData.title}
        </h2>
        <p className="max-w-6xl text-sm text-muted-foreground sm:text-base text-center">
          {accessCtaData.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={accessCtaData.primaryLink}
            onClick={(e) => {
              e.stopPropagation();
              pushToDataLayer({ event: "book_demo_click", button_text: accessCtaData.primaryBtn, page_path: window.location.pathname });
            }}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all hover:-translate-y-0.5"
          >
            {accessCtaData.primaryBtn}
          </Link>
          <Link
            href={accessCtaData.secondaryLink}
            target="_blank"
            onClick={() => sendGTMEvent({ event: "pdf_download", file: "retai-overview.pdf" })}
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-base font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            {accessCtaData.secondaryBtn}
          </Link>
        </div>
      </section>
    </main>
  );
}
