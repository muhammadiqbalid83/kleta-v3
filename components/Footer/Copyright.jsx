import Image from 'next/image'

export default function Copyright() {
  return (
    <div className="w-full h-auto ">
      <div className="container border-t-2">
        <div className="flex items-center py-[50px] justify-between">
          <p className="text-[0.8rem]">
            {' '}
            Copyright 2023 © Kleta. All right reserved.
          </p>
          <a href="#">
            <Image
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/06/cards.png"
              alt="pembayaran"
              width={296}
              height={20}
            />
          </a>
          <div>
            <ul className="flex text-[0.8rem] gap-[15px]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li className="border-x-2 px-2">
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Returns Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
