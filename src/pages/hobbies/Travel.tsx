import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

          {/* Tokyo, Japan */}
          <Marker position={[35.6762, 139.6503]}>
            <Popup>
              Tokyo, Japan<br /> Sushi, neon lights, and shrines.
            </Popup>
          </Marker>

          {/* Auckland, New Zealand */}
          <Marker position={[-36.8485, 174.7633]}>
            <Popup>
              Auckland, NZ<br /> Volcanoes, beaches, and Hobbiton.
            </Popup>
          </Marker>

          {/* Philippines */}
          <Marker position={[13.41, 122.56]}>
            <Popup>
              Philippines<br /> Islands, beaches, and culture.
            </Popup>
          </Marker>

          {/* Vietnam */}
          <Marker position={[14.06, 108.28]}>
            <Popup>
              Vietnam<br /> Pho, history, and beautiful landscapes.
            </Popup>
          </Marker>

          {/* Cambodia */}
          <Marker position={[12.57, 104.99]}>
            <Popup>
              Cambodia<br /> Temples of Angkor and rich history.
            </Popup>
          </Marker>

          {/* Vanuatu */}
          <Marker position={[-15.38, 166.96]}>
            <Popup>
              Vanuatu<br /> Volcanoes, reefs, and tropical paradise.
            </Popup>
          </Marker>

          {/* Singapore */}
          <Marker position={[1.35, 103.82]}>
            <Popup>
              Singapore<br /> Futuristic city meets cultural heritage.
            </Popup>
          </Marker>

          {/* Malaysia */}
          <Marker position={[4.21, 101.97]}>
            <Popup>
              Malaysia<br /> Rainforests, food, and diverse cities.
            </Popup>
          </Marker>

          {/* Sydney, Australia */}
          <Marker position={[-33.87, 151.21]}>
            <Popup>
              Sydney, Australia<br /> Opera House, beaches, and sunshine.
            </Popup>
          </Marker>
          {/* Egypt */}
          <Marker position={[26.82, 30.80]}>
            <Popup>
              Egypt<br /> Pyramids, Nile River, and ancient wonders.
            </Popup>
          </Marker>

          {/* Jordan */}
          <Marker position={[31.24, 36.51]}>
            <Popup>
              Jordan<br /> Petra, deserts, and warm hospitality.
            </Popup>
          </Marker>

          {/* Dubai, UAE */}
          <Marker position={[25.20, 55.27]}>
            <Popup>
              Dubai, UAE<br /> Skyscrapers, luxury, and desert adventures.
            </Popup>
          </Marker>

          {/* Brussels, Belgium */}
          <Marker position={[50.85, 4.35]}>
            <Popup>
              Brussels, Belgium<br /> Waffles, EU HQ, and medieval charm.
            </Popup>
          </Marker>
          {/* Canada */}
          <Marker position={[56.13, -106.35]}>
            <Popup>
              Canada<br /> Mountains, lakes, and maple syrup.
            </Popup>
          </Marker>

          {/* USA */}
          <Marker position={[37.09, -95.71]}>
            <Popup>
              USA<br /> National parks, cities, and culture.
            </Popup>
          </Marker>

          {/* Mexico */}
          <Marker position={[23.63, -102.55]}>
            <Popup>
              Mexico<br /> Tacos, ruins, and vibrant traditions.
            </Popup>
          </Marker>

          {/* Guatemala */}
          <Marker position={[15.78, -90.23]}>
            <Popup>
              Guatemala<br /> Volcanoes, Mayan ruins, and lakes.
            </Popup>
          </Marker>


          {/* Belize */}
          <Marker position={[17.19, -88.50]}>
            <Popup>
              Belize<br /> Barrier reef, jungle, and blue waters.
            </Popup>
          </Marker>

          {/* Peru */}
          <Marker position={[-9.19, -75.02]}>
            <Popup>
              Peru<br /> Machu Picchu, Andes, and rich history.
            </Popup>
          </Marker>
          {/* Edinburgh, Scotland */}
          <Marker position={[55.95, -3.19]}>
            <Popup>
              Edinburgh, Scotland<br /> Castles, cobblestones, and festivals.
            </Popup>
          </Marker>

          {/* Gold Coast, Australia */}
          <Marker position={[-28.02, 153.40]}>
            <Popup>
              Gold Coast, Australia<br /> Surf, sand, and skyline.
            </Popup>
          </Marker>

          {/* Queenstown, New Zealand */}
          <Marker position={[-45.03, 168.66]}>
            <Popup>
              Queenstown, NZ<br /> Adventure capital and stunning scenery.
            </Popup>
          </Marker>

          {/* Osaka, Japan */}
          <Marker position={[34.69, 135.50]}>
            <Popup>
              Osaka, Japan<br /> Street food, culture, and nightlife.
            </Popup>
          </Marker>
          {/* Fiji */}
          <Marker position={[-17.71, 178.07]}>
            <Popup>
              Fiji<br /> Coral reefs, friendly villages, and island paradise.
            </Popup>
          </Marker>


        </MapContainer>

      </div>
    </div>
  );
}
