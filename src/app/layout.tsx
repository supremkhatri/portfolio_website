import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suprem Khatri",
  description: "Portfolio Website of Suprem Khatri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
