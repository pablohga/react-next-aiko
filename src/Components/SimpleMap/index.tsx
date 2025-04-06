'use client';

import React from "react";
import 'leaflet/dist/leaflet.css';
import './styles.css';
import dynamic from "next/dynamic";
function SimpleMap() {
  const position: [number, number] = [51.505, -0.09];

  // Importa o MapContainer dinamicamente, desativando SSR
  const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
  const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default SimpleMap;