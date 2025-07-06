import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { travelLocations } from '../../data/travel';


export const Travel = () => {
  const ICON_MARKER = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png"
  const ICON_SHADOW = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";


  L.Icon.Default.mergeOptions({
    iconRetinaUrl: ICON_MARKER,
    shadowUrl: ICON_SHADOW
  });

  return (
    <div className="content-container experience-container">
      <div className="fade left">
        <h1>Travel</h1>
        <p>
          I love travelling and exploring new places.
          I have been fortunate enough to visit several countries across six different continents, each offering unique experiences and cultures.
        </p>
        <p>
          Some of my favorite destinations include Japan, with its rich history and modern technology;
          Egypt, for its ancient history;
          Vietnam, for its amazing culture;
          and my home country New Zealand, whith its breathtaking landscapes.
        </p>


        <MapContainer center={[0, 30]} zoom={2} style={{ height: '500px' }}>

          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; OpenStreetMap contributors'
          />

          {travelLocations.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>
                <strong>{location.name}</strong><br />
                {location.description}
              </Popup>
            </Marker>
          ))}


        </MapContainer>

      </div>
    </div>
  );
}
