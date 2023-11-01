// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Slide() {
  const [swiper, setSwiper] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (swiper) {
      swiper.autoplay.stop() // Berhenti otomatis saat mouseOnOver
    }
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
    if (swiper) {
      swiper.autoplay.start() // Memulai otomatis lagi saat mouseLeave
    }
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        navigation={isHovered}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-full h-auto">
          <Image
            src="https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-04.jpg"
            alt="slide 1"
            width={1360}
            height={477}
            className="z-50"
          />
          <div className="absolute top-[90px] left-[50px] ">
            <h5 className="text-[13px] font-bold">SUMMER 2023 COLLECTION</h5>
            <h1 className="font-light text-[70px] leading-[80px] mt-[20px]">
              Valentin Paul <br />
              Essential Collection
            </h1>
            <p className="text-[15px] text-gray-400 mt-5 mb-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
            <button className="border border-gray-700 rounded py-2 px-4 hover:bg-white">
              <Link href="#" className="text-[14px] font-semibold">
                Shop Collection
              </Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-05.jpg"
            alt="slide 1"
            width={1800}
            height={0}
          />
          <div className="absolute top-[90px] left-[50px] ">
            <h5 className="text-[13px] font-bold">WINTER 2023 COLLECTION</h5>
            <h1 className="font-light text-[70px] leading-[80px] mt-[20px]">
              Making someone <br />
              feel pretty is an art
            </h1>
            <p className="text-[15px] text-gray-400 mt-5 mb-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
            <button className="border border-gray-700 rounded py-2 px-4 hover:bg-white">
              <Link href="#" className="text-[14px] font-semibold">
                Shop Collection
              </Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-06.jpg"
            alt="slide 1"
            width={1800}
            height={0}
          />
          <div className="absolute top-[90px] left-[50px] ">
            <h5 className="text-[13px] font-bold">SUMMER 2023 COLLECTION</h5>
            <h1 className="font-light text-[70px] leading-[80px] mt-[20px]">
              Valentin Paul <br />
              Essential Collection
            </h1>
            <p className="text-[15px] text-gray-400 mt-5 mb-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
            <button className="border border-gray-700 rounded py-2 px-4 hover:bg-white">
              <Link href="#" className="text-[14px] font-semibold">
                Shop Collection
              </Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
