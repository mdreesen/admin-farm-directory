"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/actions/resetPassword";
import Link from "next/link";

export default function Page() {
    const router = useRouter();
    

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            const res = await resetPassword({
                email: formData.get("email"),
            });

            router.push("/authentication/reset-password/check-email");

        } catch(error) {
            console.log(error)
        }
    };

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Forgot Password
                    </h2>
                    <p className="mt-10 text-center font-bold leading-9 tracking-tight text-black">If you do not see the link in your email, try again.</p>
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
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#7A3A30] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#af8882] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Send
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        <Link href="/" className="font-semibold leading-6 text-[#7A3A30] hover:text-[#af8882]">
                            Sign into your account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};