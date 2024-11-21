'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { farmerVerification } from '@/actions/user';
import LoadingScale from "@/ui/loaders/LoadingScale";


export default function ButtonVerification(data: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    try {
      const r = await farmerVerification({ verified_farmer_token: data.token });
      router.refresh
      router.push(`/authentication/verification/${data.token}/verified`);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };

  return loading ? <LoadingScale value={20} /> : (
    <button type="submit" onClick={handleSubmit} className="rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
      Verify
    </button>
  )

}