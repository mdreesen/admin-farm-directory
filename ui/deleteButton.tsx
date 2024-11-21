'use client'

import {
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export async function DeleteButton(data: any) {
  const router = useRouter()
  const farmerId = data?.data?._id;

  const deleteFarmer = async () => {
    try {
      const res = await fetch(`/api/Farmers/${farmerId}`, {
        method: 'DELETE',
        cache: 'no-store',
      })
      if (res.ok) {
        router.refresh();
      }
      return res
    } catch (error) {
      console.log(error)
      return
    }
  }

  return (
    <form onClick={deleteFarmer} className='flex justify-center'>
      <button className="rounded-md border p-2 my-2 hover:bg-red-600">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-6" />
      </button>
    </form>
  )
}