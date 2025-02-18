import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Keep Cool',
    default: 'Keep Cool - Climate Tech Newsletter',
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
