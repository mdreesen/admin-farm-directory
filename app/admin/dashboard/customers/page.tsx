import { Suspense } from 'react';
import CardsFarmers from '@/app/ui/cardsFarmers';
import { CardsSkeleton } from '@/app/ui/loading/skeletons';
import Search from '@/app/ui/search/Search';
import { searchFarmers } from '@/app/lib/search/SearchFarmers';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const searchForFarmers = await searchFarmers(query)

  return (
    <main>
      <div className='px-8'>
        <Search placeholder='Search for farmers...' />
      </div>

      <Suspense fallback={<CardsSkeleton />}>
        <CardsFarmers searchFarmer={searchForFarmers} />
      </Suspense>
    </main>
  );
}