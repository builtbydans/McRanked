import { useEffect, useRef } from "react";
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { Layers3, MapPin } from "lucide-react";
import { RestaurantDetails } from "@/components/RestaurantDetails";
import type { Restaurant } from "@/types/restaurant";

interface MapViewProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onSelect: (restaurant: Restaurant) => void;
  onCloseDetails: () => void;
}

function markerColor(score: number) {
  if (score >= 90) return "#16a36a";
  if (score >= 75) return "#e79224";
  return "#dc5664";
}

function MapController({
  selectedRestaurant,
}: {
  selectedRestaurant: Restaurant | null;
}) {
  const map = useMap();
  const previousRestaurantId = useRef(selectedRestaurant?.id);

  useEffect(() => {
    if (!selectedRestaurant) {
      if (previousRestaurantId.current !== undefined) {
        map.flyTo([54.2, -3.2], 6, {
          duration: 0.8,
          easeLinearity: 0.25,
        });
      }
      previousRestaurantId.current = undefined;
      return;
    }
    if (selectedRestaurant.id === previousRestaurantId.current) {
      return;
    }
    previousRestaurantId.current = selectedRestaurant.id;
    map.flyTo(
      [selectedRestaurant.latitude, selectedRestaurant.longitude],
      Math.max(map.getZoom(), 13),
      { duration: 0.8, easeLinearity: 0.25 },
    );
  }, [map, selectedRestaurant]);

  return null;
}

export function MapView({
  restaurants,
  selectedRestaurant,
  onSelect,
  onCloseDetails,
}: MapViewProps) {
  return (
    <main className="relative min-h-[520px] overflow-hidden bg-[#ecece8]">
      <MapContainer
        center={[54.2, -3.2]}
        zoom={6}
        minZoom={5}
        scrollWheelZoom
        zoomControl
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController selectedRestaurant={selectedRestaurant} />
        {restaurants.map((restaurant) => {
          const selected = restaurant.id === selectedRestaurant?.id;
          const color = markerColor(restaurant.aiScore);
          return (
            <CircleMarker
              key={restaurant.id}
              center={[restaurant.latitude, restaurant.longitude]}
              radius={selected ? 12 : 8}
              pathOptions={{
                color: selected ? "#ffffff" : color,
                fillColor: color,
                fillOpacity: 1,
                opacity: 1,
                weight: selected ? 4 : 2,
                className: selected ? "map-marker-selected" : "map-marker",
              }}
              eventHandlers={{ click: () => onSelect(restaurant) }}
            >
              <Tooltip
                direction="top"
                offset={[0, -10]}
                opacity={1}
                permanent={selected}
                className="restaurant-tooltip"
              >
                <div className="text-[11px] font-semibold">
                  {restaurant.name.replace("McDonald's ", "")}
                  <span className="ml-2 font-mono text-amber-700">
                    {restaurant.aiScore}
                  </span>
                </div>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>

      <div className="pointer-events-none absolute left-4 top-4 z-[500] flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[11px] font-semibold shadow-soft backdrop-blur-md">
        <MapPin className="h-3.5 w-3.5" />
        United Kingdom
        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
        {restaurants.length} ranked
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 z-[500] hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-soft backdrop-blur-md sm:block">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          <Layers3 className="h-3 w-3" />
          AI score
        </div>
        <div className="flex items-center gap-3 text-[10px] font-medium">
          <span className="flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-full bg-emerald-500" /> 90+
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-full bg-amber-500" /> 75–89
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-2 w-2 rounded-full bg-rose-500" /> &lt;75
          </span>
        </div>
      </div>

      {selectedRestaurant && (
        <div className="absolute bottom-4 right-4 z-[600] w-[min(430px,calc(100%-2rem))] sm:bottom-5 sm:right-5">
          <RestaurantDetails
            key={selectedRestaurant.id}
            restaurant={selectedRestaurant}
            onClose={onCloseDetails}
          />
        </div>
      )}
    </main>
  );
}
