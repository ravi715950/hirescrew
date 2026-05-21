import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | HiresCrew",
    default: "HiresCrew — Your Strategic Hiring Partner",
  },
  description:
    "HiresCrew is a specialist recruitment firm — your strategic hiring partner. We provide tailored recruitment solutions to match your hiring needs with the right talent.",
  openGraph: {
    siteName: "HiresCrew",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#30A533",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HiresCrew",
              description:
                "Specialist recruitment firm providing Executive Search, Software Product Hiring, RPO Solutions, and Startup Recruitment.",
              foundingDate: "2025",
              logo: "/logo/logo-white.svg",
              url: "https://hirescrew.com",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
