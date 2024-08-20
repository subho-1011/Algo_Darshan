import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import * as providers from "@/contexts";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Algo Darshan",
    template: "%s | 'Algo Darshan",
  },
  description: "Different types of algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <providers.AlgorithmProvider>
          <Header />
          <main className="flex min-h-[calc(100vh-68px)] min-w-full bg-gradient-to-t to-purple-200 from-emerald-50 flex-col items-center justify-between">
            {children}
          </main>
          <Toaster />
        </providers.AlgorithmProvider>
      </body>
    </html>
  );
}
