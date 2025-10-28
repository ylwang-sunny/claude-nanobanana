import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nano Banana - AI Image Editor',
  description: 'Transform any image with simple text prompts. Advanced AI model that outperforms Flux Kontext.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
