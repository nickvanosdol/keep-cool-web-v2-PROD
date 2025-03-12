import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keepcool.co'),
  title: {
    template: '%s - Keep Cool',
    default: 'Keep Cool - Climate Tech Newsletter',
  },
  description:
    'A twice weekly newsletter telling underpriced stories at the intersection of climate tech & business.',
  openGraph: {
    title: 'My Blog',
    description:
      'A twice weekly newsletter telling underpriced stories at the intersection of climate tech & business.',
    images: ['/clouds.jpg'],
    siteName: 'Keep Cool Newsletter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keep Cool Newsletter',
    description:
      'A twice weekly newsletter telling underpriced stories at the intersection of climate tech & business.',
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
