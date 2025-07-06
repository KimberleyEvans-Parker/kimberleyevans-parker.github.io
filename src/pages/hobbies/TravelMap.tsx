import { useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { travelLocations } from '../../data/travel';
import { mapTerrains } from '../../data/maps';
import './map.css';


export const TravelMap = () => {
  const ICON_MARKER = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png"
  const ICON_SHADOW = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

  const [mapTerrain, setMapTerrain] = useState(mapTerrains[0]);

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: ICON_MARKER,
    shadowUrl: ICON_SHADOW
  });
    return (
        <>
        <MapContainer
          center={[0, 30]} 
          zoom={2} 
          minZoom={mapTerrain.minZoom} 
          maxZoom={mapTerrain.maxZoom} 
          style={{ height: '500px' }}
        >

          <TileLayer
            url={mapTerrain.url}
            attribution={mapTerrain.attribution}
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

        <div className="map-terrain-container">
          <label htmlFor="mapTerrain">Select Map Terrain:</label>
          <select
            id="mapTerrain"
            value={mapTerrain.name}
            className='map-terrain-selector'
            onChange={(e) => {
              const selectedTerrain = mapTerrains.find(t => t.name === e.target.value);
              if (selectedTerrain) {
                setMapTerrain(selectedTerrain);
              }
            }}
          >
            {mapTerrains.map((terrain, index) => (
              <option key={index} value={terrain.name}>
                {terrain.name}
              </option>
            ))}
          </select>
        </div>
        </>
    )
}