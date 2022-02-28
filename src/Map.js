import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import RotatedMarker from './RotatedMarker.js';

const b = 20;
export default ({ tileLayerThemes, text }) => {
  const [vectors, setVectors] = useState([]);
  const [ukraine_geojson, setUkraine_geojson] = useState({});

  const getVectors = () =>
    fetch(
      `https://opensky-network.org/api/states/all?lamin=${
        50.450001 - b
      }&lomin=${30.523333 - b}&lamax=${50.450001 + b}&lomax=${30.523333 + b}`
    )
      .then(res => res.json())
      .then(res => setVectors(res.states));

  useEffect(() => {
    // get Ukraine BB

    // get latest vectors
    fetch(
      'https://raw.githubusercontent.com/EugeneBorshch/ukraine_geojson/master/Ukraine.json'
    )
      .then(res => res.json())
      .then(res => console.log(res));

    const vectorInterval = setInterval(() => {
      getVectors();
    }, 10000);
    getVectors();
    return () => clearInterval(vectorInterval);
  }, []);

  const externalVectorIcon = L.icon({
    iconUrl: require('./plane.png'),
    iconRetinaUrl: require('./plane.png'),
    iconSize: [25, 25],
    iconAnchor: [25, 25],
    popupAnchor: [10, 10],
  });
  let icon = L.icon({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
  return (
    <MapContainer center={[50.450001, 30.523333]} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={tileLayerThemes[text]}
      />
      {vectors.map(v => {
        return (
          <Marker
            key={v[0]}
            position={[v[6], v[5]]}
            icon={externalVectorIcon}
            rotationAngle={v[9]}
            iconAnchor={[-5, -5]}
          >
            <Popup>
              {v[0]} {v[1]} {v[2]}
            </Popup>
          </Marker>
        );
      })}
      <Marker position={[50.450001, 30.523333]} icon={icon}>
        <Popup>KYIV</Popup>
      </Marker>
      {ukraine_geojson && <GeoJSON attribution="qwe" data={ukraine_geojson} />}
    </MapContainer>
  );
};
