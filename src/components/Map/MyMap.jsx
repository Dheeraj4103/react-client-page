import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from 'react';
const data = require('./places.json');


// getting data from database
console.log(data);


function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCV15Z87DTxeM8eB9rzfBBVTt5THEjWiIQ"
  });

  const center = useMemo(() => ({ lat: 21.449759, lng: 76.108221 }), []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={5}
            
          >
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
          </GoogleMap>
     )}
    </div>
  );
}

export default MyMap;
