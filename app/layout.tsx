import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getServerSession } from 'next-auth';

import Provider from '@/app/lib/session/SessionProvider';


// Style Sheets and styles
import './globals.css';
import 'radar-sdk-js/dist/radar.css';
const inter = Inter({ subsets: ['latin'] })

// Components
import { Footer } from "@/app/ui/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
