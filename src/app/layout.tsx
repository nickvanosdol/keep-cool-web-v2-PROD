import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://subscribe.keepcool.co'),
  title: {
    template: '%s - Keep Cool',
    default:
      'Keep Cool: Learn About The Intersection of Climate, Energy, and Business',
  },
  description:
    'Covering the business of climate tech & energy. Join 18,000+ climate investors, operators, & the climate-curious.',
  openGraph: {
    title: 'Keep Cool Newsletter',
    description:
      'Covering the business of climate tech & energy. Join 18,000+ climate investors, operators, & the climate-curious.',
    images: ['/clouds.jpg'],
    siteName: 'Keep Cool Newsletter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keep Cool Newsletter',
    description:
      'Covering the business of climate tech & energy. Join 18,000+ climate investors, operators, & the climate-curious.',
    images: ['/clouds.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=outfit@400,500,600,700&amp;display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Keep Cool Newsletter"
          href="https://rss.beehiiv.com/feeds/bOZKJZ4Uhk.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
