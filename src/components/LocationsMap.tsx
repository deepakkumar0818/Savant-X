'use client';

import { useState, useEffect } from 'react';
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
  coordinates: [number, number]; // [lat, lng]
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

// Component to handle map view changes
function MapViewUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// Colorful marker icons matching theme
const createCustomIcon = (type: Location['type']) => {
  const colors: Record<Location['type'], { bg: string; border: string }> = {
    headquarters: { bg: '#dc2626', border: '#991b1b' }, // red
    office: { bg: '#16a34a', border: '#15803d' }, // green
    location: { bg: '#2563eb', border: '#1d4ed8' } // blue
  };

  const color = colors[type];

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: linear-gradient(135deg, ${color.bg} 0%, ${color.border} 100%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 0 0 2px ${color.bg}40;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    ">
      <div style="
        width: 14px;
        height: 14px;
        background-color: #ffffff;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      "></div>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
};

export default function LocationsMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([28.3949, 84.1240]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    setMapCenter(location.coordinates);
    setMapZoom(location.type === 'location' ? 5 : 8);
  };

  if (!mounted) {
    return (
      <div className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
        <div className="h-[600px] flex items-center justify-center">
          <div className="text-slate-600">Loading map...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-5">
          <h3 className="text-xl font-bold text-white">Our Global Locations</h3>
          <p className="text-blue-100 text-sm mt-1">Select a location to view details and get directions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Location List - Left Sidebar */}
          <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-r border-blue-200/50">
            <div className="h-[600px] overflow-y-auto p-4 space-y-2">
              {locations.map((location) => {
                const isSelected = selectedLocation?.id === location.id;
                const getBadgeColor = () => {
                  if (location.type === 'headquarters') return 'bg-gradient-to-r from-red-600 to-red-700';
                  if (location.type === 'office') return 'bg-gradient-to-r from-green-600 to-green-700';
                  return 'bg-gradient-to-r from-blue-600 to-indigo-600';
                };

                return (
                  <button
                    key={location.id}
                    onClick={() => handleLocationClick(location)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
                        : 'bg-white/80 hover:bg-white border border-blue-200/50 hover:border-blue-300 text-slate-700 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h4 className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                            {location.name}
                          </h4>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold text-white ${getBadgeColor()}`}>
                            {location.type === 'headquarters' ? 'HQ' : location.type === 'office' ? 'Office' : 'Location'}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isSelected ? 'text-blue-100' : 'text-slate-600'
                        }`}>
                          {location.address}
                        </p>
                      </div>
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isSelected ? 'text-white' : 'text-blue-600'} ${isSelected ? 'rotate-90' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map Container - Right Side */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="h-[600px] w-full relative">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
                scrollWheelZoom={true}
                className="map-container rounded-r-3xl"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapViewUpdater center={mapCenter} zoom={mapZoom} />
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.coordinates}
                    icon={createCustomIcon(location.type)}
                    eventHandlers={{
                      click: () => handleLocationClick(location),
                    }}
                  >
                    <Popup className="custom-popup">
                      <div className="p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">{location.name}</h4>
                        <p className="text-xs text-slate-600 mb-3">{location.address}</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates[0]},${location.coordinates[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg px-3 py-1.5 font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View on Google Maps
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Selected Location Info Overlay */}
            {selectedLocation && (
              <div className="absolute bottom-4 left-4 right-4 lg:right-4 bg-white/95 backdrop-blur-sm border border-blue-200 rounded-xl shadow-xl p-5 z-[1000] animate-scale-in">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 text-base">{selectedLocation.name}</h4>
                      {selectedLocation.type === 'headquarters' && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold">
                          Headquarters
                        </span>
                      )}
                      {selectedLocation.type === 'office' && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold">
                          Office
                        </span>
                      )}
                      {selectedLocation.type === 'location' && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold">
                          Location
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{selectedLocation.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg px-4 py-2 font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open in Google Maps
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-lg"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
