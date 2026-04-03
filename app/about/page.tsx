"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { 
  FAQ_ITEMS, 
  aboutHeroData, 
  infrastructureData, 
  providesData, 
  complianceData, 
  storyData, 
  TIMELINE_ITEMS, 
  aboutCtaData 
} from "./data";

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
        {year}
      </p>
      <p className="max-w-prose text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

export default function AboutPage() {
  const sectionRef = useRef(null);
  return (
    <main className="min-h-screen text-foreground">
      {/* HERO */}
      <section
        ref={sectionRef}
        className="relative mt-16 lg:mt-0 min-h-[100vh] flex items-center overflow-hidden bg-card py-[25px] sm:py-0"
      >
        <div className="container-encora relative z-10 px-4 sm:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* ===== LEFT SECTION ===== */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Heading */}
              <h1 className="leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-encora-green dark:text-encora-mint">
                {aboutHeroData.headlineLine1} <br />
                {aboutHeroData.headlineLine2}
              </h1>

              {/* Description */}
              <p className="text-[1.1rem] text-encora-green/70 dark:text-encora-mint leading-relaxed">
                {aboutHeroData.description}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={aboutHeroData.primaryCtaLink}
                  className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                >
                  {aboutHeroData.primaryCtaText}
                </Link>
              </div>

              {/* RetAI badge */}
              <span className="inline-block rounded-md px-2 py-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/40 dark:bg-slate-800/40">
                {aboutHeroData.badgeText}
              </span>
            </div>

            {/* ===== RIGHT SECTION (IMAGE ONLY) ===== */}
            <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
              <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 shadow-xl p-1">
                <Image
                  src={aboutHeroData.imageSrc}
                  alt={aboutHeroData.imageAlt}
                  width={350}
                  height={350}
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why returns need their own infrastructure */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[4rem]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          {infrastructureData.title}
        </h2>

        <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">

            {/* LEFT COLUMN */}
            <div className="space-y-4">
              {infrastructureData.leftPoints.map((point, index) => (
                <p key={index} className="text-sm sm:text-base text-muted-foreground">
                  {point}
                </p>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <p className="font-semibold text-sm sm:text-base">
                {infrastructureData.rightTitle}
              </p>

              <ul className="space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
                {infrastructureData.rightBullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>

              <p className="font-semibold text-sm sm:text-base">
                {infrastructureData.conclusion}
              </p>
            </div>

          </div>
        </article>
      </section>

      {/* WHAT ENCORA PROVIDES */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          {providesData.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {providesData.cards.map((card, index) => (
            <article key={index} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
                <span className="text-lg font-semibold">{card.icon}</span>
              </div>

              <h3 className="text-lg font-semibold">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc">
                {card.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className=" mx-auto max-w-6xl text-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8 mt-16 md:mt-24 lg:mt-[96px]">
        <h3 className="text-lg font-semibold">{complianceData.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {complianceData.description}
        </p>
      </section>

      {/* OUR STORY */}
      <section className=" mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px]">
        <div className=" space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            {storyData.title}
          </h2>
          <article className="flex h-full text-center flex-col rounded-2xl border border-border bg-card p-6 space-y-4">
            {storyData.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-4 rounded-2xl border-emerald-500/30 bg-emerald-500/5 md:p-8 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-6 border-l border-border pl-6">
          {TIMELINE_ITEMS.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              text={item.text}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">FAQ</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl text-center px-4 mt-20 mb-16 rounded-3xl bg-emerald-600  text-white md:px-10 p-8">
        <h2 className="text-2xl font-semibold">
          {aboutCtaData.title}
        </h2>
        <p className="mt-2 text-emerald-100">
          {aboutCtaData.description}
        </p>
        <div className="flex justify-center items-center">
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={aboutCtaData.buttonLink}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700"
            >
              {aboutCtaData.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
