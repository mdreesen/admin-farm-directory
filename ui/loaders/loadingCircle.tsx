'use client'
import { TailSpin } from 'react-loader-spinner';
import styles from '@/app/styles/LoadingCircle.module.css'

export default function LoadingCircle() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={styles['container']}>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="ghostwhite"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}