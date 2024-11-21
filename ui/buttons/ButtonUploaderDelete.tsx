"use client";
import { useRouter } from "next/navigation";

import { imageRemove } from "@/actions/image";
import { useSession } from "next-auth/react";

export default function ButtonUploaderDelete() {
    const { data } = useSession();
    const userData = JSON.parse(JSON.stringify(data?.user));

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const r = await imageRemove({
                email: userData?.email,
                imageKey: userData.image.url,
                image: userData.image,
            });
            router.refresh
            router.push(`/profile/farmer/${userData._id}/info`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            type="button"
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
        >
            Remove Image
        </button>
    );
};