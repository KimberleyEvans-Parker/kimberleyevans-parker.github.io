import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


export const Travel = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
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
          <Marker position={[51.505, -0.09]}>
            <Popup>
              London<br /> One of my travel highlights!
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </div>
  );
}
