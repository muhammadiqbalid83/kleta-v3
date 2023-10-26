import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kleta</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="https://klbtheme.com/clotya/wp-content/uploads/2022/06/favico-50x50.png"
          sizes="32x32"
        ></link>
      </Head>
    </>
  )
}
