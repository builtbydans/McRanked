import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export function CityFilter({
  cities,
  selectedCity,
  onCityChange,
}: CityFilterProps) {
  return (
    <div
      className="scrollbar-hidden mt-3 flex gap-2 overflow-x-auto pb-1"
      aria-label="Filter restaurants by city"
    >
      {cities.map((city) => {
        const selected = city === selectedCity;
        return (
          <button
            key={city}
            type="button"
            onClick={() => onCityChange(city)}
            aria-pressed={selected}
            className={cn(
              "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3 text-[11px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40",
              selected
                ? "border-foreground bg-foreground text-background shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground",
            )}
          >
            {selected && <MapPin className="h-3 w-3" />}
            {city}
          </button>
        );
      })}
    </div>
  );
}
