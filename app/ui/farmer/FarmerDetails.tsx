import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { fetchSingleFarmer } from '@/app/lib/farmerSearch/data';
import FarmerUpdate from '../buttons/farmerUpdate';

export default async function FarmerDetails(data: any) {
    const farmer = await fetchSingleFarmer(data?.data?.id);
    const farmerData = farmer;


    const farmerBasicInfo = (
        <div className="flex flex-col items-center">
            {/* <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" /> */}
            <h1 className="text-xl font-bold">{farmerData?.farm_name}</h1>
            <p className="text-gray-700">{farmerData?.first_name} {farmerData?.last_name}</p>
            <div className="mt-6 flex flex-col gap-4 justify-center">
                {farmerData?.email !== "" && <a href={`mailto:${farmerData?.email}`} className="bg-blue-500 text-center hover:bg-blue-600 text-white py-2 px-4 rounded">Email</a>}
                {farmerData?.phone !== "" && <a href={`tel:${farmerData?.phone}`} className="bg-blue-500 text-center hover:bg-blue-600 text-white py-2 px-4 rounded">Call</a>}
                {farmerData?.website !== "" && <a href={farmerData?.website} className="bg-blue-500 text-center hover:bg-blue-600 text-white py-2 px-4 rounded">Website</a>}
            </div>
        </div>
    );

    const farmerAddress = (
        <div className="flex flex-col">
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Address</span>
            <ul>
                <li className="mb-2">{farmerData?.address_road}</li>
                <li className="mb-2">{farmerData?.address_city}, {farmerData?.address_state}</li>
                <li className="mb-2">{farmerData?.address_zip}</li>
            </ul>
        </div>
    );

    const productOne = farmerData?.product_one_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{farmerData?.product_one_title}</span>
                </div>
                {farmerData?.product_one_title !== '' && farmerData?.product_one_available !== '' &&  <span className="text-gray-700">{farmerData?.product_one_available}</span>}
            </div>
            <p className="mt-2">{farmerData?.product_one_description}</p>
        </div>
    );

    const productTwo = farmerData?.product_two_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{farmerData?.product_two_title}</span>
                </div>
                {farmerData?.product_two_title !== '' && farmerData?.product_two_available !== '' &&  <span className="text-gray-700">{farmerData?.product_two_available}</span>}
            </div>
            <p className="mt-2">{farmerData?.product_two_description}</p>
        </div>
    );

    const productThree = farmerData?.product_three_show === 'true' && (
        <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2 w-full">
                <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">{farmerData?.product_three_title}</span>
                </div>
                {farmerData?.product_three_title !== '' && farmerData?.product_three_available !== '' &&  <span className="text-gray-700">{farmerData?.product_three_available}</span>}
            </div>
            <p className="mt-2">{farmerData?.product_three_description}</p>
        </div>
    );

    const socialLinks = (
        <div className="flex justify-center items-center gap-6 my-6">
            {farmerData?.facebook !== "" && (
                <a className="text-gray-700 hover:text-yellow-500" aria-label="Visit TrendyMinds Facebook" href={farmerData?.facebook} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                        <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                        </path>
                    </svg>
                </a>
            )}

            {farmerData?.instagram !== "" && (
                <a className="text-gray-700 hover:text-yellow-500" aria-label="Visit TrendyMinds Instagram" href={farmerData?.instagram} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                        </path>
                    </svg>
                </a>
            )}
        </div>
    );

    return (
        <div className={styles['container']}>
            <div className="rounded-lg">
                <FarmerUpdate data={farmerData?.id}/>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 relative z-20">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">

                                {farmerBasicInfo}

                                <hr className="my-6 border-t border-gray-300" />
                                {farmerAddress}
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-gray-700 font-bold text-xl font-bold mt-6 mb-4">Products</h2>
                                {productOne}
                                {productTwo}
                                {productThree}

                                {farmerData?.facebook !== "" && farmerData?.instagram !== "" && <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>}
                                {socialLinks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};