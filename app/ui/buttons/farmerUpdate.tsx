import React from 'react';
import styles from '@/app/styles/FarmerDetails.module.css';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function FarmerUpdate(data: any) {
    const auth = await loggedInUserData();

    const showUpdateButton = auth?.isFarmer || auth?.isAdmin

    return showUpdateButton && <div className={styles['update']}><a href={`/profile-farmer/${data?.data}/update`} className={styles['update-link']}>Update Information</a></div>
};