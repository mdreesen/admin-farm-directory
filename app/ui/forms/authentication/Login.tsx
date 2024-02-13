"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import WrapperAuthentication from '@/app/WrapperAuthentication';
import ToastApprovedLogin from "@/app/ui/toast/ToastApprovedLogin";


export default function Login() {
    const router = useRouter();

    const startData = {
        email: "",
        password: "",
        isFarmer: false,
        isAdmin: false
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setError] = useState<string>("");
    const [enableToast, setEnableToast] = useState<boolean>(false);

    const handleChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        const loggingIn = await fetch("/api/Authentication/login", {
            method: "POST",
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ formData }),
        });

        const user = await loggingIn.json();

        if (!loggingIn.ok) {
            setIsLoading(false);
            setError("Try again...finding the developer who made this...");
            throw new Error("Failed to login user");
        };

        setEnableToast(true);
        router.refresh();
        router.push('/');


        if (user?.isAdmin === true) {
            return router.push("/admin/dashboard");
        }

        setTimeout(() => {
            setEnableToast(false);
        }, 6000);

        setIsLoading(false);

        router.refresh();
    };

    const content = isLoading ? (
        <WrapperAuthentication />
    ) : (
        <div className="w-full bg-white rounded-lg shadow">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign into your account
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" name="email" id="email" value={formData?.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" value={formData?.password} onChange={handleChange} placeholder="Enter Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        {isLoading ? <span className="text-yellow-500 flex justify-center">Signing in...</span> : (
                            <button type="submit" className="w-full font-medium text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        )}

                        {isError && <span style={{ color: 'red' }}>{isError}</span>}
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <Link href="/authentication/signup" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
    )

    return (
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            {content}
            {enableToast && <ToastApprovedLogin/>}
        </div>
    )

}