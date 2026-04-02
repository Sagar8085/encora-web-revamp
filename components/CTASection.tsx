"use client";

import Link from "next/link";
import { pushToDataLayer } from "lib/gtm";
import { ctaSectionData } from "@/app/data";

export default function CTASection() {
  return (
    <div className="section-spacing">
      <section className="mx-auto max-w-6xl text-center px-4 rounded-3xl bg-emerald-600 text-white md:px-10 p-12 lg:p-16">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            {ctaSectionData.heading}
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-2xl mx-auto">
            {ctaSectionData.description}
          </p>
          <div className="pt-4 flex justify-center items-center">
            <Link
              href={ctaSectionData.buttonLink}
              onClick={(e) => {
                e.stopPropagation();
                pushToDataLayer({ event: "footer_cta_click", button_text: ctaSectionData.buttonText, page_path: "/" });
              }}
              className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              {ctaSectionData.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
