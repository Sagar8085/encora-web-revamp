import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "styles/globals.css";
import "styles/animations.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Script from "next/script";
import GTMEventTracker from "components/GTMEventTracker";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
//   variable: "--font-roboto",
//   display: "swap",
// })

// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-roboto-mono",
//   display: "swap",
// })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-jakarta",
//   display: "swap",
// });
// title: "Encora - Smart Return Infrastructure",
// description: "Transform product returns into sustainable value. Reduce labor costs, minimize shrink, and maximize compliance with intelligent automation.",
// keywords: "returns management, reverse logistics, sustainability, compliance, retail technology",
export const metadata: Metadata = {
  title: "Encora — Smart returns. Verified.",
  description:
    "Neutral infrastructure for returns: bins, tags, a verification cloud, and APIs.",
  openGraph: {
    title: "Encora — Smart returns. Verified.",
    description:
      "Neutral infrastructure for returns: bins, tags, a verification cloud, and APIs.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Encora",
    images: [{ url: `${process.env.NEXT_PUBLIC_CDN_URL || ''}/images/og-encora.png`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encora — Smart returns. Verified.",
    description:
      "Neutral infrastructure for returns: bins, tags, a verification cloud, and APIs.",
    images: [`${process.env.NEXT_PUBLIC_CDN_URL || ''}/images/og-encora.png`],
  },
  ...(process.env.NEXT_PUBLIC_MODE === "development" && {
    robots: {
      index: false,
      follow: false,
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJ75WCF3');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TJ75WCF3"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <GTMEventTracker />
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main
              className=" inset-0 -z-10 bg-cover bg-no-repeat bg-center 
                 bg-white
                 dark:bg-[url('/images/hero-bg-encora-dark.png')] flex-1 w-full z-0"
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
