"use client";
import { signOut, useSession } from "next-auth/react";
import LoadingScale from '@/ui/loaders/LoadingScale';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ButtonAuth() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });

          }}
        >
          Sign Out
        </button>
      )
    } else if (status === "loading") {
      return (
        <LoadingScale value={20}/>
      )
    } else {
      return (
        <Link
          href="/authentication/login"
          className="rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 hover:text-white"
        >
          Sign In
        </Link>
      )
    }
  }
  return showSession();
}