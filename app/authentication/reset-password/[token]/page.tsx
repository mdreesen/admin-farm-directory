"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { updateUserPassword } from "@/actions/user";
import Link from "next/link";

export default function Page({ params }: { params: { token: string } }) {
    const [error, setError] = useState("");
    const router = useRouter();

    const id = params.token;

    const handleSubmit = async (formData: FormData) => {
        try {
            const r = await updateUserPassword({
                token: id,
                password: formData.get("password"),
                confirm_password: formData.get("confirm_password"),
            });

            router.refresh
            router.push(`/authentication/login/`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Create a new password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" action={handleSubmit} className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                                    New Password
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

                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-black">
                                    Confirm New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
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
                                Submit
                            </button>

                            {error && <div className="">{error}</div>}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        <Link href="/authentication/login" className="font-semibold leading-6 text-[#7A3A30] hover:text-[#af8882]">
                            Already have an account?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};