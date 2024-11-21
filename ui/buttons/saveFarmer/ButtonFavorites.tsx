import { isSavedFarmer } from "@/actions/user";
import ButtonSave from "@/ui/buttons/saveFarmer/ButtonSave";
import ButtonDeleteSavedFarmer from '@/ui/buttons/saveFarmer/ButtonDeleteSavedFarmer';

export default async function ButtonFavorites(farmer: any) {
    const isSaved = await isSavedFarmer(farmer) ?? [];

    return (
        <div className="flex flex-col items-center text-md font-medium text-gray-900">
            {isSaved === 'saved' && <ButtonDeleteSavedFarmer farmer={farmer.farmer} saved={isSaved} />}
            {isSaved === 'not_saved' && <ButtonSave farmer={farmer.farmer} saved={isSaved} />}
        </div>
    );
};
