import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Good Natured Pup - Dog Image Transformation',
  description: 'Transform your dog photos with AI and share the magic with #GoodNaturedPup',
  keywords: 'dog, AI, image transformation, Good Natured Brand, pet photos',
  authors: [{ name: 'Good Natured Brand' }],
  robots: 'index, follow',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gnb-green-50 to-gnb-beige-50">
          {children}
        </div>
      </body>
    </html>
  )
} 