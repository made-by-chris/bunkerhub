import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import RotatedMarker from './RotatedMarker.js';
import geojson from './geojson.json';
const b = 30;
export default ({ tileLayerThemes, text }) => {
  const [vectors, setVectors] = useState([]);
  const [ukraine_geojson, setUkraine_geojson] = useState(geojson);

  const getVectors = () => {
    fetch(
      `https://opensky-network.org/api/states/all?lamin=${
        50.450001 - b
      }&lomin=${30.523333 - b}&lamax=${50.450001 + b}&lomax=${30.523333 + b}`
    )
      .then(res => res.json())
      .then(res => setVectors(res.states));
  };

  useEffect(() => {
    // get Ukraine BB

    // get latest vectors
    // fetch(
    //   'https://raw.githubusercontent.com/EugeneBorshch/ukraine_geojson/master/Ukraine.json'
    // )
    //   .then(res => res.json())
    //   .then(res => setUkraine_geojson(res));

    const vectorInterval = setInterval(() => {
      getVectors();
    }, 20000);
    getVectors();
    return () => clearInterval(vectorInterval);
  }, []);

  const plane = L.icon({
    iconUrl: require('./plane.png'),
    iconRetinaUrl: require('./plane.png'),
    iconSize: [25, 25],
    iconAnchor: [25, 25],
    popupAnchor: [10, 10],
  });
  const ruplane = L.icon({
    iconUrl: require('./RUplane.png'),
    iconRetinaUrl: require('./RUplane.png'),
    iconSize: [25, 25],
    iconAnchor: [25, 25],
    popupAnchor: [10, 10],
  });
  let icon = L.icon({
    iconRetinaUrl: require('./point.png'),
    iconUrl: require('./point.png'),
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });
  return (
    <MapContainer center={[48.450001, 31.523333]} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {vectors.map(v => {
        return (
          <Marker
            key={v[0]}
            position={[v[6], v[5]]}
            icon={v[2] === 'Russian Federation' ? ruplane : plane}
            rotationAngle={v[9]}
            iconAnchor={[-5, -5]}
          >
            <Popup>
              flight {v[0]} {v[1]} from {v[2]}
            </Popup>
          </Marker>
        );
      })}
      <Marker position={[50.450001, 30.523333]} icon={icon}>
        <Popup>KYIV</Popup>
      </Marker>
      <Marker position={[55.7558, 37.6173]} icon={icon}>
        <Popup>MOSCOW</Popup>
      </Marker>
      {ukraine_geojson.features && (
        <GeoJSON attribution="qwe" data={ukraine_geojson} />
      )}
    </MapContainer>
  );
};
