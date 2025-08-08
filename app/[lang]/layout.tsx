export const revalidate = 300 // 5 minutes - matches page revalidation

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { baseUrl } from "@/constants"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getMeta = async () => new Promise<{ title: string; description: string }>((resolve) => {
  setTimeout(() => {
    resolve({
      title: "My Test Layout Title",
      description: "My Test Layout Description",
    })
  }, 500)
})

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getMeta()

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{
        url: '/og.jpeg',
        width: 225,
        height: 225,
        type: 'image/jpeg',
        alt: 'Test',
      }],
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
