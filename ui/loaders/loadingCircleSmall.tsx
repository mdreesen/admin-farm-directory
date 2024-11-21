'use client'
import { TailSpin } from 'react-loader-spinner';
import styles from '@/app/styles/LoadingCircle.module.css'

export default function LoadingCircleSmall() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={styles['container-small']}>
            <TailSpin
                visible={true}
                height="50"
                width="50"
                color="#eab308"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}