import { useCallback, useState } from "react";
import { FoodRain } from "@/components/FoodRain";
import { Header } from "@/components/Header";
import { Leaderboard } from "@/components/Leaderboard";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MapView } from "@/components/MapView";
import { useRestaurants } from "@/hooks/useRestaurants";
import { analyseAllRestaurants } from "@/services/gemini";
import type { Restaurant } from "@/types/restaurant";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFoodRainVisible, setIsFoodRainVisible] = useState(false);
  const {
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
  } = useRestaurants();
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(() =>
      restaurants.reduce((best, restaurant) =>
        restaurant.aiScore > best.aiScore ? restaurant : best,
      ),
    );

  const selectRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    window.requestAnimationFrame(() => {
      document
        .getElementById(`restaurant-${restaurant.id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  const handleAnalyse = () => {
    void analyseAllRestaurants(restaurants).catch(() => undefined);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);

    if (city === "All cities") {
      setSelectedRestaurant(null);
      return;
    }

    const bestInCity = restaurants
      .filter((restaurant) => restaurant.city === city)
      .reduce((best, restaurant) =>
        restaurant.aiScore > best.aiScore ? restaurant : best,
      );
    selectRestaurant(bestInCity);
  };

  const completeLoading = useCallback(() => {
    setIsLoading(false);
    setIsFoodRainVisible(true);
  }, []);

  const completeFoodRain = useCallback(() => {
    setIsFoodRainVisible(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={completeLoading} />}
      {isFoodRainVisible && <FoodRain onComplete={completeFoodRain} />}
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header onAnalyse={handleAnalyse} />
        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(360px,35%)_minmax(0,65%)]">
          <Leaderboard
            restaurants={filteredRestaurants}
            query={query}
            onQueryChange={setQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            cities={cities}
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
            selectedId={selectedRestaurant?.id ?? null}
            onSelect={selectRestaurant}
          />
          <MapView
            restaurants={cityRestaurants}
            selectedRestaurant={selectedRestaurant}
            onSelect={selectRestaurant}
            onCloseDetails={() => setSelectedRestaurant(null)}
          />
        </div>
      </div>
    </>
  );
}
