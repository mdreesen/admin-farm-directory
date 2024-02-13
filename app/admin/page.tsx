import React from 'react';
import Login from '@/app/ui/forms/authentication/Login';
import parentLinks from '@/utils/links/farmEquipmentLinks/parentLinks.json';
import styles from '@/app/styles/Home.module.css';


export default function Page() {

  return (
    <>
      <div className={styles.main}>
        {/* <AuthenticationForm/> */}
        <Login/>
      </div>
    </>
  );
}
