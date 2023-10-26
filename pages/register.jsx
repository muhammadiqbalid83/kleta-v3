import FormInput from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import Link from 'next/link'

export default function register() {
  return (
    <div className="flex justify-center items-center">
      <section className="h-[600px] w-[500px] p-[60px]  border-[1px] border-[#dee0ea] rounded">
        <form method="POST" className="">
          <div className="mt-[30px]">
            <h4 className="text-center text-[20px] font-bold">Register</h4>
            <FormInput type="text" label="username" name="username" />
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <div className="mt-8">
              <SubmitButton text="Daftar" />
            </div>
            <p className="text-center mt-2">
              Sudah menjadi anggota?{' '}
              <Link href="/login" className="text-red-500">
                Masuk
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  )
}
