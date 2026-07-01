import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SortOption } from "@/types/restaurant";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SearchBar({
  query,
  onQueryChange,
  sortBy,
  onSortChange,
}: SearchBarProps) {
  return (
    <div className="flex gap-2.5">
      <div className="relative min-w-0 flex-1">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search locations"
          className="pl-10"
          aria-label="Search restaurants"
        />
      </div>
      <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
        <SelectTrigger className="w-[136px]" aria-label="Sort restaurants">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="aiScore">AI Score</SelectItem>
          <SelectItem value="googleRating">Google Rating</SelectItem>
          <SelectItem value="reviewCount">Review Count</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
