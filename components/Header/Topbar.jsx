import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { BsInstagram } from 'react-icons/bs'
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiSolidDownArrow,
  BiLogoInstagram,
  BiLogoLinkedin,
} from 'react-icons/bi'

export default function Topbar() {
  return (
    <div className="w-full h-auto">
      <div className="container flex justify-between text-[13px] py-[10px]">
        <div className="flex gap-3 items-center">
          <div>
            <BsInstagram size={17} />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2">
                  <div>3.1 Followers</div>
                  <div>
                    <BiSolidDownArrow size={8} />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <div>
                      <BiLogoFacebook />
                    </div>
                    <div>Facebook</div>
                  </div>{' '}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <div>
                      <BiLogoTwitter />
                    </div>
                    <div>Twitter</div>
                  </div>{' '}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <div>
                      <BiLogoInstagram />
                    </div>
                    <div>Instagram</div>
                  </div>{' '}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-3">
                    <div>
                      <BiLogoLinkedin />
                    </div>
                    <div>Linkedin</div>
                  </div>{' '}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          Gratis ongkir ke seluruh dunia dengan minimal pembelian 2 Juta.{' '}
          <a href="#" className="text-[#ee403d]">
            Belanja Sekarang.
          </a>
        </div>
        <div className="flex gap-3">
          <div>Lacak Pesanan</div>
          <div>
            {' '}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2">
                  <div>Indonesia</div>
                  <div>
                    <BiSolidDownArrow size={8} />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                {' '}
                <div className="flex items-center gap-2">
                  <div>IDR</div>
                  <div>
                    <BiSolidDownArrow size={8} />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>USD</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
