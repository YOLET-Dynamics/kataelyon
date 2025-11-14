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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
