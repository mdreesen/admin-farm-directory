// 'use client'
import { filterFarmerProducts } from '../filterFarmers';

export async function filterFarmerByLocationProducts(farmer: any, productTitle: string) {
    const filtering = await filterFarmerProducts(farmer, productTitle);

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const filterByState = localStorage.getItem("state") ?? filtering;
        const isFilteringByState = filtering?.filter((item: { address_state: string | null; }) => item?.address_state === filterByState);
        return isFilteringByState ?? [];
      }
    // const filterByState = localStorage.getItem("state") ?? filtering;
    // const isFilteringByState = filtering?.filter((item: { address_state: string | null; }) => item?.address_state === filterByState);
    // return isFilteringByState ?? [];
    return []
};