import { BiMenu, BiUser, BiHeart, BiCart } from 'react-icons/bi'

export default function Navigation() {
  return (
    <div className="w-full h-auto">
      <div className="container py-[17px] border-y-[1px] flex justify-between">
        <div className="flex items-center gap-3">
          <div>{/* <BiMenu size={30} /> */}</div>
          <div className="text-[30px] font-semibold">Kleta</div>
        </div>
        {/* SEARCH */}
        <div className="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 text-sm  rounded pl-10  focus:text-gray-900 w-[600px] h-[46px] bg-neutral-100 outline-0 border-none"
            placeholder="Cari produk favorit kamu ..."
            autocomplete="off"
          />
        </div>
        <div className="flex items-center gap-3">
          <div>
            <BiUser size={21} />
          </div>
          <div>
            <BiHeart size={21} />
          </div>
          <div>Rp.0</div>
          <div>
            <BiCart size={21} />
          </div>
        </div>
      </div>
    </div>
  )
}
