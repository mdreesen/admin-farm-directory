
export async function filterFarmerProducts(farmer: any, productTitle: string) {
    const category = [productTitle];
    const filtering = farmer && farmer.filter((item: any) => {
        switch (true) {
            case item?.product_one_title?.includes(category):
                return item;
                break

            case item?.product_two_title?.includes(category):
                return item
                break

            case item?.product_three_title?.includes(category):
                return item;
                break
            default:
                return
        };
    });

    return filtering ?? [];
    return []
};



export async function filterFarmerByLocationProducts(farmer: any, productTitle: string) {
    const filtering = await filterFarmerProducts(farmer, productTitle);

    try {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
          }
        const filterByState = localStorage.getItem("state") ?? filtering;
        const isFilteringByState = filtering?.filter((item: { address_state: string | null; }) => item?.address_state === filterByState);
        return isFilteringByState ?? [];

    } catch(error) {
        return error
    }
};
