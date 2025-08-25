import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Courtney Buck - Professional',
  description: 'Building at the intersection of technology and human potential',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}