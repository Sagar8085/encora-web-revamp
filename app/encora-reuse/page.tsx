"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { threeSteps, modes, howSteps, heroData, evidenceData, integrationsData } from "./data";

// Small client image component with fallback
function ImageWithFallback({
  src,
  alt = "",
  className = "",
  placeholder = "/images/placeholder-encora.png",
}) {
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

// Evidence feed tile image
function EvidenceFeedTile() {
  return (
    <div className="rounded-2xl border border-slate-200/6 bg-emerald-50/20 dark:bg-emerald-950/20 p-3">
      <ImageWithFallback
        src="/images/verify-evidence-feed_updated.jpeg"
        alt="Encora evidence feed with photo, weight, reason and status"
        className="w-full rounded-xl shadow-sm object-cover"
      />
    </div>
  );
}

export default function EncoraReuseV2() {
  const sectionRef = useRef(null);

  return (
    <main className="min-h-screen text-foreground">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[80vh] mt-16 lg:mt-0 sm:min-h-[70vh] lg:min-h-[100vh] flex items-center align-center overflow-hidden bg-card py-[25px] sm:py-0 "
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Reuse page hero.png"
            alt="Reuse page background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Overlay Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* Content */}
        <div className="container-encora relative z-10 px-4 sm:px-8 ">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            {heroData.eyebrow}
          </p>
          {/* Headline */}
          <div className="">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <div
                className="block leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white"
              >
                {heroData.headline}
              </div>
            </h1>
          </div>

          {/* Value props */}

          <div className="grid grid-cols-12 gap-8 items-center">
            {/* ===== Left Content (9 columns) ===== */}
            <div className="col-span-12 lg:col-span-9 space-y-6">
              {/* Description */}
              <div className="text-[1.1rem] text-center text-sm sm:text-base text-white/90 leading-relaxed">
                {heroData.description}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={heroData.primaryCtaLink}
                  className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow"
                >
                  {heroData.primaryCtaText}
                </Link>

                <a
                  href={heroData.secondaryCtaLink}
                  download
                  className="inline-flex items-center rounded-full border border-slate-200/60 px-5 py-2.5 text-sm font-medium text-white"
                >
                  {heroData.secondaryCtaText}
                </a>
              </div>

              {/* RetAI badge */}
              <div>
                <span className="inline-block rounded-md px-2 py-1 text-xs text-slate-300 bg-slate-800/40">
                  {heroData.badgeText}
                </span>
              </div>
            </div>

            {/* ===== Right Image (3 columns) ===== */}
            <div className="col-span-12 lg:col-span-3 flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 shadow-xl p-1 flex items-center justify-center">
                <Image
                  src="/images/retai-logo-updated.png"
                  alt="RetAI logo"
                  width={200}
                  height={60}
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-STEP REUSE */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[4rem]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Three-step reuse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeSteps.map((s, i) => (
            <article
              key={i}
              className="flex flex-col h-full space-y-3 rounded-2xl border border-slate-200/6 bg-white dark:bg-slate-900/30 p-4"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* HOW STUDENTS USE IT */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          How students use it
        </h2>
        <p className="max-w-6xl text-sm text-muted-foreground text-center">
          Three participation modes cover self-service, optional app loyalty,
          and staff-led back-of-house flows.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white dark:bg-slate-900/30 p-5 flex items-start gap-4"
            >
              <div className="shrink-0 rounded-lg bg-emerald-600/10 dark:bg-emerald-500/10 p-2 text-emerald-700 dark:text-emerald-300">
                {m.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* HOW IT WORKS (2x3 grid with icons) */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          How it works
        </h2>
        <p className="mt-2 max-w-6xl text-center text-sm text-muted-foreground">
          Every step is tracked, from assignment to refund, so operators can
          automate trust.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {howSteps.map((step) => (
            <div
              key={step.title}
              className="flex gap-4 items-start rounded-lg border bg-white dark:bg-slate-900/30 p-4"
            >
              <div className="flex-shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300">
                  {step.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* WHY IT WORKS + WORKS WITH YOUR CAMPUS SYSTEMS (split) */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px]">
        <h3 className="text-center heading-lg mb-12 dark:text-white">
          {evidenceData.heading}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-prose space-y-6">
            {/* Intro */}
            <p className="text-base leading-relaxed text-muted-foreground">
              {evidenceData.intro}
            </p>

            {/* Key benefits */}
            <div className="space-y-4">
              {evidenceData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <b className="text-foreground">{bullet.bold}</b>
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="pt-6 border-t border-slate-200/10" />

            {/* Integrations */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                {evidenceData.worksWithHeading}
              </h4>

              <p className="text-sm text-muted-foreground">
                {evidenceData.worksWithDescription}
              </p>

              <p className="text-xs text-slate-400">
                {evidenceData.worksWithDisclaimer}
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/10 flex items-center justify-center">
            <EvidenceFeedTile />
          </div>
        </div>
      </section>
      {/* INTEGRATIONS */}
      <section className="mx-auto max-w-6xl px-4 mt-16 md:mt-24 lg:mt-[96px] mb-16">
        <h3 className="text-lg font-semibold">{integrationsData.heading}</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {integrationsData.description}{" "}
          <em className="block text-xs mt-2">
            {integrationsData.disclaimer}
          </em>
        </p>
      </section>
    </main>
  );
}
