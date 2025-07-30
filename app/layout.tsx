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