import { ReactNode } from 'react'
import Script from 'next/script'
import Navigation from './navigation'
import Sidebar from './sidebar'
import Footer from './footer'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <Script src="/theme.js" />
      <Navigation />
      <div className="mx-auto flex w-full">
        <Sidebar />
        <main
          id="skip"
          className="m-0 flex min-h-screen w-full max-w-2xl scroll-mt-4.5 flex-col px-8 pb-10 md:px-12 md:pb-16"
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
