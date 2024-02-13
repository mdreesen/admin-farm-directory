import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { UpdateFarmerForm } from '@/app/ui/forms/UpdateFarmerForm';
import { Suspense } from 'react';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
    const auth = await loggedInUserData();
    const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

    // Need to parse Data from server and pass to client
    const parse = await JSON.parse(JSON.stringify(farmerUserData));


    return (
        <div className={styles['container']}>
            <Suspense fallback={<div>...loading</div>}>
                <UpdateFarmerForm data={parse} />
            </Suspense>
        </div>
    )
};