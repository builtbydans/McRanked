import {
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatReviewCount } from "@/lib/utils";
import type { Restaurant } from "@/types/restaurant";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const metrics = [
  { key: "friesScore", label: "Fries", icon: "🍟" },
  { key: "burgerScore", label: "Burgers", icon: "🍔" },
  { key: "cleanlinessScore", label: "Cleanliness", icon: "🧹" },
  { key: "speedScore", label: "Speed", icon: "⚡" },
  { key: "staffScore", label: "Staff", icon: "🙂" },
  { key: "orderAccuracyScore", label: "Order accuracy", icon: "✅" },
] as const;

function awardIcon(award: string) {
  if (award.toLowerCase().includes("fast")) return "⚡";
  if (award.toLowerCase().includes("hidden")) return "✨";
  return "🏆";
}

export function RestaurantDetails({
  restaurant,
  onClose,
}: RestaurantDetailsProps) {
  return (
    <section className="animate-fade-up overflow-hidden rounded-[24px] border border-white/70 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl">
      <div className="border-b border-border/70 bg-gradient-to-br from-white via-white to-amber-50/70 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">
              <Sparkles className="h-3 w-3" />
              AI review analysis
            </div>
            <h2 className="mt-2 text-xl font-bold leading-tight tracking-[-0.04em]">
              {restaurant.name.replace("McDonald's ", "")}
            </h2>
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {restaurant.city}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3 w-3" />
                Updated today
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="-mr-2 -mt-2 shrink-0 rounded-full"
            aria-label="Close restaurant details"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-5 grid grid-cols-[1.15fr_1fr_1fr] divide-x divide-border/80 rounded-2xl border border-border/80 bg-white/80 p-3 shadow-sm">
          <div className="pr-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Overall
            </p>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-mono text-3xl font-semibold tracking-[-0.08em]">
                {restaurant.aiScore}
              </span>
              <span className="text-[10px] text-muted-foreground">AI score</span>
            </div>
          </div>
          <div className="px-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Google
            </p>
            <div className="mt-2 flex items-center gap-1 text-lg font-bold">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {restaurant.googleRating.toFixed(1)}
            </div>
          </div>
          <div className="pl-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Reviews
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-sm font-bold">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              {formatReviewCount(restaurant.reviewCount)}
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-[43vh] overflow-y-auto p-5">
        <p className="text-sm leading-6 text-foreground/75">{restaurant.summary}</p>

        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3.5">
          {metrics.map((metric) => {
            const value = restaurant[metric.key];
            return (
              <div key={metric.key}>
                <div className="mb-1.5 flex items-center justify-between text-[11px]">
                  <span className="font-medium">
                    <span className="mr-1.5">{metric.icon}</span>
                    {metric.label}
                  </span>
                  <span className="font-mono font-semibold tabular-nums">{value}</span>
                </div>
                <Progress
                  value={value}
                  indicatorClassName={
                    value >= 90
                      ? "bg-emerald-500"
                      : value >= 75
                        ? "bg-amber-500"
                        : "bg-rose-500"
                  }
                />
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border/70 pt-4">
          {restaurant.awards.map((award) => (
            <Badge
              key={award}
              className="border-amber-200/80 bg-amber-50 px-2.5 py-1.5 text-amber-900"
            >
              <span className="mr-1">{awardIcon(award)}</span>
              {award}
            </Badge>
          ))}
        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-xl bg-muted/70 px-3.5 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-emerald-600" />
            Based on verified review signals
          </span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
}
