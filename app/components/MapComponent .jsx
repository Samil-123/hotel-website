'use client'

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [43.1419051, 20.5203640];
  const customIcon = L.icon({
    iconUrl: 'https://res.cloudinary.com/dfh7msljp/image/upload/v1723337196/pngwing.com_d95erw.png',
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  });

  return (
    <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          You are here! <br /> Coordinates: {position[0]}, {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
