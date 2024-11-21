import CardFarmers from '@/ui/cards/CardFarmers';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <main className="flex min-h-screen flex-col">
        <CardFarmers searchParams={searchParams} />
    </main>
  );
}