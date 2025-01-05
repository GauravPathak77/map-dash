// components/MapComponent.js

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

const MapComponent = ({ locations }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      // Adjust the map to fit the markers
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.long]));
      map.fitBounds(bounds);
    }
  }, [locations, map]);

  // Create a custom red flag icon
  const redFlagIcon = new L.DivIcon({
    className: 'red-flag-icon',
    html: '<div class="red-flag"></div>', // Custom HTML for red flag
    iconSize: [30, 40],  // Size of the icon
    iconAnchor: [15, 40], // Anchor point of the icon
    popupAnchor: [0, -40], // Popup anchor point
  });

  return (
    <MapContainer
      center={[locations[0]?.lat || 0, locations[0]?.long || 0]}
      zoom={13}
      style={{ width: '100%', height: '500px' }}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.long]}
          icon={redFlagIcon} // Use the custom red flag icon here
        >
          <Popup>
            Latitude: {location.lat}, Longitude: {location.long}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
