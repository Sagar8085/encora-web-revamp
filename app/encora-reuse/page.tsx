"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { threeSteps, modes, howSteps } from "./data";

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
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/images/Reuse page hero.png')",
          }}
        />

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
            Reuse Encora
          </p>
          {/* Headline */}
          <div className="">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <div
                className="block leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white"
              >
                Smart reuse — no app required
              </div>
            </h1>
          </div>

          {/* Value props */}

          <div className="grid grid-cols-12 gap-8 items-center">
            {/* ===== Left Content (9 columns) ===== */}
            <div className="col-span-12 lg:col-span-9 space-y-6">
              {/* Description */}
              <div className="text-[1.1rem] text-center text-sm sm:text-base text-white/90 leading-relaxed">
                Students borrow in seconds. At return, RFID-tagged containers
                auto-open the correct slot, auto-lock, and the bin captures
                photo + weight — proof-grade data for campus ops. The mobile app
                is optional.
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow"
                >
                  Talk to us
                </Link>

                <a
                  href="/resources/spec-sheet.pdf"
                  download
                  className="inline-flex items-center rounded-full border border-slate-200/60 px-5 py-2.5 text-sm font-medium text-white"
                >
                  Spec sheet
                </a>
              </div>

              {/* RetAI badge */}
              <div>
                <span className="inline-block rounded-md px-2 py-1 text-xs text-slate-300 bg-slate-800/40">
                  Powered by RetAI verification
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
          Why it works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-prose space-y-6">
            {/* Intro */}
            <p className="text-base leading-relaxed text-muted-foreground">
              Reuse programs live or die on proof. Encora captures evidence
              automatically and turns it into trusted data for operations,
              refunds, and reporting.
            </p>

            {/* Key benefits */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <b className="text-foreground">Evidence at drop</b> eliminates
                  disputes and accelerates refunds.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <b className="text-foreground">Ops telemetry</b> surfaces late
                  returns, hotspots, and operational risk.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <b className="text-foreground">API-first architecture</b>{" "}
                  integrates with existing campus systems — no rip-and-replace.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="pt-6 border-t border-slate-200/10" />

            {/* Integrations */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                Works with your campus systems
              </h4>

              <p className="text-sm text-muted-foreground">
                Integrates with leading campus commerce providers (e.g.
                Transact, Atrium, TouchNet, CBORD, Dine On) via APIs and
                webhooks.
              </p>

              <p className="text-xs text-slate-400">
                Examples shown. Use does not imply partnership.
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
        <h3 className="text-lg font-semibold">Integrations</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Works with leading campus commerce providers (e.g., Transact, Atrium,
          TouchNet, CBORD, Dine On) via APIs/webhooks — no POS rip-and-replace.{" "}
          <em className="block text-xs mt-2">
            Examples of supported environments; use does not imply partnership.
          </em>
        </p>
      </section>
    </main>
  );
}

// "use client";

// import React from "react";
// import { Smartphone, Award, Radio, ShieldCheck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// // Small client image component with fallback
// function ImageWithFallback({
//   src,
//   alt = "",
//   className = "",
//   placeholder = "/images/placeholder-encora.png",
// }) {
//   const [imgSrc, setImgSrc] = React.useState(src);
//   return (
//     // kept as <img> intentionally so fallback onError works in client
//     <img
//       src={imgSrc}
//       alt={alt}
//       className={className}
//       onError={() => imgSrc !== placeholder && setImgSrc(placeholder)}
//     />
//   );
// }

// // Placeholder EvidenceFeed if the live component isn't available
// function EvidenceFeedPlaceholder() {
//   return (
//     <div className="rounded-xl border border-slate-200/6 bg-emerald-50/20 dark:bg-emerald-950/20 p-3">
//       <ImageWithFallback
//         src="/images/verify-evidence-feed.png"
//         alt="Verify evidence feed (photo • weight • reason • status)"
//         className="w-full rounded-lg shadow-sm"
//       />
//     </div>
//   );
// }

// export default function EncoraReuseV2() {
//   const threeSteps = [
//     {
//       img: "/images/connect-pos-phone.jpg",
//       title: "Borrow",
//       sub: "Scan a QR (or staff assign) to link the container to the student.",
//     },
//     {
//       img: "/images/module-bins.jpg",
//       title: "Auto-open return",
//       sub: "UHF RFID detects the tag and opens the correct slot.",
//     },
//     {
//       img: "/images/reuse-return.jpg",
//       title: "Verified check-in",
//       sub: "Door auto-locks; bin records photo + weight; optional reason.",
//     },
//   ];

//   const modes = [
//     {
//       icon: <Smartphone className="w-5 h-5" />,
//       title: "App-less QR",
//       sub: "Default. No download. SMS/email reminders.",
//     },
//     {
//       icon: <Award className="w-5 h-5" />,
//       title: "Encora App (optional)",
//       sub: "Rewards, history, push reminders.",
//     },
//     {
//       icon: <Radio className="w-5 h-5" />,
//       title: "Staff/RFID (BOH)",
//       sub: "Low-range RFID for fast assignment; no stray scans.",
//     },
//   ];

//   const howSteps = [
//     {
//       title: "Assign (Tag)",
//       body: "QR or staff/RFID links container ↔ student ID/phone.",
//     },
//     {
//       title: "Use (Archive)",
//       body: "Students dine as usual; container stays tagged to them.",
//     },
//     {
//       title: "Return (Unlock)",
//       body: "Approach bin → UHF RFID detects tag → door auto-opens correct slot.",
//     },
//     {
//       title: "Capture (Camera)",
//       body: "Door auto-locks; bin snaps photos and measures weight; optional reason code.",
//     },
//     {
//       title: "Resolve (ShieldCheck)",
//       body: "Rules choose instant refund or queue for review.",
//     },
//     {
//       title: "Sync (Webhook)",
//       body: "Webhooks update campus card/POS/LMS; late reminders fire automatically.",
//     },
//   ];

//   return (
//     <div className="min-h-screen text-foreground my-16 md:mb-16 space-y-16 md:space-y-24 lg:space-y-[96px]">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-2 items-center">
//           {/* Left: logo, heading, paragraph, CTAs, RetAI badge */}
//           <div className="space-y-6">
//             {/* Encora logo (top-left feel inside left column) */}
//             <div className="flex items-center gap-4">
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
//                 Reuse Encora
//               </p>
//               {/* <Image
//                 src="/images/logos/encora-logo.svg"
//                 alt="Encora"
//                 width={140}
//                 height={36}
//                 className="h-9 w-auto"
//               /> */}
//             </div>

//             <div>
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
//                 Smart reuse — no app required
//               </h1>
//               <p className="mt-3 max-w-xl text-sm text-muted-foreground">
//                 Students borrow in seconds. At return, RFID-tagged containers
//                 auto-open the correct slot, auto-lock, and the bin captures
//                 photo + weight — proof-grade data for campus ops. The mobile app
//                 is optional.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/contact-us"
//                 className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow"
//               >
//                 Talk to us
//               </Link>
//               <a
//                 href="/specs/encora-reuse-spec.pdf"
//                 className="inline-flex items-center rounded-full border border-slate-200/6 px-4 py-2 text-sm font-medium text-muted-foreground"
//               >
//                 Spec sheet
//               </a>
//             </div>

//             {/* small RetAI badge */}
//             <div>
//               <span className="inline-block rounded-md px-2 py-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/40 dark:bg-slate-800/40">
//                 Powered by RetAI verification
//               </span>
//             </div>
//           </div>

//           {/* Right: hero image with fixed height (h-72 desktop, h-64 mobile) */}
//           <div className="flex justify-center">
//             <div className="relative w-full h-64 md:h-72 lg:h-72 rounded-2xl overflow-hidden border border-slate-200/6">
//               <Image
//                 src="/images/encora-access-hero.jpeg"
//                 alt="Students returning containers at an Encora bin"
//                 fill
//                 className="object-cover"
//                 sizes="(min-width: 1024px) 800px, 100vw"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* THREE-STEP REUSE */}
//       <section className="mx-auto max-w-6xl px-4 space-y-6">
//         <h2 className="text-2xl font-semibold">Three-step reuse</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {threeSteps.map((s, i) => (
//             <article
//               key={i}
//               className="space-y-3 rounded-2xl border border-slate-200/6 bg-white dark:bg-slate-900/30 p-4"
//             >
//               <div className="relative w-full h-40 overflow-hidden rounded-xl">
//                 <ImageWithFallback
//                   src={s.img}
//                   alt={s.title}
//                   className="w-full h-full object-fill"
//                 />
//               </div>
//               <h3 className="mt-2 text-lg font-semibold text-foreground">
//                 {s.title}
//               </h3>
//               <p className="text-sm text-muted-foreground">{s.sub}</p>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* HOW STUDENTS USE IT */}
//       <section className="mx-auto max-w-6xl px-4 space-y-4">
//         <h2 className="text-2xl font-semibold">How students use it</h2>
//         <p className="max-w-3xl text-sm text-muted-foreground">
//           Three participation modes cover self-service, optional app loyalty,
//           and staff-led back-of-house flows.
//         </p>

//         <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {modes.map((m, i) => (
//             <div
//               key={i}
//               className="rounded-xl border bg-white dark:bg-slate-900/30 p-5 flex items-start gap-4"
//             >
//               <div className="shrink-0 rounded-lg bg-emerald-600/10 dark:bg-emerald-500/10 p-2 text-emerald-700 dark:text-emerald-300">
//                 {m.icon}
//               </div>
//               <div>
//                 <h3 className="font-medium">{m.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground">{m.sub}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS (2x3 grid with numbers) */}
//       <section className="mx-auto max-w-6xl px-4">
//         <h2 className="text-2xl font-semibold">How it works</h2>
//         <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
//           Every step is tracked, from assignment to refund, so operators can
//           automate trust.
//         </p>

//         <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {howSteps.map((step, idx) => (
//             <div
//               key={step.title}
//               className="flex gap-4 items-start rounded-lg border bg-white dark:bg-slate-900/30 p-4"
//             >
//               <div className="flex-shrink-0">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-600 font-semibold">
//                   {idx + 1}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold">{step.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {step.body}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY IT WORKS + WORKS WITH YOUR CAMPUS SYSTEMS (split) */}
//       <section className="mx-auto max-w-6xl px-4 ">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Why it works</h3>
//             <p className="text-sm text-muted-foreground">
//               Reuse programs live or die on proof. Encora captures the evidence
//               automatically and surfaces it for operations, refunds, and
//               reporting.
//             </p>
//             <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
//               <li>
//                 • <b>Evidence at drop</b> ends disputes and speeds refunds.
//               </li>
//               <li>
//                 • <b>Ops telemetry</b> flags late items and hotspots.
//               </li>
//               <li>
//                 • <b>API-first</b>: works with campus systems via webhooks (no
//                 rip-and-replace).
//               </li>
//             </ul>

//             <div className="mt-6">
//               <h4 className="text-sm font-semibold">
//                 Works with your campus systems
//               </h4>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 Works with leading campus commerce providers (e.g., Transact,
//                 Atrium, TouchNet, CBORD, Dine On) via APIs/webhooks — no POS
//                 rip-and-replace.
//               </p>
//               <p className="mt-2 text-xs text-slate-400">
//                 Examples shown; use does not imply partnership.
//               </p>
//             </div>
//           </div>

//           <div>
//             {/* evidence feed / live component placeholder */}
//             <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/6">
//               <EvidenceFeedPlaceholder />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTEGRATIONS */}
//       <section className="mx-auto max-w-6xl px-4">
//         <h3 className="text-lg font-semibold">Integrations</h3>
//         <p className="mt-3 text-sm text-muted-foreground">
//           Works with leading campus commerce providers (e.g., Transact, Atrium,
//           TouchNet, CBORD, Dine On) via APIs/webhooks — no POS rip-and-replace.{" "}
//           <em className="block text-xs mt-2">
//             Examples of supported environments; use does not imply partnership.
//           </em>
//         </p>
//       </section>
//     </div>
//   );
// }
