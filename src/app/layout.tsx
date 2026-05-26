import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation"; 

export const metadata: Metadata = {
  title: "Sumit Shresht | Backend Engineer",
  description: "Crafting resilient backends & intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0c] text-gray-300 antialiased overflow-x-hidden">
        <Navigation />
        {children}
      </body>
    </html>
  );
}