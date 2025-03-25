import type { Metadata } from 'next';
import '../globals.scss';

export const metadata: Metadata = {
  title: 'Entertainment App',
  description: 'Entertainment app challenge solution',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Entertainment App',
    description: 'Entertainment app challenge solution',
    images: '/images/og-img.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entertainment App',
    description: 'Entertainment app challenge solution',
    images: '/images/og-img.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
