import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id" className="min-w-fit font-sans">
      <Head />
      <body className="bg-light dark:bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
