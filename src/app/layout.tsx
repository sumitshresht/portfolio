import type { Metadata } from "next";
// @ts-ignore: Allow side-effect CSS import without type declarations
import "./globals.css";
import Navigation from "@/components/Navigation"; // Ensure this path matches

export const metadata: Metadata = {
  title: "Sumit Shresht | Backend Engineer",
  description: "Engineering scalable backend systems and developer tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0c] text-gray-300 antialiased overflow-x-hidden">
        <Navigation />
        {children}
      </body>
    </html>
  );
}