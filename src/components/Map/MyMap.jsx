import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from 'react';
import MyMarker from "./MyMarker";


// getting data from database
const icons = {
  Food_Processing: {
    name: "Food Processing",
    icon: "https://cdn-icons-png.flaticon.com/512/6542/6542893.png"
  },
  Brewery: {
    name: "Brewery",
    icon: "https://cdn-icons-png.flaticon.com/512/184/184482.png"
  },
  Beverages: {
    name: "Beverages",
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/food-and-beverage-2520087-2113147.png"
  },
  Dairy: {
    name: "Dairy",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
  }
}

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });


  const center = { lat: 21.449759, lng: 76.108221 };

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={center}
        zoom={5}
        
      >
        <MyMarker icons={icons}></MyMarker>
        <div className="legend">legend</div>
      </GoogleMap>
    </div>
  );
}


export default MyMap;