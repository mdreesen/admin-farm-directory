import React from 'react';
import styles from '@/app/styles/FarmerCard.module.css';
import Link from 'next/link';
import Image from 'next/image'
import WrapperFarmerCard from '@/app/WrapperFarmerCard';
import { DeleteButton } from '../dashboard/deleteButton';
import { loggedInUserData } from '@/app/lib/cookieData';


export default async function FarmerCard(farmerData: any) {
    const data = farmerData?.farmerData;
    const parse = await JSON.parse(JSON.stringify(data));
    const auth = await loggedInUserData();

    const farmLogo = (
        // <Image
        //     className={`${styles['image']} w-10 h-10 rounded-full mr-4`}
        //     src={"/images/logos/logoThree.jpg"}
        //     width={500}
        //     height={500}
        //     priority={true}
        //     object-fit="cover"
        //     alt="Picture of the author"
        // />
        <h2 className="flex w-[14rem] font-light lg:w-full lg:h-32 text-yellow-500 justify-center items-center text-white p-4">{data?.farm_name}</h2>
    );

    const farmerInfo = (
        <div className="text-sm">
            <p className="text-gray-900 leading-none mb-1">{data?.first_name} {data?.last_name}</p>
            <p className="text-gray-600">{data?.address_state}</p>
        </div>
    );

    const farmerDetail = (
        <div className="mb-2 flex flex-col justify-center align-middle items-center">
            <div className="text-gray-600 font-bold text-l">Products</div>
            <p className="text-gray-700 text-base flex items-center gap-x-2 flex-col lg:flex-row md:flex-col">
                <span>{data?.product_one_title}</span>
                <span>{data?.product_two_title}</span>
                <span>{data?.product_three_title}</span>
            </p>
        </div>
    )


    return (
        <WrapperFarmerCard>
            <div className={`${styles['card']} flex flex-col max-w-sm lg:max-w-full justify-center`}>
                {farmLogo}
                <div className={`${styles['details']} rounded-lg border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b p-4 flex flex-col justify-between leading-normal lg:w-[32rem]`}>
                    {/* <div className="flex justify-center text-gray-900 font-bold text-xl mb-2">{data?.farm_name}</div> */}
                    {farmerDetail}
                    <div className='flex w-full justify-center mb-2'>
                        <Link href={`/farmer/details/${data?._id}`}><button className="rounded-md border p-2 hover:bg-yellow-500 text-gray-700">Details</button></Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            className="w-10 h-10 rounded-full mr-4"
                            src="/images/logos/logoTwo.webp"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                        {farmerInfo}
                    </div>
                </div>
                {auth?.isAdmin && <DeleteButton data={parse} />}
            </div>
        </WrapperFarmerCard>
    );
}
