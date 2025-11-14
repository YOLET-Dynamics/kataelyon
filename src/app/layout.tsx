import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kataelyon Group | Building Ethiopia's Future",
  description:
    "Kataelyon Business Group is dedicated to enhancing the quality of life in Ethiopia and Africa through agriculture, construction, trading, and waste management.",
  keywords: [
    "Kataelyon",
    "Ethiopia",
    "Agriculture",
    "Construction",
    "Trading",
    "Waste Management",
    "Business Group",
    "Addis Ababa",
  ],
  authors: [{ name: "Kataelyon Group" }],
  openGraph: {
    title: "Kataelyon Group | Building Ethiopia's Future",
    description:
      "Dream Big, Start Small - Leading national development in Ethiopia through sustainable practices and innovation.",
    type: "website",
    locale: "en_US",
    siteName: "Kataelyon Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kataelyon Group | Building Ethiopia's Future",
    description:
      "Dream Big, Start Small - Leading national development in Ethiopia.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#914110" },
    { media: "(prefers-color-scheme: dark)", color: "#E1A140" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
