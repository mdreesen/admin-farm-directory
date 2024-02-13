import { filterFarmerProducts } from '@/app/lib/filterFarmers';
import { searchFarmers } from '@/app/lib/search/SearchFarmers';
import { NoFarmer } from '@/app/ui/farmer/NoFarmer';
import CardsFarmers from '../cardsFarmers';

export default async function CategoryPage({
    categoryName,
    query
}: {
    categoryName: string,
    query?: string
}) {

    const searchForFarmers = await searchFarmers(query) ?? [];

    const farmerCategory = await filterFarmerProducts(searchForFarmers, categoryName) ?? [];

    if (farmerCategory?.length === 0) return <NoFarmer />

    return (
        <>
            <CardsFarmers searchFarmer={farmerCategory} />
        </>
    )
}

