"use client";
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSession } from "next-auth/react"


export default function Page() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data, status } = useSession();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    const loggingIn = async () => {
      const { user } = await getSession() ?? {};

      if (user?.isAdmin) return router.push(`/dashboard`);
      else {
        return router.push(`/permissions`);
      }
    }

    if (res?.error) {
      setError(res.error as string);
    }

    if (res?.ok) {
      if (data?.user?.isAdmin) {
        return await loggingIn()
      };
    }
    else {
      return router.push("/permissions");
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign in to your admin account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#7A3A30] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#af8882] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>

            {error && <div className="">{error}</div>}
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            <Link href="/authentication/reset-password" className="font-semibold leading-6 text-[#7A3A30] hover:text-[#af8882]">
              Need to reset your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
