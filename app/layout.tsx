import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Subscription Intern - Connect Top University Talent with Leading Companies',
  description: 'Revolutionizing internship connections through our subscription-based platform. Fast, affordable, and seamless talent matching with comprehensive support.',
  keywords: 'internships, university talent, student placement, subscription hiring, talent matching',
  openGraph: {
    title: 'Subscription Intern - Premier University Talent Platform',
    description: 'Connect with top-tier university talent through our streamlined subscription service.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 