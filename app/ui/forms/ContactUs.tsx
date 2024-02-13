"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Importing Categories
import { FormValidation } from "@/app/ui/forms/FormValidation";

export const ContactUs = () => {

    const startData = {
        email: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(startData);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

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
        setIsLoading(true)

        const res = await fetch("/api/Contact", {
            method: "POST",
            cache: 'no-store',
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) throw new Error("Failed to send");
        router.refresh();
        router.push("/contact-us/thank-you");
    };


    const email = (
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={formData?.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="example@email.com" required />
            <FormValidation data={formData?.email} />
        </div>
    );

    const subject = (
        <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
            <input type="text" id="subject" name="subject" onChange={handleChange} value={formData?.subject} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
            <FormValidation data={formData?.subject} />
        </div>
    );

    const message = (
        <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea id="message" name="message" rows={6} onChange={handleChange} value={formData?.message} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." required />
            <FormValidation data={formData?.message} />
        </div>
    );

    return (
        <div className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Got good criticism? Just need to talk? Message us here!</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {email}
                    {subject}
                    {message}

                    {isLoading ? <span className="text-yellow-500 flex justify-center">Submitted, Now Loading...</span> : (
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                    )}
                </form>
            </div>
        </div>
    )
};