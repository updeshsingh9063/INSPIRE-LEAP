import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Inspire Leap - Premium EdTech Platform | Wipro Partner Program",
  description: "Transform your career with industry-relevant courses, guaranteed internships, and placement opportunities with top tech companies. Wipro Partner Program.",
  keywords: ["EdTech", "Online Courses", "Internships", "Placements", "Wipro", "Career Transformation", "Tech Education"],
  authors: [{ name: "Inspire Leap" }],
  creator: "Inspire Leap",
  publisher: "Inspire Leap",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://inspireleap.com',
    title: 'Inspire Leap - Premium EdTech Platform',
    description: 'Transform your career with industry-relevant courses and guaranteed placements',
    siteName: 'Inspire Leap',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inspire Leap - Premium EdTech Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspire Leap - Premium EdTech Platform',
    description: 'Transform your career with industry-relevant courses and guaranteed placements',
    images: ['/twitter-image.png'],
    creator: '@inspireleap',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-full bg-black text-white overflow-x-hidden">
        {children}
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </body>
    </html>
  )
}