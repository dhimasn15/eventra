import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eventra - Event Management Platform',
  description: 'Platform untuk mengelola event, kompetisi, dan turnamen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}