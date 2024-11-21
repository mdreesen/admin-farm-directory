// 'use client'
import { ScaleLoader } from 'react-spinners';

export default function LoadingScale({value}: any) {
    // You can add any UI inside Loading, including a Skeleton.
    return <ScaleLoader speedMultiplier={1} height={value} loading={true} />
}