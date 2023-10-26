import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function Subscribe() {
  return (
    <div className="h-[390px] w-full text-white bg-black mt-[80px]">
      <div className="container py-[80px]  flex justify-center gap-[350px]">
        <div className="w-[504px] ">
          <h3 className="text-[1.8rem]">
            Get our emails for info on new items, sales and more.
          </h3>
          <div className="mt-[10px]">
            <p className="text-[#75767c] text-[1rem]">
              We will email you a voucher worth RP.100.000 off your first order
              over RP.500.000.
            </p>
          </div>
          <div className="flex mt-[35px]">
            <input
              type="text"
              className="form-input w-[377px]"
              placeholder="Enter your email address"
            />
            <Button variant="outline" size="subscribe">
              Subscribe
            </Button>
          </div>
          <span>
            <p className="text-[#75767c] text-[0.75rem] mt-[10px]">
              By subscribing you agree to our Terms & Conditions and Privacy &
              Cookies Policy.
            </p>
          </span>
        </div>
        <div className="w-[504px] ">
          <h3 className="text-[1.8rem]">
            Butuh Bantuan?
            <br />
            (+62) 834 5678 90
          </h3>
          <div className="mb-[1.875rem]">
            <p className="text-[#75767c]">We are available 8:00am – 7:00pm</p>
          </div>
          <div className="flex items-center gap-[5px] mb-[10px]">
            <a href="https://www.apple.com/app-store/">
              <Image
                src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/app-store.png"
                alt="app"
                width={115}
                height={42}
              />
            </a>
            <a href="https://play.google.com/store/games?device=windows">
              <Image
                src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/google-play.png"
                alt="app"
                width={115}
                height={42}
              />
            </a>
          </div>
          <span className="text-[#75767c] text-[12px]">
            <strong>Shopping App:</strong> Try our View in Your Room feature,
            manage registries and save payment info.
          </span>
        </div>
      </div>
    </div>
  )
}
