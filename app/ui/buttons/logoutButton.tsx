'use client';
import React, { useEffect, useState } from "react";
import { PowerIcon } from '@heroicons/react/24/outline';

// import { signOut } from '@/auth';
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);


  const handleLogOut = async () => {
    setIsLoading(true)

    const loggingOut = await fetch('/api/Authentication/logout', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const logout = await loggingOut.json();

    if (!loggingOut.ok) throw new Error("Failed to logout user");

    if (logout?.success === true) {
      router.refresh();
      router.push("/");
    };

    if (logout?.success === true) return setIsLoading(false);

    return loggingOut;
  };



  return (
    <div>
      {isLoading ? <span className="text-yellow-500 flex justify-center">Logging Out...</span> : (
        <button onClick={handleLogOut} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      )}
    </div>
  );
};
