import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import RotatedMarker from './RotatedMarker.js';
import oligarchs from './oligarchs.json';
import geojson from './geojson.json';
import { Switch } from '@chakra-ui/react';
const b = 30;

const reverseIndex = {};
Object.keys(oligarchs).forEach(oligarch => {
  const oli = Object.keys(oligarchs[oligarch])[0];
  oligarchs[oligarch][oli].forEach(ol => {
    reverseIndex[ol.replace('-', '').trim()] = oli;
  });
});

export default ({ tileLayerThemes, text }) => {
  const [vectors, setVectors] = useState([]);
  const [ukraine_geojson, setUkraine_geojson] = useState(geojson);
  const [info, setInfo] = useState({
    all: true,
    oligarchs: true,
    ukraine: true,
    russia: true,
    cities: true,
  });

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
    const vectorInterval = setInterval(() => {
      getVectors();
    }, 20000);
    getVectors();
    return () => clearInterval(vectorInterval);
  }, []);

  const plane = L.icon({
    iconUrl: require('./UAplane.png'),
    iconRetinaUrl: require('./UAplane.png'),
    iconSize: [15, 15],
    iconAnchor: [15, 15],
    popupAnchor: [10, 10],
  });
  const ruplane = L.icon({
    iconUrl: require('./RUplane.png'),
    iconRetinaUrl: require('./RUplane.png'),
    iconSize: [25, 25],
    iconAnchor: [25, 25],
    popupAnchor: [10, 10],
  });
  const uaplane = L.icon({
    iconUrl: require('./plane.png'),
    iconRetinaUrl: require('./plane.png'),
    iconSize: [25, 25],
    iconAnchor: [25, 25],
    popupAnchor: [10, 10],
  });
  const oliplane = L.icon({
    iconUrl: require('./RUplane.png'),
    iconRetinaUrl: require('./RUplane.png'),
    iconSize: [50, 50],
    iconAnchor: [50, 50],
    popupAnchor: [20, 20],
  });
  let icon = L.icon({
    iconRetinaUrl: require('./point.png'),
    iconUrl: require('./point.png'),
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });
  return (
    <>
      <nav className="map-buttons">
        {' '}
        <span>all</span>{' '}
        <Switch value={info.all} colorScheme="light" size="lg" />{' '}
        <span>oligarchs</span>{' '}
        <Switch value={info.oligarchs} colorScheme="red" size="lg" />{' '}
        <span>UA</span>{' '}
        <Switch value={info.ukraine} colorScheme="yellow" size="lg" />{' '}
        <span>RU</span>{' '}
        <Switch value={info.russia} colorScheme="red" size="lg" />{' '}
        <span>cities</span>{' '}
        <Switch value={info.cities} colorScheme="yellow" size="lg" />
      </nav>
      <MapContainer center={[48.450001, 31.523333]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {vectors.map(v => {
          const oli = reverseIndex[v[1].trim()];
          return (
            <Marker
              key={v[0]}
              position={[v[6], v[5]]}
              icon={(() => {
                if (oli) {
                  return oliplane;
                } else {
                  switch (v[2]) {
                    case 'Russian Federation':
                      return ruplane;
                    case 'Ukraine':
                      return uaplane;
                    default:
                      return plane;
                  }
                }
              })()}
              rotationAngle={v[9]}
              iconAnchor={[-5, -5]}
            >
              <Popup>
                flight: {v[0]} {v[1]}
                <br />
                from: {v[2]}
                <br />
                {oli && <div>OWNED BY: {oli}</div>}
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
    </>
  );
};
