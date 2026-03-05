"use client";

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
            <h1>Privacy Policy</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Last updated: November 1, 2025
            </p>

            <p className="mb-6">
              This Privacy Policy explains how Encora collects, uses, and
              safeguards information when you access our websites, products, and
              services. By using our services, you agree to the collection and
              use of information in accordance with this policy.
            </p>

            <h2 id="information-we-collect">Information We Collect</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Account and contact information you provide.</li>
              <li>Usage data (device, browser, and interaction analytics).</li>
              <li>
                Operational data necessary for returns, verifications, and
                support.
              </li>
            </ul>

            <h2 id="how-we-use-information">How We Use Information</h2>
            <ul className="list-disc list-inside mb-6">
              <li>To provide and improve our services.</li>
              <li>To process support and contact requests.</li>
              <li>
                To maintain security, prevent fraud, and comply with legal
                obligations.
              </li>
            </ul>

            <h2 id="data-sharing">Data Sharing</h2>
            <p className="mb-6">
              We do not sell personal information. We may share data with
              trusted processors who help us deliver services (e.g., cloud
              hosting, email delivery), bound by confidentiality and processing
              agreements.
            </p>

            <h2 id="security">Security</h2>
            <p className="mb-6">
              We apply technical and organizational measures appropriate to the
              risk to protect your information. No method of transmission over
              the Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 id="your-rights">Your Rights</h2>
            <p className="mb-6">
              Depending on your location, you may have rights to access,
              correct, delete, or restrict processing of your data. Contact us
              to exercise these rights.
            </p>

            <h2 id="contact">Contact</h2>
            <p>
              Questions? Email{" "}
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
