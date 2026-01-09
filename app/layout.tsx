import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'start-up app',
  description: 'start-up application',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/tsg-logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/tsg-logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/tsg-logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/tsg-logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
