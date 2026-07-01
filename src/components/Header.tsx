import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAnalyse: () => void;
}

export function Header({ onAnalyse }: HeaderProps) {
  return (
    <header className="relative z-30 flex h-[88px] shrink-0 items-center justify-between border-b border-white/15 bg-[#dd0402] px-5 text-white shadow-sm sm:px-7">
      <div className="flex min-w-0 items-center gap-3.5">
        <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/20 bg-black/10 shadow-sm">
          <img
            src="/mcdonalds-logo.png"
            alt="McDonald's"
            className="h-auto w-[102px] max-w-none select-none"
            draggable={false}
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <h1 className="text-xl font-bold tracking-[-0.04em] text-white">
              McRanked
            </h1>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-amber-200 sm:inline">
              United Kingdom
            </span>
          </div>
          <p className="mt-0.5 hidden truncate text-sm text-white/75 sm:block">
            AI ranks the best McDonald&apos;s restaurants based on customer
            reviews.
          </p>
        </div>
      </div>

      <div className="relative ml-4 shrink-0">
        <Button
          variant="outline"
          className="h-11 border-white/20 bg-white/10 pr-[94px] text-white/70"
          disabled
          onClick={onAnalyse}
          aria-label="Analyse all restaurants with Gemini — coming soon"
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">Analyse with Gemini</span>
          <span className="sm:hidden">Analyse</span>
        </Button>
        <Badge className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 border-amber-200 bg-amber-50 text-amber-800">
          Coming Soon
        </Badge>
      </div>
    </header>
  );
}
