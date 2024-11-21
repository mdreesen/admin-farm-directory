'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveFarmer } from "@/actions/user";
import LoadingScale from "@/ui/loaders/LoadingScale";
import { useSession } from "next-auth/react";

export default function ButtonSave({ farmer }: any) {
    const router = useRouter();

    const { data } = useSession();
    const userData = data?.user;

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const r = await saveFarmer({ farmer });
        router.refresh;
        setLoading(false)
    };

    const button = loading ? <LoadingScale value={14} /> : (
        <div onClick={handleSubmit} className="flex flex-col items-center text-md font-medium text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        <span>Save</span>
    </div>
    );

    // User that is not a farmer should favorite farmers (this may change)
    return !userData?.isFarmer && button
};
