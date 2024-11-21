'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteSavedFarmer } from "@/actions/user";
import LoadingScale from "@/ui/loaders/LoadingScale";
import { useSession } from "next-auth/react";

export default function ButtonDeleteSavedFarmer({ farmer }: any) {
    const router = useRouter();

    const { data } = useSession();
    const userData = data?.user;

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)

        const r = await deleteSavedFarmer({ farmer });
        router.refresh
        setLoading(false)
    };

    const button = loading ? <LoadingScale value={14} /> : (
        <div onClick={handleSubmit} className="flex flex-col items-center text-md font-medium text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <span>Saved</span>
        </div>
    );

    // User that is not a farmer should favorite farmers (this may change)
    return !userData?.isFarmer && button
};
