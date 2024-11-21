"use client";
import { useRouter } from "next/navigation";
import { updateUserProfileImg } from '@/actions/user';

import { UploadButton } from "@/lib/uploadthing";

export default function ButtonUploader() {
    const router = useRouter();

    return (
        <div className="rounded-md bg-gray-900 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    updateUserProfileImg(res);
                    alert("Upload Completed");
                    router.refresh
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </div>
    );
};