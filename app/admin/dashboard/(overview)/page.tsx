import CardsFarmer from '@/app/ui/dashboard/cardsFarmer';
import CardsUser from '@/app/ui/dashboard/cardsUser';

import ChartFarmers from '@/app/ui/dashboard/chart-farmers';
import ChartUsers from '@/app/ui/dashboard/chart-users';
import LatestFarmers from '@/app/ui/dashboard/latest-farmers';

// Fetching skeleton
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '@/app/ui/loading/skeletons';


export default async function Page() {


  return (
    <main>
      <h1 className={`text-white font-bold mb-4 text-2xl md:text-4xl flex justify-center`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

        <Suspense fallback={<CardSkeleton />}>
          <CardsFarmer />
        </Suspense>

        <Suspense fallback={<CardSkeleton />}>
          <CardsUser />
        </Suspense>

      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

        <Suspense fallback={<RevenueChartSkeleton />}>
          <ChartFarmers />
        </Suspense>

        <Suspense fallback={<RevenueChartSkeleton />}>
          <ChartUsers />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestFarmers /> 
        </Suspense>

      </div>
    </main>
  );
}