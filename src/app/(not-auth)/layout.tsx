import type { Metadata } from 'next';
import '../globals.scss';
import Header from '@/components/header/Header';
import Wrapper from '@/components/wrapper/Wrapper';

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
        <Header />
        <main>
          <Wrapper>{children}</Wrapper>
        </main>
      </body>
    </html>
  );
}
