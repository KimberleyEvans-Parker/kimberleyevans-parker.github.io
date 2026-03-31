import 'leaflet/dist/leaflet.css'
import './map.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import { SelectMapTerrain } from './SelectMapTerrain'
import { mapTerrains } from '../../../data/maps'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { travelLocations } from '../../../data/travel'
import { useState } from 'react'

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})


export const TravelMap = () => {
  const ICON_MARKER = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png"
  const ICON_SHADOW = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

  const [mapTerrain, setMapTerrain] = useState(mapTerrains[0])

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: ICON_MARKER,
    shadowUrl: ICON_SHADOW
  })
  return (
    <>
      <MapContainer
        center={[10, 30]}
        zoom={2}
        minZoom={mapTerrain.minZoom}
        maxZoom={mapTerrain.maxZoom}
        className='map-container'
      >

        <TileLayer
          url={mapTerrain.url}
          attribution={mapTerrain.attribution}
        />

        {travelLocations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <strong>{location.country}{location.city && `, ${location.city}`}</strong><br />
              {location.description}
            </Popup>
          </Marker>
        ))}

      </MapContainer>

      <SelectMapTerrain
        mapTerrain={mapTerrain}
        setMapTerrain={setMapTerrain}
      />

    </>
  )
}