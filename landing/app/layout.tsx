import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://copilotdevdays-cde.vercel.app'),
  title: 'GitHub Copilot Dev Days | Ciudad del Este, Paraguay',
  description:
    'Evento gratuito sobre programación asistida por IA con GitHub Copilot. Sábado 25 de Abril 2026 en Mi LAB - Hub de Innovación Colaborativo, Ciudad del Este, Paraguay.',
  keywords: ['GitHub Copilot', 'Dev Days', 'Ciudad del Este', 'Paraguay', 'IA', 'programación', 'evento gratuito'],
  openGraph: {
    title: 'GitHub Copilot Dev Days | Ciudad del Este',
    description: 'Evento 100% gratuito sobre IA y GitHub Copilot. 25 de Abril 2026 · Ciudad del Este, Paraguay.',
    type: 'website',
    locale: 'es_PY',
    images: [
      {
        url: '/example-luma-event-cover.png',
        width: 1200,
        height: 630,
        alt: 'GitHub Copilot Dev Days Ciudad del Este',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub Copilot Dev Days | Ciudad del Este',
    description: 'Evento 100% gratuito sobre IA y GitHub Copilot. 25 de Abril 2026.',
    images: ['/example-luma-event-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0c10',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          id="luma-checkout"
          src="https://embed.lu.ma/checkout-button.js"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
