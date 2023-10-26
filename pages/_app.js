import '@/styles/globals.css'
import { Jost } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
