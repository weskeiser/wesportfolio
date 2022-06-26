import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wes Keiser</title>
        <meta name="description" content="Portfolio by Wes Keiser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
