import { fetchFarmerDetails, fetchSingleFarmerById } from '@/actions/farmer';
import ButtonDeleteProduct from '@/ui/buttons/ButtonDeleteProduct';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const farmerData = await fetchFarmerDetails(id);

  const noProducts = (<h2 className="block text-sm font-medium leading-6 text-gray-900">No Products Available</h2>  )

  return (
    <div>
      <div className='flex w-full justify-around border-b border-gray-900/10 pb-12'>
        <Link className='py-6 text-[#7A3A30]' href={`/dashboard/farmers/${farmerData._id}/info`}>View Info</Link>
        <Link className='py-6 text-[#7A3A30]' href={`/dashboard/farmers/${farmerData._id}/products/make-product`}>Make Product</Link>
      </div>

      <ul role="list" className="divide-y divide-gray-100">

        {farmerData?.products.length > 0 ? farmerData?.products.map((item: any) => (
          <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
            <div className="min-w-0">
              <div className="flex flex-col items-start gap-x-3">
                {item.product_image && <img alt={item.product_image} src={`/images/products/${item.product_image}`} className="mx-auto h-24 w-24 rounded-full" />}
                <p className="text-sm/6 font-semibold text-gray-900">{item.product_title}</p>
              </div>
              <div className="mt-1 flex flex-col gap-x-2 text-xs/5 text-gray-500">
                <p>{item.product_description}</p>
                <p>Price: {item.product_price}</p>
                <p>Availability: {item.product_available}</p>
                <p>Show: {item.product_show}</p>

              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href={`/dashboard/farmers/${farmerData._id}/products/${item._id}`}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                Edit
              </a>
              <Menu as="div" className="relative flex-none">
                <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                </MenuButton>
                <MenuItems
                  // transition
                  className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <ButtonDeleteProduct data={item.id} />
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </li>
        )) : noProducts}
      </ul>
    </div>
  )
}
