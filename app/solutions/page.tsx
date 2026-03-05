"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { MODULES, ENVIRONMENTS } from "./data";
import Link from "next/link";

export default function SolutionsPage() {
  const sectionRef = useRef(null);
  return (
    <main className="min-h-screen text-foreground">
      <section
        ref={sectionRef}
        className="relative  mt-16 lg:mt-0 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center align-center overflow-hidden bg-card"
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:center] md:bg-[position:left_center]"
          style={{
            backgroundImage: "url('/images/solutions hero image.png')",
          }}
        />

        {/* Overlay Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.15))"
          }}
        />

        {/* Content */}
        <div className="container-encora relative z-10 px-4 sm:px-8 w-full h-full flex items-center">
          <div className="w-full max-w-[720px] text-left mx-auto">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/90 mb-2">
              Solutions
            </p>
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight text-white mb-4">
              Smart return infrastructure
            </h1>

            {/* Value props */}
            <div className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl ">
              Four building blocks that work together or stand alone—so you can
              plug Encora into campuses, retail, packaging EPR, and events
              without replatforming.
            </div>
          </div>
        </div>


      </section>

      {/* SECTION 1 – Four building blocks */}
      <section
        aria-labelledby="modules-heading"
        className="mx-auto w-full max-w-6xl px-4 lg:px-8 mt-16 md:mt-16 space-y-4"
      >
        <div className="space-y-3">
          <h2
            id="modules-heading"
            className="text-center heading-lg mb-12 dark:text-white"
          >
            The four building blocks
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base text-center">
            Encora is built from four core components. You can start with one,
            or deploy them together for end-to-end returns and traceability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((mod, index) => {
            const href =
              index === 0
                ? "/bin"
                : index === 1
                  ? "/encora-reuse"
                  : "/encora-access";

            return (
              <article
                key={mod.key}
                className="flex h-full flex-col rounded-2xl border border-border text-card-foreground p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 dark:border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/20 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  <mod.Icon />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {mod.title}{" "}
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    · {mod.subtitle}
                  </span>
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {mod.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 text-xs">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 dark:border-emerald-500/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-200 transition-colors"
                  >
                    See how this works in practice
                    <span aria-hidden="true">↴</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bridge text */}
      <section className="mx-auto w-full max-w-6xl px-4 lg:px-8 mt-16 md:mt-24 lg:mt-[96px] space-y-4">
        <h2 className="text-center heading-lg mb-12 dark:text-white">
          Where it fits
        </h2>
        <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
          <p className="max-w-6xl text-center text-sm text-muted-foreground sm:text-base">
            Each environment uses the same four building blocks in different
            ways. Campuses pair Bins + Tags + Verify to manage reuse and
            deposits, while EPR deployments lean on Verify + Connect to deliver
            auditable data for regulators and stewardship schemes.
          </p>
        </article>
      </section>

      {/* SECTION 2 – Environments with image cards */}
      <section className="mx-auto w-full max-w-6xl px-4 lg:px-8 mt-16 md:mt-24 lg:mt-[96px] mb-16 md:mb-16 grid gap-8 lg:grid-cols-2">
        {ENVIRONMENTS.map((env) => (
          <article
            key={env.key}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={env.imageSrc}
                alt={env.imageAlt}
                fill
                className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-end">
              <div className="pointer-events-auto w-full p-6 sm:p-7">
                <h3 className="text-xl font-semibold sm:text-2xl text-foreground">
                  {env.title}
                </h3>

                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {env.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a
                    href={env.href}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 dark:bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-emerald-500/40 dark:shadow-emerald-500/50 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors"
                  >
                    {env.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
