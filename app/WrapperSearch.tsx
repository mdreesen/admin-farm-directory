import { Suspense } from 'react';

import SearchFilter from '@/app/ui/search/SearchFilter';
import styles from '@/app/styles/Page.module.css';

// Importing Components
import { CardsSkeleton } from '@/app/ui/loading/skeletons';

export default async function RootLayout({
    children,

}: {
    children: React.ReactNode,
}) {

    return (
        <div className={styles['container']}>
            <SearchFilter />
            <Suspense fallback={<CardsSkeleton />}>
                {children}
            </Suspense>
        </div>
    );
};
