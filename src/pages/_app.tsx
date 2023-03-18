import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { HeaderComponent } from '@/components/header/header.component';
import { FooterComponent } from '@/components/footer/footer.component';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="w-screen h-screen">
        <div className="container mx-auto my-0 p-4">
          <div className="mb-9">
            <HeaderComponent />
          </div>
          <Component {...pageProps} />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
