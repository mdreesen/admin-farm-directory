import FarmerCard from '@/app/ui/farmer/FarmerCard';
import { fetchFarmers } from '@/app/lib/farmerSearch/data';
import styles from '@/app/styles/Farmer.module.css';

export default async function CardsFarmers(searchFarmer) {
  const farmers = await fetchFarmers() ?? [];
  const searching = searchFarmer?.searchFarmer.length > 0 ? searchFarmer?.searchFarmer : farmers
  const farmerCards = searching?.map((item, index) => <FarmerCard key={index} farmerData={item} />)

  return (
    <div className={styles['container']}>
      {farmerCards}
    </div>
  );
}