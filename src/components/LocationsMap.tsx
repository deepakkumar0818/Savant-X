'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAP_PLACES, type MapPlace } from '@/lib/company';

const PIN_COLOR: Record<MapPlace['kind'], string> = {
  headquarters: '#e11d48',
  office: '#16a34a',
  operations: '#4f46e5',
};

/** Map pin with the place name beside it, as on the contact page design. */
const placeIcon = (place: MapPlace, selected: boolean) =>
  L.divIcon({
    className: 'office-marker',
    html: `<div style="display:flex;align-items:center;gap:6px;width:max-content;transform:translate(-14px,-34px);white-space:nowrap">
      <svg width="28" height="36" style="flex-shrink:0" viewBox="0 0 24 32" aria-hidden="true"><path d="M12 0C5.4 0 0 5.3 0 11.9 0 20.8 12 32 12 32s12-11.2 12-20.1C24 5.3 18.6 0 12 0z" fill="${PIN_COLOR[place.kind]}"/><circle cx="12" cy="12" r="4.5" fill="#fff"/></svg>
      <span style="background:#fff;border-radius:10px;padding:6px 12px;font:600 13px/1.2 system-ui,sans-serif;color:#0f172a;box-shadow:0 8px 20px -8px rgba(15,23,42,.35);${selected ? 'outline:2px solid #4f46e5' : ''}">${place.name.replace(/ \(.*\)$/, '')}</span>
    </div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });

function MapViewUpdater({ selected }: { selected: MapPlace | null }) {
  const map = useMap();
  const positioned = useRef(false);

  // The map can mount before its box has its final size (dynamic import, fonts, layout shifts).
  // Leaflet then loads only the tiles for that stale size, so re-measure whenever the box changes.
  useEffect(() => {
    const container = map.getContainer();
    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(container);
    return () => observer.disconnect();
  }, [map]);

  useEffect(() => {
    map.invalidateSize();
    // Jump on first render; only animate when the visitor picks another office.
    const animate = positioned.current;
    positioned.current = true;
    if (selected) map.setView(selected.coordinates, 8, { animate });
    else map.fitBounds(L.latLngBounds(MAP_PLACES.map((p) => p.coordinates)), { padding: [60, 60], animate });
  }, [selected, map]);
  return null;
}

/** Leaflet map of the offices and operating cities in src/lib/company.ts. The selection is controlled by the page. */
export default function LocationsMap({ selectedId, onSelect }: { selectedId: string | null; onSelect: (id: string) => void }) {
  const selected = MAP_PLACES.find((p) => p.id === selectedId) ?? null;

  return (
    <MapContainer center={[27.8, 80.8]} zoom={5} scrollWheelZoom={false} className="h-full w-full" style={{ zIndex: 0 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapViewUpdater selected={selected} />
      {MAP_PLACES.map((place) => (
        <Marker
          key={place.id}
          position={place.coordinates}
          icon={placeIcon(place, place.id === selectedId)}
          title={place.name}
          eventHandlers={{ click: () => onSelect(place.id) }}
        />
      ))}
    </MapContainer>
  );
}
