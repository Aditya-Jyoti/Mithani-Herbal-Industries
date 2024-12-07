import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Mithani Herbal Industries",
  description:
    "Experience the freshness of natural ingredients with Mithani Herbal Industries' tobacco-free paan masala alternatives. Join the journey towards a healthier lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-body">
        <nav>
          <Navbar />
        </nav>

        {children}
      </body>
    </html>
  );
}
