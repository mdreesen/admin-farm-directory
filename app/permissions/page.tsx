import Link from "next/link";

export default function Page() {

  return (
    <div className="h-[100vh]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="mt-10 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Need permissions to sign into this account
          </h2>
          <Link className="text-center mt-6" href={'/'}>Return to login</Link>
        </div>
      </div>
    </div>
  )
}
