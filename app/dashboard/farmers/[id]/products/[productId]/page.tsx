import { fetchFarmerDetails, fetchFarmerProducts } from '@/actions/farmer';
import FarmerProductUpdateForm from "@/ui/forms/FarmerProductUpdateForm";
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string, productId: string } }) {
  const id = params.id;
  const productId = params.productId

  const farmerData = await fetchFarmerDetails(id);
  const parse = JSON.parse(JSON.stringify(farmerData));

  const product = parse.products.find((item: any) => item._id === productId);

  return (
    <div>
      <div className='flex w-full justify-around border-b border-gray-900/10 pb-12'>
        <Link className='text-[#7A3A30]' href={`/dashboard/farmers/${parse._id}/products`}>View Products</Link>
      </div>

      <FarmerProductUpdateForm data={{ ...parse, ...product }} product={product} />
    </div>
  )
}
