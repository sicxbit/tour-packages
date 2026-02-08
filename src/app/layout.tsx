import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Lagoons Travel",
  description: "Blue Lagoons travel experiences and tour packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
