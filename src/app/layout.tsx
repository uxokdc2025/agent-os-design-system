import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agent OS Design System',
  description: 'Interactive showcase of Agent OS design components across 8 brand themes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body data-design-system="midnight-aubergine" data-color-mode="dark">
        {children}
      </body>
    </html>
  )
}