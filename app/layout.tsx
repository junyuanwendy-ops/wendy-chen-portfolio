import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junyuan (Wendy) Chen | Accounting, Finance & Analytics",
  description:
    "Professional portfolio for Junyuan (Wendy) Chen, an accounting, finance, tax, audit, operations, and analytics candidate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
        <div className="starfield" aria-hidden="true" />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
