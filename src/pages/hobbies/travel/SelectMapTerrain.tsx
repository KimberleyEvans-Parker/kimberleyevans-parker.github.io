import { MapTerrain, mapTerrains } from "../../../data/maps";

interface SelectMapTerrainProps {
    mapTerrain: MapTerrain;
    setMapTerrain: (mapTerrain: MapTerrain) => void;
}

export const SelectMapTerrain = ({ mapTerrain, setMapTerrain }: SelectMapTerrainProps) => {
    return (
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
    )
}