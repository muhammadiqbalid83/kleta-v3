import Slide from '@/components/Slider/Slide'
import Head from 'next/head'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { TfiMoney } from 'react-icons/tfi'
import { BiPhoneCall } from 'react-icons/bi'
import { MdOutlinePayment } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

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
      <Slide />
      {/* SERVICE */}
      <div className="w-full h-auto">
        <div className="container flex justify-between py-14 ">
          <div className="flex gap-5">
            <div>
              <LiaShippingFastSolid size={50} />
            </div>
            <div>
              <h4 className="font-bold">Gratis Ongkir</h4>
              <div className="font-light text-[0.8rem]">
                Gratis Ongkir minimal pembelian 1 Juta
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <TfiMoney size={50} />
            </div>
            <div>
              <h4 className="font-bold">Garansi uang kembali</h4>
              <div className="font-light text-[0.8rem]">
                Dalam waktu 30 hari untuk pertukaran.
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <BiPhoneCall size={50} />
            </div>
            <div>
              <h4 className="font-bold">Dukungan Online</h4>
              <div className="font-light text-[0.8rem]">
                Dalam waktu 30 hari untuk pertukaran.
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <MdOutlinePayment size={50} />
            </div>
            <div>
              <h4 className="font-bold">Pembayaran Fleksibel</h4>
              <div className="font-light text-[0.8rem]">
                Menerima macam-macam metode pembayaran.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NEW SEASON */}
      <div className="w-full h-auto">
        <div className="container flex gap-10">
          <div className="relative">
            <Image
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-01.jpg"
              width={615}
              height={654}
              alt="banner-1"
            />
            <div className="absolute top-0 p-[45px]">
              <h4 className="text-[.8rem] font-bold">MUSIM BARU</h4>
              <h2 className="text-[42px] mt-[20px] font-semibold leading-[45px]">
                Pola besar kembali <br />
                menjadi mode
              </h2>
              <div className="mt-[20px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod.
              </div>
              <button className="border mt-[30px] border-gray-700 rounded py-2 px-4 hover:bg-white">
                <Link href="#" className="text-[14px] font-semibold">
                  Shop Collection
                </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative">
              <Image
                src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-02.jpg"
                width={615}
                height={312}
                alt="banner-2"
              />
              <div className="absolute top-0 p-[45px]">
                <h4 className="text-[.8rem] font-bold">MUSIM BARU</h4>
                <h2 className="text-[42px] mt-[20px] font-medium leading-[40px]">
                  Tren pria terbaru
                  <br /> musim ini
                </h2>
                <div className="mt-[20px]">Jangan lewatkan kesempatan ini.</div>
                <button className="border mt-[25px] border-gray-700 rounded py-2 px-4 hover:bg-white">
                  <Link href="#" className="text-[14px] font-semibold">
                    Shop Collection
                  </Link>
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-03.jpg"
                width={615}
                height={312}
                alt="banner-2"
              />
              <div className="absolute top-0 p-[45px]">
                <h4 className="text-[.8rem] font-bold">MUSIM BARU</h4>
                <h2 className="text-[1.8rem] mt-[20px] font-medium  leading-[35px]">
                  Tunjukkan fashionmu dengan <br />
                  sepatu musim panas
                </h2>
                <div className="mt-[20px]">Jangan lewatkan kesempatan ini.</div>
                <button className="border mt-[25px] border-gray-700 rounded py-2 px-4 hover:bg-white">
                  <Link href="#" className="text-[14px] font-semibold">
                    Shop Collection
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BEST SELLER */}
      <div className="w-full h-auto">
        <div className="container"></div>
      </div>
      {/* OFFER */}
      {/* FEATURED PRODUCTS */}
      {/* NEW SEASON */}
      {/* CATEGORIES */}
      {/* REVIEW */}
      {/* BRAND */}
      {/* OFFER */}
      {/* BLOG */}
    </>
  )
}
