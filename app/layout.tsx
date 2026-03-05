import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "styles/globals.css";
import "styles/animations.css";
import Header from "components/Header";
import Footer from "components/Footer";

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
    images: [{ url: "/images/og-encora.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encora — Smart returns. Verified.",
    description:
      "Neutral infrastructure for returns: bins, tags, a verification cloud, and APIs.",
    images: ["/images/og-encora.png"],
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
      </head>
      <body
        className={`${inter.variable}  min-h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
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
