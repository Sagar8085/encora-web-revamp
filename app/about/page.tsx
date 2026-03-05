"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { FAQ_ITEMS } from "./data";

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
                Neutral infrastructure <br />
                for returns
              </h1>

              {/* Description */}
              <p className="text-[1.1rem] text-encora-green/70 dark:text-encora-mint leading-relaxed">
                Encora connects smart bins, tags, and AI verification so retailers,
                campuses, and public agencies can run better returns and reuse
                programs—without replacing the systems they already use.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                >
                  Talk to us
                </Link>
              </div>

              {/* RetAI badge */}
              <span className="inline-block rounded-md px-2 py-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/40 dark:bg-slate-800/40">
                Powered by RetAI verification
              </span>
            </div>

            {/* ===== RIGHT SECTION (IMAGE ONLY) ===== */}
            <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
              <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 shadow-xl p-1">
                <Image
                  src="/images/retai-after.jpeg"
                  alt="RetAI logo"
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
      {/* <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[4rem]">
        <div className="">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Why returns need their own infrastructure
          </h2>
          <article className="flex flex-col rounded-2xl border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8 ">
            <ul className="mt-6 space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
              <li>
                Most return and take-back programs were never designed as
                systems of record.
              </li>
              <li>
                They are usually bolted onto tools built for selling, not taking
                things back.
              </li>
            </ul>

            <p className="mt-6 font-semibold text-sm sm:text-base">
              That leads to:
            </p>

            <ul className="mt-4 space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
              <li>Manual tracking, spreadsheets, and workarounds.</li>
              <li>Limited visibility into what came back, where, and when.</li>
              <li>No reliable proof that items were returned correctly.</li>
              <li>
                Growing compliance risk as EPR and reporting rules expand.
              </li>
              <li>
                Operators are now being asked to prove what happened at the
                exact moment of drop-off.
              </li>
              <li>Manual counts and one-off pilots can’t keep up.</li>
            </ul>

            <p className="mt-6 font-semibold">
              Encora exists to give returns and reuse their own infrastructure
              layer—shared, neutral, and built for real operations.
            </p>
          </article>
        </div>

     
      </section> */}

      {/* Why returns need their own infrastructure */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[4rem]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Why returns need their own infrastructure
        </h2>

        <article className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 items-start">

            {/* LEFT COLUMN */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                Most return and take-back programs were never designed as systems of
                record.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                They are usually bolted onto tools built for selling, not taking
                things back.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <p className="font-semibold text-sm sm:text-base">
                That leads to:
              </p>

              <ul className="space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
                <li>Manual tracking, spreadsheets, and workarounds.</li>
                <li>Limited visibility into what came back, where, and when.</li>
                <li>No reliable proof that items were returned correctly.</li>
                <li>Growing compliance risk as EPR and reporting rules expand.</li>
                <li>
                  Operators are now being asked to prove what happened at the exact
                  moment of drop-off.
                </li>
                <li>Manual counts and one-off pilots can’t keep up.</li>
              </ul>

              <p className="font-semibold text-sm sm:text-base">
                Encora exists to give returns and reuse their own infrastructure
                layer—shared, neutral, and built for real operations.
              </p>
            </div>

          </div>
        </article>
      </section>

      {/* Why returns need their own infrastructure */}
      {/* <section className="relative mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[4rem]">
     
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/5 blur-2xl" />

        <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 md:p-10">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Why returns need their own infrastructure
          </h2>

          <article className="flex flex-col rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 md:p-8">
            <ul className="mt-6 space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
              <li>
                Most return and take-back programs were never designed as
                systems of record.
              </li>
              <li>
                They are usually bolted onto tools built for selling, not taking
                things back.
              </li>
            </ul>

            <p className="mt-6 font-semibold text-sm sm:text-base">
              That leads to:
            </p>

            <ul className="mt-4 space-y-3 list-disc pl-5 text-sm sm:text-base text-muted-foreground">
              <li>Manual tracking, spreadsheets, and workarounds.</li>
              <li>Limited visibility into what came back, where, and when.</li>
              <li>No reliable proof that items were returned correctly.</li>
              <li>Growing compliance risk as EPR and reporting rules expand.</li>
              <li>
                Operators are now being asked to prove what happened at the
                exact moment of drop-off.
              </li>
              <li>Manual counts and one-off pilots can’t keep up.</li>
            </ul>

            <p className="mt-6 font-semibold">
              Encora exists to give returns and reuse their own infrastructure
              layer—shared, neutral, and built for real operations.
            </p>
          </article>
        </div>
      </section> */}


      {/* WHAT ENCORA PROVIDES */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px]">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          What Encora provides
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              {/* icon placeholder */}
              <span className="text-lg font-semibold">⟲</span>
            </div>

            <h3 className="text-lg font-semibold">Smart intake</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc">
              <li>
                Secure kiosks and bins for stores, campuses, and public spaces.
              </li>
              <li>Guided return or deposit flows.</li>
              <li>Clear instructions at the point of drop-off.</li>
              <li>Live visibility into what’s coming back and where.</li>
            </ul>
          </article>

          {/* Card 2 */}
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              <span className="text-lg font-semibold">✓</span>
            </div>

            <h3 className="text-lg font-semibold">Proof at drop</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc">
              <li>Every return is verified at the moment it happens.</li>
              <li>Photos and timestamps.</li>
              <li>Rules-based classification and validation.</li>
              <li>Automatic exception and contamination flags.</li>
              <li>
                Operators can see exactly what was dropped—without emails, paper
                forms, or follow-ups.
              </li>
            </ul>
          </article>

          {/* Card 3 */}
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              <span className="text-lg font-semibold">⧉</span>
            </div>

            <h3 className="text-lg font-semibold">Neutral data layer</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc">
              <li>
                Encora is designed to sit alongside your existing systems, not
                replace them.
              </li>
              <li>Structured events captured at intake.</li>
              <li>APIs and webhooks for system-to-system sharing.</li>
              <li>
                Compatible with POS, OMS, campus cards, and EPR reporting tools.
              </li>
              <li>
                Multiple teams and partners can rely on the same source of
                truth.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className=" mx-auto max-w-6xl text-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8 mt-16 md:mt-24 lg:mt-[96px]">
        <h3 className="text-lg font-semibold">Built for compliance</h3>
        <p className="mt-2  text-sm text-muted-foreground">
          Encora supports proof-grade data capture for EPR, reporting, and audit
          requirements—without custom integrations.
        </p>
      </section>

      {/* OUR STORY */}
      <section className=" mx-auto max-w-6xl mt-16 md:mt-24 lg:mt-[96px]">
        <div className=" space-y-4">
          <h2 className="text-center heading-lg mb-12 dark:text-white">
            Our story
          </h2>
          <article className="flex h-full text-center flex-col rounded-2xl border border-border bg-card p-6">
            <p className="">
              Encora started with a simple question: why is it so hard to run a
              good reuse or returns program?
            </p>
            <p>
              We saw campuses, restaurants, and operators trying to do the right
              thing—offering reusables and piloting new return flows—while
              getting buried in manual work and missing data.
            </p>
            <p>
              We began by building smart bins and traceability tools for reuse
              programs. Those early pilots showed the same problems everywhere
              returns happen: retail, campuses, events, and public spaces.
            </p>
            <p>
              Encora has evolved into a modular infrastructure layer for returns
              and reuse—focused on capturing what comes back, proving what
              happened, and connecting that data to the systems and people who
              need it.
            </p>
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-4 rounded-2xl border-emerald-500/30 bg-emerald-500/5 md:p-8 mt-16 md:mt-24 lg:mt-[96px]">
        <div className="space-y-6 border-l border-border pl-6">
          <TimelineItem
            year="2022"
            text="Early pilots with smart return bins in campus and reuse environments."
          />
          <TimelineItem
            year="2023"
            text="Expanded hardware and software for intake telemetry and container tracking."
          />
          <TimelineItem
            year="2024"
            text="Introduced Encora Access / RetAI concepts for retail, campuses, and public agencies."
          />
          <TimelineItem
            year="2025"
            text="Focused on neutral, shared infrastructure for returns, reuse, and EPR."
          />
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
          Ready to see how Encora works?
        </h2>
        <p className="mt-2  text-emerald-100">
          Talk with us about your returns or reuse challenges and explore a
          pilot.
        </p>
        <div className="flex justify-center items-center">
          <div className="mt-6 flex  flex-wrap gap-3 ">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700"
            >
              Talk to us
            </Link>
            {/* rounded-xl px-3 py-2 text-sm font-semibold ring-1 ring-white/40 */}
            {/* <Link
              href="/downloads/platform-overview.pdf"
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground  text-white"
            >
              Download the platform overview
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
