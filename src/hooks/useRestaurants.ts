import { useMemo, useState } from "react";
import { restaurants } from "@/data/mockData";
import type { SortOption } from "@/types/restaurant";

export function useRestaurants() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("aiScore");
  const [selectedCity, setSelectedCity] = useState("All cities");
  const cities = useMemo(
    () => [
      "All cities",
      ...Array.from(new Set(restaurants.map((restaurant) => restaurant.city))).sort(),
    ],
    [],
  );

  const cityRestaurants = useMemo(
    () =>
      selectedCity === "All cities"
        ? restaurants
        : restaurants.filter((restaurant) => restaurant.city === selectedCity),
    [selectedCity],
  );

  const filteredRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cityRestaurants
      .filter(
        (restaurant) =>
          !normalizedQuery ||
          restaurant.name.toLowerCase().includes(normalizedQuery) ||
          restaurant.city.toLowerCase().includes(normalizedQuery) ||
          restaurant.awards.some((award) =>
            award.toLowerCase().includes(normalizedQuery),
          ),
      )
      .sort((a, b) => b[sortBy] - a[sortBy]);
  }, [cityRestaurants, query, sortBy]);

  return {
    restaurants,
    cityRestaurants,
    filteredRestaurants,
    cities,
    selectedCity,
    setSelectedCity,
    query,
    setQuery,
    sortBy,
    setSortBy,
  };
}
