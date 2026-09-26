import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphael G. U. Eriemo | HealthTech Founder & Systems Builder",
  description:
    "Raphael G. U. Eriemo is a Nigerian HealthTech founder building Ornia through Maluel Limited, alongside property development and business strategy.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
