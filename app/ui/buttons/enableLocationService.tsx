import { useGeolocation } from "@uidotdev/usehooks";
import { radarReverseCoordinates } from "@/app/lib/locationServices/radarApi";
import LoadingCircleSmall from "../loading/loadingCircleSmall";
import { Location } from "@/app/lib/locationServices/Location";

export default function EnableLocationService() {
    const locationState = useGeolocation();
    const loading = locationState?.loading;
    const locationDisabled = locationState?.error?.message ?? 'Using Current Location';

    const handleLocationService = async () => {
        const latitude = locationState?.latitude?.toString() ?? '';
        const longitude = locationState?.longitude?.toString() ?? '';
        const radarServices = await radarReverseCoordinates(latitude, longitude)
    
        if (!loading) {
            const address = radarServices?.addresses?.find((item: object) => item);

            const city = address?.city;
            const postalCode = address?.postalCode;
            const state = address?.state;

            Location(city, postalCode, state);
            return radarServices
        };
    };

    if (loading) return <LoadingCircleSmall/>
    handleLocationService()

    return (
        <>
        {!locationDisabled && <button className="bg-blue-500 text-center hover:bg-blue-600 text-white p-2 rounded" onClick={() => handleLocationService}>Enable Location Service</button>}
        <span>{locationDisabled}</span>
        </>
    )
};