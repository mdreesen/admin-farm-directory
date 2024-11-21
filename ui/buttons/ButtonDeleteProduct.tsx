'use client';
import { useRouter } from "next/navigation";
import { deleteFarmerProduct } from '@/actions/farmer';


export default function ButtonDeleteProduct(data: any) {
  const router = useRouter();
  console.log(data)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const r = await deleteFarmerProduct({ id: data.data });
      router.refresh
      router.push(`/dashboard/farmers/${data.data}/products`);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <button type="submit" onClick={handleSubmit} className="rounded-md bg-[#7A3A30] w-full px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
      Delete
    </button>
  )

}