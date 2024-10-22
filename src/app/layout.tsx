import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Poppins, Jura } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const jura = Jura({
  subsets: ['latin'],
  variable: '--font-jura',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SHEMMEE | Front-end Developer',
  description:
    'Front-end Developer specializing in engaging, scalable web experiences. Explore my portfolio for innovative projects, skills, and my professional journey.',
  keywords: [
    'Shemmee',
    'Shemmee Codes',
    'Front-end Developer',
    'Web Developer',
    'JavaScript Developer',
    'React Developer',
    'Next.js Developer',
    'Developer Portfolio',
    'Portfolio Website',
    'Self-taught Developer',
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Vite',
    'TailwindCSS',
    'HTML',
    'CSS',
    'UI/UX Design',
    'Responsive Design',
    'Web Development',
  ],
  creator: 'Shemmee',
  authors: [{ name: 'Shemmee', url: 'https://www.shemmee.codes' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'SHEMMEE | Front-end Developer Portfolio',
    description:
      'Front-end Developer | Building engaging and scalable unique web experiences.',
    url: 'https://www.shemmee.codes',
    siteName: 'Shemmee',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'SHEMMEE | Front-end Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHEMMEE | Front-end Developer Portfolio',
    description:
      'Front-end Developer | Building engaging and scalable unique web experiences.',
    creator: '@s_shemmee',
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'SHEMMEE | Front-end Developer Portfolio',
      },
    ],
  },
  metadataBase: new URL('https://www.shemmee.codes'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1a202c' },
  ],
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jura.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bgLight dark:bg-bgDark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
