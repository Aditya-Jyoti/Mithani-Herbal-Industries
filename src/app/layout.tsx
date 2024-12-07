import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mithani Herbal Industries",
  description:
    "Mithani Herbal Industries, offering premium tobacco-free and nicotine-free paan masala alternatives. Immerse in a vibrant digital experience with an interactive bot guiding you through our sustainable process, natural ingredients, and a range of wellness-focused products. Switch to a healthier lifestyle with our flavorful, gut-friendly alternatives that promote a cleaner and greener India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-body">{children}</body>
    </html>
  );
}
