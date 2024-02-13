import React from 'react';
import FarmerDetails from '@/app/ui/farmer/FarmerDetails';
import styles from '@/app/styles/FarmerProfile.module.css';

import { fetchSingleFarmerByEmail } from '@/app/lib/farmerSearch/data';
import { loggedInUserData } from '@/app/lib/cookieData';

export default async function Page() {
  const auth = await loggedInUserData();
  const farmerUserData = await fetchSingleFarmerByEmail(auth?.email ?? '');

  return (
    <div className={styles['container']}>
      <FarmerDetails data={farmerUserData} />
    </div>
  );
}
