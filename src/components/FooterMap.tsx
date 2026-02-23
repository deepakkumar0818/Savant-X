'use client';

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  type: 'office' | 'headquarters' | 'location';
}

const locations: Location[] = [
  {
    id: 'bangalore',
    name: 'Bangalore Office',
    address: 'Whitefield, Bangalore, Karnataka, 560066, India',
    coordinates: [12.9716, 77.5946],
    type: 'office'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad Office',
    address: 'Hitech City, Hyderabad, Telangana, 500081, India',
    coordinates: [17.4486, 78.3908],
    type: 'office'
  },
  {
    id: 'headquarters',
    name: 'Headquarters',
    address: 'Panchanpur, Tekari, Gaya, Bihar, 824236, India',
    coordinates: [24.9366, 84.8425],
    type: 'headquarters'
  },
  {
    id: 'usa',
    name: 'United States Office',
    address: '1234 Technology Drive, Suite 500, San Francisco, CA 94105, USA',
    coordinates: [37.7749, -122.4194],
    type: 'location'
  },
  {
    id: 'canada',
    name: 'Canada Office',
    address: '456 Innovation Boulevard, Suite 1200, Toronto, ON M5H 2N2, Canada',
    coordinates: [43.6532, -79.3832],
    type: 'location'
  },
  {
    id: 'uae',
    name: 'UAE Office',
    address: 'Business Bay Tower, Floor 25, Office 2501, Dubai, UAE',
    coordinates: [25.2048, 55.2708],
    type: 'location'
  },
  {
    id: 'nepal',
    name: 'Nepal Office',
    address: 'Thamel, Kathmandu, Nepal',
    coordinates: [27.7172, 85.3240],
    type: 'location'
  },
  {
    id: 'singapore',
    name: 'Singapore Office',
    address: 'One Marina Boulevard, Level 15, Singapore 018989',
    coordinates: [1.2801, 103.8509],
    type: 'location'
  }
];

// Component to automatically fit bounds to show all markers (only once on mount)
function FitBounds() {
  const map = useMap();
  const hasFitted = useRef(false);
  
  useEffect(() => {
    if (locations.length > 0 && !hasFitted.current) {
      const bounds = L.latLngBounds(
        locations.map(loc => loc.coordinates)
      );
      // Add padding to ensure markers aren't at the edge
      map.fitBounds(bounds, { padding: [50, 50] });
      hasFitted.current = true;
    }
  }, [map]);
  
  return null;
}

// Custom marker icons with vibrant colors
const createCustomIcon = (type: Location['type']) => {
  const colors: Record<Location['type'], { bg: string; border: string; shadow: string }> = {
    headquarters: { bg: '#ef4444', border: '#dc2626', shadow: 'rgba(239, 68, 68, 0.4)' },
    office: { bg: '#22c55e', border: '#16a34a', shadow: 'rgba(34, 197, 94, 0.4)' },
    location: { bg: '#3b82f6', border: '#2563eb', shadow: 'rgba(59, 130, 246, 0.4)' }
  };

  const color = colors[type];

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: linear-gradient(135deg, ${color.bg} 0%, ${color.border} 100%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      box-shadow: 0 4px 12px ${color.shadow}, 0 2px 4px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pulse 2s ease-in-out infinite;
    ">
      <div style="
        width: 14px;
        height: 14px;
        background-color: #ffffff;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      "></div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

export default function FooterMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[350px] w-full bg-slate-100 flex items-center justify-center">
        <div className="text-slate-500 text-sm">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="h-[350px] w-full relative overflow-hidden">
      <MapContainer
        center={[30, 80]} // Initial center (will be adjusted by FitBounds)
        zoom={2}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        scrollWheelZoom={true}
        zoomControl={true}
        doubleClickZoom={true}
        dragging={true}
        className="footer-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <FitBounds />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={createCustomIcon(location.type)}
          >
            <Popup>
              <div className="p-2">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{location.name}</h4>
                <p className="text-xs text-slate-600">{location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
