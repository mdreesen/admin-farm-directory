"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function AuthenticationForm() {
    const router = useRouter();

    const startData = {
        email: "",
        password: "",
        validate_password: "",
        isFarmer: false,
        isAdmin: false,
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setError] = useState<string>("");

    const handleChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        const findingExistingUser = await fetch("/api/Authentication/existing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ formData })
        });

        const existingUser = await findingExistingUser.json();

        if (existingUser?.user) {
            setIsLoading(false);
            setError("User already exists");
            throw new Error("User already exists");
        };

        if (formData?.validate_password !== formData?.password) {
            setIsLoading(false);
            setError("Thought you knew...passwords need to match");
            throw new Error("Passwords need to match");
        };

        const signUpUser = await fetch("/api/Authentication/signup", {
            method: "POST",
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ formData }),
        });

        signUpUser;

        router.refresh();
        router.push("/api/auth/signin");
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign up to create a new account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" value={formData?.email.trim().toLowerCase()} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" value={formData?.password.trim()} onChange={handleChange} placeholder="Enter Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Validate password</label>
                                <input type="password" name="validate_password" id="validate_password" value={formData?.validate_password.trim()} onChange={handleChange} placeholder="You know what to do" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>

                            {isLoading ? <span className="text-yellow-500 flex justify-center">Signing in...</span> : (
                                <button type="submit" className="w-full font-medium text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            )}

                            {isError && <span style={{ color: 'red' }}>{isError}</span>}
                            <p className="text-sm font-light text-gray-500">
                                Have an account? <Link href="/authentication/login" className="font-medium text-primary-600 hover:underline">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};