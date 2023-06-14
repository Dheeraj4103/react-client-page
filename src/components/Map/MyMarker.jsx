import styles from './MyMarker.module.css';
import './MyMap.css';
import { Marker, InfoWindow } from "@react-google-maps/api";
import { React, memo, useState } from 'react';
const data = require('./places.json');

function Card({ place }) {
    return (
        <div className={styles.info}>
            <h2>{place.name}</h2>
            <img src={place.img} alt={place.name} />
            <p>{ place.city }</p>
        </div>
    )
}


function MyMarker({ icons }) {
    
    const [selectedPlace, setSelectedPlace] = useState(null);

    return (
    <>
        {
            data.places.map(place => {
                return (
                    <>
                    <Marker
                        position={{ lat: place.coordinates[0], lng: place.coordinates[1] }}
                        title={place.name}
                        icon={{
                            url: icons[place.type].icon,
                            scaledSize: new window.google.maps.Size(30, 30)
                        }}
                            onMouseOver={() => setSelectedPlace(place)}
                            onClick={() => setSelectedPlace(place)}
                            // onMouseOut={() => setSelectedPlace(null)}
                    />
                    {
                            selectedPlace ? (
                                <InfoWindow
                                    
                                    position={{lat: selectedPlace.coordinates[0], lng: selectedPlace.coordinates[1]}}
                                    onCloseClick={() => setSelectedPlace(null)}
                                    
                                >
                                    <Card place={selectedPlace} />
                                </InfoWindow>
                        ) : null
                    }
                    </>
                )
            })
        }
    </>
    )
};

export default memo(MyMarker);

