import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP Visuals | Creative Media — Austin, TX",
  description:
    "Independent website concept for JP Visuals, an Austin-based creative media business.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}