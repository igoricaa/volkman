import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
import PageTransition from '@/components/PageTransition/PageTransition';
import SplashScreen from '@/components/PageTransition/SplashScreen/SplashScreen';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';


const gilroy = localFont({
  src: [
    {
      path: '../../fonts/Gilroy-Light.woff2',
      weight: '300',
    },
    {
      path: '../../fonts/Gilroy-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../fonts/Gilroy-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../fonts/Gilroy-Semibold.woff2',
      weight: '600',
    },
    {
      path: '../../fonts/Gilroy-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-gilroy',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marija-volkman.com'),
  title: {
    default: 'Marija Volkman',
    template: '%s | Marija Volkman',
  },
  description: 'Official website of Marija Volkman.',
  openGraph: {
    title: 'Marija Volkman',
    description: 'Official website of Marija Volkman.',
    url: 'marija-volkman.com',
    siteName: 'Marija Volkman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Marija Volkman',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={[`${gilroy.variable}`, 'demo-1', 'loading'].join(' ')}>
        <PageTransition />
        {/* <SplashScreen /> */}
        <BackgroundImage />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
