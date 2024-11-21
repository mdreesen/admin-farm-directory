import { generateYAxis } from '@/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { currentYear } from '@/lib/date';

// Fetching farmers data
import { fetchUsers } from '@/actions/user';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function ChartFarmers() {
  const users = await fetchUsers();

  const { januaryUsers, februaryUsers, marchUsers, aprilUsers, mayUsers, juneUsers, julyUsers, augustUsers, septemberUsers, octoberUsers, novemberUsers, decemberUsers } = generateYAxis(users, currentYear());
  if (!users) {
    return <p className="mt-4 text-gray-400">No User Data Available.</p>;
  }


  const january = (
    <div className="flex flex-col items-center gap-2">
      {januaryUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(januaryUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Jan
      </p>
    </div>
  );

  const february = (
    <div className="flex flex-col items-center gap-2">
      {februaryUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(februaryUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Feb
      </p>
    </div>
  );

  const march = (
    <div className="flex flex-col items-center gap-2">
      {marchUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(marchUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Mar
      </p>
    </div>
  );

  const april = (
    <div className="flex flex-col items-center gap-2">
      {aprilUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(aprilUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Apr
      </p>
    </div>
  );

  const may = (
    <div className="flex flex-col items-center gap-2">
      {mayUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(mayUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        May
      </p>
    </div>
  );

  const june = (
    <div className="flex flex-col items-center gap-2">
      {juneUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(juneUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Jun
      </p>
    </div>
  );

  const july = (
    <div className="flex flex-col items-center gap-2">
      {julyUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(julyUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Jul
      </p>
    </div>
  );

  const august = (
    <div className="flex flex-col items-center gap-2">
      {augustUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(augustUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Aug
      </p>
    </div>
  );

  const september = (
    <div className="flex flex-col items-center gap-2">
      {septemberUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(septemberUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Sep
      </p>
    </div>
  );

  const october = (
    <div className="flex flex-col items-center gap-2">
      {octoberUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(octoberUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Oct
      </p>
    </div>
  );

  const november = (
    <div className="flex flex-col items-center gap-2">
      {novemberUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(novemberUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Nov
      </p>
    </div>
  );

  const december = (
    <div className="flex flex-col items-center gap-2">
      {decemberUsers}
      <div
        className="w-full rounded-md bg-blue-300"
        style={{
          height: `${(decemberUsers)}px`,
        }}
      ></div>
      <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
        Dec
      </p>
    </div>
  );

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        User Sign Ups Per Month
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          {/* Months are below */}

          {january}
          {february}
          {march}
          {april}
          {may}
          {june}
          {july}
          {august}
          {september}
          {october}
          {november}
          {december}

        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
