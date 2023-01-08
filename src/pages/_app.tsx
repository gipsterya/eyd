import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/noto-sans.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/noto-sans-italic.woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
