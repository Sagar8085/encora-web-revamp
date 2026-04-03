"use client";
import React from "react";
import { privacyData } from "./data";

export default function PrivacyPage() {
  // Simple email obfuscation to reduce scraping
  const emailUser = "contact";
  const emailDomain = "encora.co";
  const email = `${emailUser}@${emailDomain}`;

  return (
    <main className="relative px-4 py-20 md:py-28 print:bg-white print:text-black">
      <div className="mx-auto max-w-3xl md:max-w-[768px]">
        <div className="rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-lg dark:bg-zinc-900/60 dark:border-white/5">
          <article
            className="prose prose-zinc max-w-none p-6 md:p-10 dark:prose-invert
              prose-headings:scroll-mt-24
              prose-h1:mb-3 prose-h1:text-2xl md:prose-h1:text-3xl
              prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-xl
              !prose-p:leading-[1.7] prose-p:mb-4
              prose-ul:pl-6 prose-ul:my-4 prose-li:my-[6px] prose-li:ml-2 prose-ul:list-disc"
          >
            <h1>{privacyData.heading}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {privacyData.lastUpdated}
            </p>

            <p className="mb-6">
              {privacyData.intro}
            </p>

            {privacyData.sections.map((section) => (
              <React.Fragment key={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.isList ? (
                  <ul className="list-disc list-inside mb-6">
                    {section.items?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-6">{section.text}</p>
                )}
              </React.Fragment>
            ))}

            <h2 id="contact">{privacyData.contactHeading}</h2>
            <p>
              {privacyData.contactText}
              <a
                href={`mailto:${email}`}
                className="text-[#56bf93] dark:text-[#5fe3b3] underline decoration-transparent hover:decoration-current transition-colors"
              >
                {emailUser}[at]{emailDomain}
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
