// Fetching skeleton
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/ui/loaders/skeletons';
import ChartFarmers from '@/ui/charts/ChartFarmers';
import ChartUsers from '@/ui/charts/ChartUsers';


export default async function Page() {
  return (
    <main>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

        <Suspense fallback={<RevenueChartSkeleton />}>
          <ChartFarmers />
        </Suspense>

        <Suspense fallback={<RevenueChartSkeleton />}>
          <ChartUsers />
        </Suspense>

      </div>
    </main>
  );
}