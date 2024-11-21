import Image from "next/image";
import Link from 'next/link';
import SearchFarmerFilter from "@/ui/filters/SearchFarmerFilter";
import { EnvelopeIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import { searchFarmers } from '@/actions/farmer';

export default async function CardFarmer({ searchParams }: any) {

  const searchQuery = searchParams.query
  const farmers = await searchFarmers({ searchQuery }) as any;

  const NoFarmer = () => (
    <div className="flex flex-col justify-center text-center gap-y-4 p-6">
      <span>Apologies, No Farmers</span>
    </div>
  );

  const Farmers = async () => {
    return farmers.length > 0 ? (
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 justify-items-center">
        {farmers.map((item: any, index: number) => (
          <li
            key={`${item.email}-${index}`}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-[261px]"
          >
            <div className="flex flex-1 flex-col p-8 items-center">
              {item?.image?.url ? <Image
                alt=""
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                src={item?.image?.url as string}
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              /> : <UserCircleIcon aria-hidden="true" className="mx-auto h-32 w-32 text-gray-300" />}
              <h3 className="mt-6 text-md font-medium text-gray-900">{item.farm_name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <Link href={`/dashboard/farmers/${item._id}/info`}>
                    <span className="inline-flex items-center rounded-full bg-[#7A3A30] px-2 py-1 text-sm font-medium text-white ring-1 ring-inset ring-green-600/20">
                      Details
                    </span>
                  </Link>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${item.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${item.phone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PhoneIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : <NoFarmer />;
  }

  return (
    <div>
      <SearchFarmerFilter placeholder={'Search farmer...'} />
      <Farmers />
    </div>
  );
}
