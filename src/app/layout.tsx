import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/components/GlobalLayout";
import { ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import { generateJsonLd, generateOrganizationJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SaaS Starter - Build Your Dreams Into Reality",
  description: "The most advanced SaaS starter kit with everything you need to launch your next big idea. Built with Next.js 14, TypeScript, and modern best practices.",
  keywords: "SaaS, starter kit, Next.js, TypeScript, Tailwind CSS, React",
  authors: [{ name: "SaaS Starter Team" }],
  creator: "SaaS Starter",
  metadataBase: new URL("https://saasstarterkit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saasstarterkit.com",
    title: "SaaS Starter - Build Your Dreams Into Reality",
    description: "The most advanced SaaS starter kit with everything you need to launch your next big idea.",
    siteName: "SaaS Starter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SaaS Starter Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Starter - Build Your Dreams Into Reality",
    description: "The most advanced SaaS starter kit with everything you need to launch your next big idea.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd()
  const organizationJsonLd = generateOrganizationJsonLd()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider>
          <ToastProvider>
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
