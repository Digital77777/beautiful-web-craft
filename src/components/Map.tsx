
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // The Retrouvaille location coordinates (Observatory, Cape Town)
    const lat = -33.9308;
    const lng = 18.4741;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([lat, lng], 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Create custom marker icon with fire & ice theme
    const customIcon = L.divIcon({
      html: `
        <div style="
          background: linear-gradient(45deg, #f97316, #3b82f6);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          border: 2px solid white;
        ">
          <span style="color: white; font-size: 14px;">🔥</span>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    // Add marker for the restaurant
    L.marker([lat, lng], { icon: customIcon })
      .addTo(map.current)
      .bindPopup(`
        <div style="text-align: center; padding: 10px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: bold;">The Retrouvaille</h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Restaurant - Bar</p>
          <p style="margin: 0 0 8px 0; color: #374151; font-size: 13px;">1 Cranko Road, Observatory</p>
          <p style="margin: 0; color: #374151; font-size: 13px;">Opposite KFC Observatory</p>
        </div>
      `)
      .openPopup();

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10 rounded-2xl" />
    </div>
  );
};

export default Map;
