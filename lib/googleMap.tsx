'use client';
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import { useGeolocation } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

const Map = ({ zoom, allCoordinates }: any) => {
  const { latitude, longitude, loading} = useGeolocation();
  const router = useRouter();
  router.refresh

  // Use user's location
  const center = {
    lat: Number(latitude),
    lng: Number(longitude)
  };

  const pinIcon = {
    url: '/images/logos/barn.webp',
    scaledSize: {width: 40, height: 25},
  }

  const farmersMarker = allCoordinates?.map((location: any, index: number) => <MarkerF key={`${location}-${index}`} position={location} icon={pinIcon as any}></MarkerF>) ?? [];

  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
      {
        !loading && (
          <GoogleMap 
          mapContainerStyle={{ height: '85%', width: '100%' }} 
          center={center} 
          zoom={zoom}
          options={{
            streetViewControl: false,
          }}
        >
          <Marker position={center} />
          {farmersMarker}
        </GoogleMap>
        )
      }
    </LoadScript>
  );
};

export default Map;