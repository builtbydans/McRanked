import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Restaurant } from "@/types/restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
  rank: number;
  selected: boolean;
  onSelect: () => void;
}

const rankLabels: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

export function RestaurantCard({
  restaurant,
  rank,
  selected,
  onSelect,
}: RestaurantCardProps) {
  return (
    <button
      id={`restaurant-${restaurant.id}`}
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative w-full rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
        selected
          ? "border-amber-300/80 shadow-soft ring-1 ring-amber-200/70"
          : "border-border/80 hover:-translate-y-0.5 hover:border-foreground/10 hover:shadow-lift",
      )}
      aria-pressed={selected}
    >
      {selected && (
        <div className="absolute inset-y-4 left-0 w-0.5 rounded-full bg-amber-500" />
      )}
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums",
            rank <= 3
              ? "bg-amber-50 text-lg"
              : "bg-muted text-muted-foreground",
          )}
        >
          {rankLabels[rank] ?? String(rank).padStart(2, "0")}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate pr-1 text-[15px] font-semibold tracking-[-0.02em] text-foreground">
            {restaurant.name.replace("McDonald's ", "")}
          </h3>
          <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-medium">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {restaurant.googleRating.toFixed(1)}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {restaurant.city}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {restaurant.awards.slice(0, 2).map((award) => (
              <Badge
                key={award}
                className="border-transparent bg-muted/80 px-2 py-0.5 text-[10px]"
              >
                {award}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            AI score
          </span>
          <div className="mt-0.5 flex items-baseline">
            <span className="font-mono text-2xl font-semibold tracking-[-0.08em] text-foreground">
              {restaurant.aiScore}
            </span>
            <span className="ml-0.5 text-[10px] text-muted-foreground">/100</span>
          </div>
        </div>
      </div>
    </button>
  );
}
