import React from 'react';
import styles from '@/app/styles/NoFarmer.module.css';

export function NoFarmer() {
    return (
        <div className={styles['container-message']}>
            <span className={styles['no-data']}>Apologies, No Farmer For This Category.</span>
            <span className={styles['no-data']}> If you are a farmer, you could be the first for this category!</span>
            <span className={styles['no-data']}> If you would want to sell your products, contact us and we will help you through the process.</span>
        </div>
    )
};