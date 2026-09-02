import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/orbitron/latin-500.css";
import "@fontsource/orbitron/latin-600.css";
import "@fontsource/orbitron/latin-700.css";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amin Forouzandeh — Frontend Developer",
  description:
    "Frontend developer building fast, scalable React and Next.js products for enterprise and B2C teams.",
  keywords: [
    "Amin FOROUZANDEH",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [{ name: "Amin FOROUZANDEH" }],
  creator: "Amin FOROUZANDEH",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Amin FOROUZANDEH — Frontend Developer",
    description:
      "Selected React and Next.js work across national services, AI products, and B2C platforms.",
    locale: "en_US",
    siteName: "Amin FOROUZANDEH Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin FOROUZANDEH — Frontend Developer",
    description:
      "Selected React and Next.js work across national services, AI products, and B2C platforms.",
  },
  robots: { index: true, follow: true },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('amin-theme');
    const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  } catch (_) {}
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
