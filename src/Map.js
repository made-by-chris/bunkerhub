import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
const b = 10
export default ({tileLayerThemes, text}) => {
    const [vectors, setVectors ] = useState([])
    const getVectors = () => fetch(`https://opensky-network.org/api/states/all?lamin=${50.450001-b}&lomin=${30.523333-b}&lamax=${50.450001+b}&lomax=${30.523333+b}`)
    .then(res=>res.json())
    .then(res=>setVectors(res.states))
    useEffect(()=>{
        const vectorInterval = setInterval(()=> {
            getVectors()
        },10000)
        getVectors()
        return () => clearInterval(vectorInterval)
    },[])

    const vectorIcon = L.icon({
        iconUrl: require('./plane.png'),
        iconRetinaUrl: require('./plane.png'),
        iconSize: [64,64],
        iconAnchor: [32, 64],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });
    let icon = L.icon({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
   })
    console.log(vectorIcon)
    return (
        <MapContainer center={[50.450001, 30.523333]} zoom={4}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={tileLayerThemes[text]}
            />
            {vectors.map(v => {
                return  <Marker position={[v[6], v[5]]}
                icon={vectorIcon}
                >
                <Popup>
                {v[0]}  {v[1]}  {v[2]}
                </Popup>
            </Marker>
            })}
            <Marker position={[50.450001, 30.523333]} icon={icon}>
                <Popup>
                KYIV
                </Popup>
            </Marker>
        </MapContainer>
    )
}