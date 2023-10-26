import FormInput from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import Link from 'next/link'

export default function login() {
  return (
    <div className="flex justify-center items-center">
      <section className="h-[600px] w-[500px] p-[60px]  border-[1px] border-[#dee0ea] rounded">
        <form method="post" className="">
          <h4 className="text-center text-[20px] font-bold">LOGIN</h4>
          <div className="mt-[30px]">
            <FormInput
              type="email"
              label="Email"
              name="identifier"
              defaultValue="iqbal@gmail.com"
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              defaultValue="secret"
            />
            <div className="mt-8">
              <SubmitButton text="Login" />
            </div>
            <p className="text-center mt-2">
              Belum menjadi anggota?{' '}
              <Link href="/register" className="text-red-500">
                Daftar
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  )
}
