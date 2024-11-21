'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useRouter } from "next/navigation";

const MapSingle = ({ zoom, coordinates }: any) => {
  const { longitude, latitude } = coordinates;
  const router = useRouter();
  router.refresh

  // Use user's location
  const center = {
    lat: Number(latitude),
    lng: Number(longitude)
  };

  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
      {
        <GoogleMap
          mapContainerStyle={{ height: '85%', width: '100%' }}
          center={center}
          zoom={zoom}
          options={{
            streetViewControl: false,
          }}
        >
          <Marker position={center} />

        </GoogleMap>
      }
    </LoadScript>
  );
};

export default MapSingle;