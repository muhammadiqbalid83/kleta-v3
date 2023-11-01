import '@/styles/globals.css'
import { Jost } from 'next/font/google'

import Footer from '@/components/Footer'
import { Header } from '../components/'

const font = Jost({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
