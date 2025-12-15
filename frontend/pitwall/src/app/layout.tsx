import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from 'next/font/google'
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
import { cn } from '@/lib/utils'

// Using Inter for standard text, JetBrains Mono for data/numbers
const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const fontMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Pitwall | Modern F1 Dashboard',
  description: 'Real-time telemetry, AI predictions, and immersive analysis.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     {children}
    //     <Analytics />
    //   </body>
    // </html>
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-[#0a0a0a] font-sans antialiased overflow-x-hidden text-white",
         fontSans.variable, fontMono.variable
        )}>
          {children}
      </body>
    </html>
  );
}