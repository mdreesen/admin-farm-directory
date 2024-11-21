import FarmerForm from '@/ui/forms/FarmerInfoForm';

import { fetchFarmerDetails } from '@/actions/farmer';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const farmerData = await fetchFarmerDetails(id);
  const parse = JSON.parse(JSON.stringify(farmerData))

  return (
    <div>
      <div className='flex w-full justify-around border-b border-gray-900/10 pb-12'>
      <Link className='text-[#7A3A30]' href={`/dashboard/farmers/${parse._id}/products`}>View Products</Link>

      </div>
      <FarmerForm farmerData={JSON.parse(JSON.stringify(farmerData))} />
    </div>
  )
}
