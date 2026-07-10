import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RackCorp Sovereignty & Infrastructure Readiness Scan",
  description: "A free public infrastructure assessment for hosting location, resilience and security signals.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Sovereignty & Infrastructure Readiness Scan",
    description: "Know where your website stands.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
