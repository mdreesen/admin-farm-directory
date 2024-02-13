'use client'


import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchZipCode() {

  // URLSearchParams is a Web API that provides utility methods for manipulating the URL query parameters.
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  const handleSearch = async () => {


    // const zipCode = await getZip();

  }

  return (
    <div className="relative flex flex-shrink-0">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        type="submit"
        value="Filter By Zip"
        onSubmit={handleSearch}
        // defaultValue={searchParams.get('query')?.toString()}
        className="peer block w-full border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      />

      {/* <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
    </div>
  );
}
