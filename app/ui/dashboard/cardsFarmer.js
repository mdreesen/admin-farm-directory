import {
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import { fetchFarmers } from '@/app/lib/farmerSearch/data';

export default async function CardsFarmer() {

  // This is a freakin Array - typescript you suck
  // Not giving it extra types because I shouldnt have to you MOTHA@#%%$#%^%$%^&^%$#$%^%$#$%^&
  const farmers = await fetchFarmers();
  const numberOfFarmers = Number(farmers.length);

  const Card = () => {
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <UserGroupIcon className="h-5 w-5 text-gray-700" />
          <h3 className="ml-2 text-sm font-medium">Total Farmers</h3>
        </div>
        <p
          className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {numberOfFarmers}
        </p>
      </div>
    );
  }

  return (
    <>
      <Card />
    </>
  );
};
