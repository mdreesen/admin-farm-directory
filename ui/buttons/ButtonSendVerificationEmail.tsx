'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { verification } from '@/actions/verification';
import LoadingScale from "@/ui/loaders/LoadingScale";
import { useSession } from "next-auth/react";

export default function ButtonSendVerificationEmail() {
  const router = useRouter();
  const { data } = useSession();
  const userData = data?.user;
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await verification({
        email: userData?.email,
      });
      router.refresh
      router.push(`/authentication/verification`);
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