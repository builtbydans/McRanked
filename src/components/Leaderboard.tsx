import { SlidersHorizontal } from "lucide-react";
import { CityFilter } from "@/components/CityFilter";
import { RestaurantCard } from "@/components/RestaurantCard";
import { SearchBar } from "@/components/SearchBar";
import type { Restaurant, SortOption } from "@/types/restaurant";

interface LeaderboardProps {
  restaurants: Restaurant[];
  query: string;
  onQueryChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedId: number | null;
  onSelect: (restaurant: Restaurant) => void;
}

export function Leaderboard({
  restaurants,
  query,
  onQueryChange,
  sortBy,
  onSortChange,
  cities,
  selectedCity,
  onCityChange,
  selectedId,
  onSelect,
}: LeaderboardProps) {
  return (
    <aside className="flex min-h-0 flex-col border-r border-border/80 bg-background">
      <div className="shrink-0 px-5 pb-4 pt-5">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
              Live leaderboard
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
              Britain&apos;s best
            </h2>
          </div>
          <span className="mb-0.5 text-xs font-medium text-muted-foreground">
            {restaurants.length} locations
          </span>
        </div>
        <SearchBar
          query={query}
          onQueryChange={onQueryChange}
          sortBy={sortBy}
          onSortChange={onSortChange}
        />
        <CityFilter
          cities={cities}
          selectedCity={selectedCity}
          onCityChange={onCityChange}
        />
      </div>

      <div className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-5 pb-6">
        {restaurants.length > 0 ? (
          <div className="space-y-2.5">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                rank={index + 1}
                selected={selectedId === restaurant.id}
                onSelect={() => onSelect(restaurant)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border p-8 text-center">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm font-semibold">No matching locations</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try another name or award.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
