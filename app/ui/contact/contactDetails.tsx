import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { fetchSingleContact } from '@/app/lib/farmerSearch/data';

export default async function contactDetails(data: any) {
    const contact = await fetchSingleContact(data?.data?.id);
    const contactData = contact;

    const details = (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">Email: {contactData?.email}</span>
                </div>
                <span className="text-gray-700">Subject: {contactData?.subject}</span>
            </div>
            <p className="mt-2">{contactData?.message}</p>
        </div>
    );

    return (
        <div className={styles['container']}>
            <div className="rounded-lg">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Contact Details</h2>
                                {details}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};