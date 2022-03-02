import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import RotatedMarker from './RotatedMarker.js';

import { useEffect, useState } from 'react';
import oligarchs from './oligarchs.json';
import geojson from './geojson.json';
const b = 40;
console.log(
  'hi there, you can find all oligarch plane info here: https://gist.github.com/basiclaser/ddd10e0273a348da05089a6c286a4ae4'
);
console.log(
  'real time plane locations: https://openskynetwork.github.io/opensky-api/rest.html'
);
console.log('all this project code: https://github.com/basiclaser/bunkerhub');
const reverseIndex = {};
Object.keys(oligarchs).forEach(oligarch => {
  const oli = Object.keys(oligarchs[oligarch])[0];
  oligarchs[oligarch][oli].forEach(ol => {
    reverseIndex[ol.replace('-', '').trim()] = oli;
  });
});

const Switch = ({ info, field, setInfo }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        name={field}
        checked={info[field] ? 'checked' : ''}
        onChange={() => setInfo({ ...info, [field]: !info[field] })}
      />
    </label>
  );
};
export default () => {
  const [vectors, setVectors] = useState([]);
  const [ukraine_geojson, setUkraine_geojson] = useState(geojson);
  const [info, setInfo] = useState({
    all: false,
    oligarchs: true,
    UA: true,
    RU: true,
    US: true,
    GB: true,
    FR: true,
    DE: true,
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
        <span>oligarchs</span>
        <Switch info={info} field={'oligarchs'} setInfo={setInfo} />
        <span>UA</span>
        <Switch info={info} field={'UA'} setInfo={setInfo} />
        <span>RU</span>
        <Switch info={info} field={'RU'} setInfo={setInfo} />
        <span>US</span>
        <Switch info={info} field={'US'} setInfo={setInfo} />
        <span>GB</span>
        <Switch info={info} field={'GB'} setInfo={setInfo} />
        <span>FR</span>
        <Switch info={info} field={'FR'} setInfo={setInfo} />
        <span>DE</span>
        <Switch info={info} field={'DE'} setInfo={setInfo} />
        <span>all</span>
        <Switch info={info} field={'all'} setInfo={setInfo} />
      </nav>
      <MapContainer center={[48.450001, 31.523333]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {vectors
          .filter(v => {
            if (info.all) return true;
            if (info.oligarchs && reverseIndex[v[1].trim()]) return true;
            if (info.UA && v[2] === 'Ukraine') return true;
            if (info.RU && v[2] === 'Russian Federation') return true;
            if (info.US && v[2] === 'United States') return true;
            if (info.GB && v[2] === 'United Kingdom') return true;
            if (info.FR && v[2] === 'France') return true;
            if (info.DE && v[2] === 'Germany') return true;

            return false;
          })
          .map(v => {
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
                      case 'United States':
                        return uaplane;
                      case 'United Kingdom':
                        return uaplane;
                      case 'Ukraine':
                        return uaplane;
                      case 'Germany':
                        return uaplane;
                      case 'France':
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
